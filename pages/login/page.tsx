"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { auth } from "../../firebase/functions/src";
import { signInWithEmailAndPassword } from "firebase/auth";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    // reCAPTCHA API'sinin yüklendiğinden emin olun
    const interval = setInterval(() => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha.render("recaptcha-container", {
            sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string,
            callback: (token: string) => {
              setRecaptchaToken(token);
            },
          });
        });
        clearInterval(interval);
      }
    }, 1000); // Her 1 saniyede bir kontrol et
  }, []);

  const handleLogin = async () => {
    if (!recaptchaToken) {
      setMessage("Lütfen reCAPTCHA doğrulamasını tamamlayın.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setMessage("Giriş başarılı!");
      router.push(`/calendar/page`);
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg flex max-w-4xl">
        <div className="w-1/2 p-8 bg-blue-100 flex flex-col justify-center items-center">
          <Image
            src="/image.png"
            alt="Description"
            width={200}
            height={200}
            className="w-3/4 h-auto object-contain"
          />
          <h1 className="text-3xl font-bold text-center mb-4">Posteffect.io</h1>
          <p className="text-center mb-6">
            Sosyal medya yönetimini kolaylaştırın!
          </p>
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">
            Posteffect.io&apos;ya hoşgeldin!
          </h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-posta
            </label>
            <input
              type="email"
              placeholder="E-posta"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Şifre
            </label>
            <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div id="recaptcha-container" className="mt-4"></div>
          <button
            onClick={handleLogin}
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Devam Et
          </button>
          <div className="mt-4 text-sm text-center">
            <Link href="/forgotPassword/page" className="text-blue-500">
              Şifremi unuttum?
            </Link>
          </div>
          <div className="mt-4 text-sm text-center">
            Hesabınız yok mu?{" "}
            <Link href="/signup/page" className="text-blue-500">
              Şimdi Kayıt ol!
            </Link>
          </div>
          <div className="mt-4 text-sm text-center">
            {message && <p className="text-red-500">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
