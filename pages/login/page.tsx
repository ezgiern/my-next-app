import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image"; // Import the Image component

export const runtime = "edge";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Login successful!");
      router.push(`/calendar/page`);
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
          <div className="mt-4 flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">Gerçek kişi olduğunuzu doğrulayın</span>
          </div>
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
