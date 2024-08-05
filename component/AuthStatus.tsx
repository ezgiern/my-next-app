import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebase/functions/src";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
      style={{
        backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="%23a3d8f4" fill-opacity="1" d="M0,96L80,112C160,128,320,160,480,176C640,192,800,192,960,186.7C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"%3E%3C/path%3E%3C/svg%3E')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <div className="bg-blue-50 shadow-lg rounded-lg p-8 max-w-xl w-full text-center">
        {/* Logo Ekleme */}
        <div className="mb-6">
          <Image
            src="/image.png" // Buraya logonuzun yolunu ekleyin
            alt="Posteffect.io Logo"
            width={100} // Logo boyutunu burada ayarlayabilirsiniz
            height={100}
            className="mx-auto"
          />
        </div>

        {/* Başlık */}
        <h1 className="text-lg font-bold mb-8 text-blue-700">
          Posteffect.io&apos;ya Hoş Geldiniz
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Sosyal medya yönetimini kolaylaştırmak için buradayız!
        </p>

        {user ? (
          <div>
            <p className="text-lg font-semibold mb-4">Merhaba, {user.email}!</p>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
            >
              Çıkış Yap
            </button>
          </div>
        ) : (
          <div>
            <p className="text-lg text-gray-700 mb-4">
              Henüz giriş yapmadınız. Lütfen giriş yapın veya kaydolun!
            </p>
            <Link
              href="/login/page"
              className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Giriş Yap
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
