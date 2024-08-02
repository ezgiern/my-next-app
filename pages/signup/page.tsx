"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../firebase/functions/src";
import Link from "next/link";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.grecaptcha) {
      window.grecaptcha.ready(() => {
        window.grecaptcha.render("recaptcha-container", {
          sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string,
          callback: (token: string) => {
            setRecaptchaToken(token);
          },
        });
      });
    }
  }, []);

  const handleSignUp = async () => {
    if (!recaptchaToken) {
      setMessage("Lütfen reCAPTCHA doğrulamasını tamamlayın.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Şifreler uyuşmuyor.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await sendEmailVerification(user);

      setMessage("Kayıt başarılı! Lütfen e-postanızı kontrol edin.");
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
              Şifre Oluştur
            </label>
            <input
              type="password"
              placeholder="Şifre Oluştur"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Şifreni Doğrula
            </label>
            <input
              type="password"
              placeholder="Şifreni Doğrula"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div id="recaptcha-container" className="mt-4"></div>{" "}
          {/* reCAPTCHA Widget'ı Burada */}
          <button
            onClick={handleSignUp}
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Devam Et
          </button>
          <div className="mt-4 text-sm text-center">
            <Link href="/login/page" className="text-blue-500">
              Hesabınız var mı? Şimdi Giriş Yap!
            </Link>
          </div>
          <div className="mt-4 text-sm text-center">
            {message && (
              <p
                className={`mt-4 text-sm text-center ${
                  message === "Kayıt başarılı! Lütfen e-postanızı kontrol edin."
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
