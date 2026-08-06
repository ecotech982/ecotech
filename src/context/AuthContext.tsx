import React, { createContext, useContext, useEffect, useState } from 'react';
import { User as FirebaseUser, onAuthStateChanged } from 'firebase/auth';
import { 
  auth, 
  signInWithGoogle, 
  signInWithEmail, 
  registerWithEmail, 
  logout, 
  syncUserWithFirestore, 
  UserData 
} from '../lib/firebase';

interface AuthContextType {
  user: FirebaseUser | null;
  userData: UserData | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  signUpWithEmail: (email: string, pass: string, name: string) => Promise<void>;
  logoutUser: () => Promise<void>;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;
  openLoginModal: () => void;
  closeLoginModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          // Sync & update user profile in Firestore database
          const data = await syncUserWithFirestore(currentUser);
          setUserData(data);
        } catch (err) {
          console.error('Failed to sync user data with database:', err);
        }
      } else {
        const savedSession = localStorage.getItem('ecotech_saved_user');
        if (savedSession) {
          try {
            const parsed = JSON.parse(savedSession);
            setUser(parsed.user);
            setUserData(parsed.userData);
          } catch (e) {
            setUser(null);
            setUserData(null);
          }
        } else {
          setUser(null);
          setUserData(null);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLoginWithGoogle = async () => {
    setLoading(true);
    try {
      const res = await signInWithGoogle();
      setUser(res.user);
      setUserData(res.userData);
      setIsLoginModalOpen(false);
    } catch (err) {
      setLoading(false);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleLoginWithEmail = async (email: string, pass: string) => {
    setLoading(true);
    try {
      const res = await signInWithEmail(email, pass);
      setUser(res.user);
      setUserData(res.userData);
      setIsLoginModalOpen(false);
    } catch (err) {
      setLoading(false);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleSignUpWithEmail = async (email: string, pass: string, name: string) => {
    setLoading(true);
    try {
      const res = await registerWithEmail(email, pass, name);
      setUser(res.user);
      setUserData(res.userData);
      setIsLoginModalOpen(false);
    } catch (err) {
      setLoading(false);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
      setUser(null);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        userData,
        loading,
        loginWithGoogle: handleLoginWithGoogle,
        loginWithEmail: handleLoginWithEmail,
        signUpWithEmail: handleSignUpWithEmail,
        logoutUser: handleLogout,
        isLoginModalOpen,
        setIsLoginModalOpen,
        openLoginModal,
        closeLoginModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
