// pages/createPost.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import { usePostStore } from "../../store/store";

const CreatePost = () => {
  const [file, setFile] = useState<File | null>(null);
  const { content, setContent, account, setAccount } = usePostStore(); // Use Zustand store
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="max-w-xl p-2" aria-hidden="true">
      <div className="flex flex-row">
        <h2 className="text-l font-semibold mb-2 pl-4">Yeni Gönderi Oluştur</h2>
        <h2 className="text-l font-semibold pl-20">Adım 1/3</h2>
        <h2 className="text-l font-semibold pl-20">Gönderi Detayları</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Hesabını Seç */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <label
            htmlFor="account"
            className="block text-sm font-medium text-gray-700"
          >
            Hesabını Seç
          </label>
          <select
            id="account"
            value={account}
            onChange={(e) => setAccount(e.target.value)} // Use Zustand store
            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="" disabled>
              Bir hesap seçin
            </option>
            <option value="account1">Hesap 1</option>
            <option value="account2">Hesap 2</option>
            <option value="account3">Hesap 3</option>
          </select>
          <div className="flex flex-row mt-2">
            <h2 className="text-l font-light pr-28">İçerik Detayları</h2>
            <button
              type="button"
              className="mt-2 px-1 py-1 bg-green-500 text-white  rounded-2xl ml-28"
            >
              Tüm Kanallara Uygula
            </button>
          </div>
          <div className="border border-gray-300 mt-6">
            <label htmlFor="file" className="text-sm font-medium text-gray-700">
              Resim veya Video Ekle
            </label>
            <input
              id="file"
              type="file"
              onChange={handleFileChange}
              className="bg-white rounded-md text-gray-500 font-semibold h-40 flex flex-col items-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
            />
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              İçerik Metnini Buraya Yaz
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)} // Use Zustand store
              rows={4}
              className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="button"
            className="px-4 py-2 mt-2 ml-28 bg-yellow-500 text-white rounded-md hover:bg-gray-600"
          >
            Taslaklara Kaydet
          </button>
          <button
            type="submit"
            className="px-4 float-right mt-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Devam Et
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
