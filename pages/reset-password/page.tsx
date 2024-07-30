import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image"; // Import the Image component

const ResetPassword = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleUpdatePassword = async () => {
    if (newPassword !== password) {
      setMessage("Passwords do not match");
      return;
    }

    const { error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
      setMessage("There was an error updating your password.");
    } else {
      setMessage("Password updated successfully!");
      router.push("/login/page");
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
          <h2 className="text-2xl font-bold mb-6">Şifreni Sıfırla</h2>
          <h2 className="text-xl font-light mb-6 ">
            Şifreni hatırlıyor musun?
            <Link href="/login/page" className="underline text-red-500 ml-2">
              GİRİŞ
            </Link>
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Yeni Şifre
            </label>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Şifreni Doğrula
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <button
            onClick={handleUpdatePassword}
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Oluştur
          </button>
          <div className="mt-4 text-sm text-center">
            {message && (
              <p
                className={`mt-4 text-sm text-center ${
                  message === "Password updated successfully!"
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
};

export default ResetPassword;
