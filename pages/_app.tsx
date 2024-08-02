import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Bu kod bloğu yalnızca tarayıcı ortamında çalışacak
    const app = initializeApp(firebaseConfig);

    // App Check'i reCAPTCHA v3 ile başlatıyoruz
    const appCheck = initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string
      ),
      isTokenAutoRefreshEnabled: true,
    });
  }, []);

  return <Component {...pageProps} />;
}

// Firebase yapılandırma objenizi buraya ekleyin
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN as string,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: process.env
    .NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID as string,
};

export default MyApp;
