import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore"; // Düzeltildi

const firebaseConfig = {
    apiKey: "AIzaSyC5lrh8518i2UaAA18G8sXwfVvBB8DkKJo",
    authDomain: "testapp-350d5.firebaseapp.com",
    projectId: "testapp-350d5",
    storageBucket: "testapp-350d5.appspot.com",
    messagingSenderId: "483507605422",
    appId: "1:483507605422:web:f39f4231031b4607f9023f"
};


const app = initializeApp(firebaseConfig);


const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export const db = getFirestore(app);


export { app, auth };
