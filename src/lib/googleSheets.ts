import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export const TARGET_SPREADSHEET_ID = '1j2m0lseH9NKdQtAgonNsNWkwZ5fTcHPgdqaNSOAS-Sw';
export const SPREADSHEET_URL = `https://docs.google.com/spreadsheets/d/${TARGET_SPREADSHEET_ID}/edit`;

let cachedOAuthToken: string | null = null;

export function setOAuthAccessToken(token: string | null) {
  cachedOAuthToken = token;
}

export function getOAuthAccessToken(): string | null {
  return cachedOAuthToken;
}

/**
 * Appends a row to Google Sheets using Google Sheets REST API
 */
export async function appendMessageToGoogleSheet(
  accessToken: string,
  data: { name: string; email: string; message: string }
) {
  const timestamp = new Date().toLocaleString('id-ID', {
    dateStyle: 'medium',
    timeStyle: 'medium',
    timeZone: 'Asia/Jakarta'
  });

  const rowValues = [
    timestamp,
    data.name,
    data.email,
    data.message,
    'Form Website ECOTECH'
  ];

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${TARGET_SPREADSHEET_ID}/values/A1:append?valueInputOption=USER_ENTERED`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      range: 'A1',
      majorDimension: 'ROWS',
      values: [rowValues]
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('Failed to append to Google Sheets:', errorData);
    throw new Error(errorData?.error?.message || 'Gagal mengirim data ke Google Sheets.');
  }

  return await response.json();
}

/**
 * Saves contact message to Firestore and syncs to Google Sheets if OAuth access token is present
 */
export async function saveContactFormSubmission(
  data: { name: string; email: string; message: string },
  accessToken?: string | null
) {
  let syncedToSheets = false;
  let sheetsError: string | null = null;

  const tokenToUse = accessToken || cachedOAuthToken;

  if (tokenToUse) {
    try {
      await appendMessageToGoogleSheet(tokenToUse, data);
      syncedToSheets = true;
    } catch (err: any) {
      console.warn('Google Sheets sync notice:', err);
      sheetsError = err.message || 'Gagal tersinkron ke Google Sheets';
    }
  }

  // Always store in Firestore as permanent record
  try {
    await addDoc(collection(db, 'contact_messages'), {
      name: data.name,
      email: data.email,
      message: data.message,
      syncedToSheets,
      createdAt: serverTimestamp(),
      timestampIso: new Date().toISOString()
    });
  } catch (firestoreErr) {
    console.error('Failed to store in Firestore:', firestoreErr);
  }

  return {
    success: true,
    syncedToSheets,
    sheetsError
  };
}
