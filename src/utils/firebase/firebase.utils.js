import { initializeApp } from 'firebase/app';
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithRedirect,
} from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCbAamvNm8f3CTsHmz2coQAU-Z6qPhBhkc',
    authDomain: 'e-commerce-website-cbf50.firebaseapp.com',
    projectId: 'e-commerce-website-cbf50',
    storageBucket: 'e-commerce-website-cbf50.appspot.com',
    messagingSenderId: '325868188227',
    appId: '1:325868188227:web:cd8f7d6d31070ca9b59af6',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);
