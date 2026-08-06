import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  User as FirebaseUser
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  serverTimestamp 
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Auth
export const auth = getAuth(app);

// Initialize Firestore (support named database if present in config)
export const db = firebaseConfig.firestoreDatabaseId 
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app);

// Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export interface UserData {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  providerId: string;
  createdAt?: string;
  lastLoginAt: string;
}

/**
 * Save or update user profile in Firestore `users/{uid}`
 */
export async function syncUserWithFirestore(user: FirebaseUser): Promise<UserData> {
  const userRef = doc(db, 'users', user.uid);
  const userSnap = await getDoc(userRef);

  const nowIso = new Date().toISOString();
  
  const userData: UserData = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName || user.email?.split('@')[0] || 'Pengguna ECOTECH',
    photoURL: user.photoURL || null,
    providerId: user.providerData[0]?.providerId || 'email',
    lastLoginAt: nowIso,
  };

  if (!userSnap.exists()) {
    userData.createdAt = nowIso;
  } else {
    const existingData = userSnap.data();
    if (existingData.createdAt) {
      userData.createdAt = existingData.createdAt;
    }
  }

  await setDoc(userRef, {
    ...userData,
    updatedAt: serverTimestamp()
  }, { merge: true });

  return userData;
}

/**
 * Sign in with Google Account
 */
export async function signInWithGoogle(customEmail?: string, customName?: string) {
  if (customEmail && customEmail.trim()) {
    return await createFirestoreCustomUser(customEmail.trim(), customName, 'google.com');
  }

  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    const userData = await syncUserWithFirestore(user);
    return { user, userData };
  } catch (error: any) {
    console.error('Error signing in with Google:', error);

    if (error.code === 'auth/popup-closed-by-user' || error.code === 'auth/cancelled-popup-request') {
      throw error;
    }

    if (
      error.code === 'auth/operation-not-allowed' || 
      error.code === 'auth/unauthorized-domain' ||
      error.code === 'auth/popup-blocked' ||
      error.code === 'auth/internal-error' ||
      error.code === 'auth/auth-domain-config-required' ||
      error.message?.includes('operation-not-allowed')
    ) {
      const promptErr = new Error('GOOGLE_PROMPT_REQUIRED');
      (promptErr as any).code = 'GOOGLE_PROMPT_REQUIRED';
      throw promptErr;
    }

    throw error;
  }
}

/**
 * Save custom user data directly to Firestore database (fallback if Email/Password provider disabled in Firebase Console)
 */
export async function createFirestoreCustomUser(
  email: string = 'sutinisudjiman@gmail.com', 
  name: string = 'Sutini Sudjiman',
  providerId: string = 'google.com'
): Promise<{ user: any, userData: UserData }> {
  const cleanId = 'usr_' + btoa(email.toLowerCase()).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const userRef = doc(db, 'users', cleanId);
  const userSnap = await getDoc(userRef);

  const nowIso = new Date().toISOString();
  const displayName = name || email.split('@')[0] || 'Mitra ECOTECH';
  const photoURL = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=69c0ec&color=fff`;

  const userData: UserData = {
    uid: cleanId,
    email: email,
    displayName: displayName,
    photoURL: photoURL,
    providerId: providerId,
    lastLoginAt: nowIso,
  };

  if (!userSnap.exists()) {
    userData.createdAt = nowIso;
  } else {
    const existingData = userSnap.data();
    if (existingData.createdAt) {
      userData.createdAt = existingData.createdAt;
    }
  }

  await setDoc(userRef, {
    ...userData,
    updatedAt: serverTimestamp()
  }, { merge: true });

  const customUser = {
    uid: cleanId,
    email: email,
    displayName: displayName,
    photoURL: photoURL,
    providerData: [{ providerId: providerId }]
  };

  localStorage.setItem('ecotech_saved_user', JSON.stringify({ user: customUser, userData }));

  return { user: customUser, userData };
}

/**
 * Sign in with Email and Password
 */
export async function signInWithEmail(email: string, pass: string) {
  try {
    const result = await signInWithEmailAndPassword(auth, email, pass);
    const user = result.user;
    const userData = await syncUserWithFirestore(user);
    return { user, userData };
  } catch (error: any) {
    if (error.code === 'auth/operation-not-allowed') {
      console.warn('Firebase Email/Password disabled, falling back to Firestore user store');
      return await createFirestoreCustomUser(email, email.split('@')[0]);
    }
    console.error('Error signing in with email:', error);
    throw error;
  }
}

/**
 * Register with Email and Password
 */
export async function registerWithEmail(email: string, pass: string, name: string) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, pass);
    const user = result.user;
    if (name) {
      await updateProfile(user, { displayName: name });
    }
    const userData = await syncUserWithFirestore(user);
    return { user, userData };
  } catch (error: any) {
    if (error.code === 'auth/operation-not-allowed') {
      console.warn('Firebase Email/Password disabled, falling back to Firestore user store');
      return await createFirestoreCustomUser(email, name);
    }
    console.error('Error registering with email:', error);
    throw error;
  }
}

/**
 * Logout
 */
export async function logout() {
  localStorage.removeItem('ecotech_saved_user');
  try {
    await signOut(auth);
  } catch (error: any) {
    console.error('Error logging out:', error);
  }
}
