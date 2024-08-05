// pages/addAccount.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { linkFacebookAccount } from "../../socialmedia/LinkFacebook";

const AddAccount: React.FC = () => {
  const [accountName, setAccountName] = useState("");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hesap Eklendi:", accountName);

    router.push("/addAccount/page");
  };

  return (
    <div className="max-w-6xl  p-8">
      <div className="flex items-stretch">
        <Image
          src="/image.png"
          alt="Description"
          width={50}
          height={50}
          className=" h-auto object-contain"
        />
        <h1 className="text-2xl text-blue-300 font-semibold mt-2">
          Posteffect
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 mt-10 ml-10">
        <div>
          <label
            htmlFor="accountName"
            className="block text-2xl font-small text-gray-700"
          >
            Kanallarını Bağla
          </label>
          <p className="font-small text-gray-700 mt-4 pb-3">
            Sizde paketiniz dahilinde sahibi olduğunuz sosyal medya
            hesaplarınızı kolayca bağlayınız. Eğer META hesaplarınızda business
            yetkisi yoksa lütfen yönlendirmeleri takip ederek business yetkisi
            veriniz.
          </p>
        </div>

        <div className="grid grid-cols-3 divide-x">
          <div className="w-3/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-lg">
            <div className="bg-gradient-to-r from-purple-400 via-pink-500 rounded-lg to-red-500 text-white h-10 max-h-fit flex flex-items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-3 mt-3 "
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <p className="ml-3 mt-2 font-medium">Instagram</p>
            </div>
            <a href="#">
              <h5 className="mb-2 mt-4 p-4 text-md font-small text-center tracking-tight text-gray-900 dark:text-white">
                Kanalınıza bağlı herhangi bir hesabınız bulunmamaktadır.
              </h5>
            </a>
            <p className="mb-6 font-small text-gray-700 dark:text-gray-400 text-center">
              Sosyal medya kanallarınızı bağlayarak gönderi planlayın.
            </p>
            <a
              href="#"
              className="inline-flex items-center mb-8 ml-14 px-3 py-2 text-sm font-medium text-center text-white bg-green-400 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Hesap bağla
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

          <div className="w-3/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-lg">
            <div className="bg-gradient-to-r from-gray-400 via-black-800 rounded-lg to-gray-800 text-white h-10 max-h-fit flex flex-items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-5 ml-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
              <p className="ml-3 mt-2 font-medium">Twitter</p>
            </div>
            <a href="#">
              <h5 className="mb-2 mt-4 p-4 text-md font-small text-center tracking-tight text-gray-900 dark:text-white">
                Kanalınıza bağlı herhangi bir hesabınız bulunmamaktadır.
              </h5>
            </a>
            <p className="mb-6 font-small text-gray-700 dark:text-gray-400 text-center">
              Sosyal medya kanallarınızı bağlayarak gönderi planlayın.
            </p>
            <a
              href="#"
              className="inline-flex items-center ml-14 px-3 py-2 text-sm font-medium text-center text-white bg-green-400 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Hesap bağla
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

          <div className="w-3/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-lg">
            <div className="bg-gradient-to-r from-blue-400 via-blue-800 rounded-lg to-blue-800 text-white h-10 max-h-fit flex flex-items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-5 ml-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
              <p className="ml-3 mt-2 font-medium">Facebook</p>
            </div>
            <a href="#">
              <h5 className="mb-2 mt-4 p-4 text-md font-small text-center tracking-tight text-gray-900 dark:text-white">
                Kanalınıza bağlı herhangi bir hesabınız bulunmamaktadır.
              </h5>
            </a>
            <p className="mb-6 font-small text-gray-700 dark:text-gray-400 text-center">
              Sosyal medya kanallarınızı bağlayarak gönderi planlayın.
            </p>
            <button
              onClick={linkFacebookAccount}
              className="inline-flex items-center ml-14 px-3 py-2 text-sm font-medium text-center text-white bg-green-400 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Hesap bağla
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x">
          <div className="w-3/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-lg">
            <div className="bg-gradient-to-r from-gray-700 via-blue-400 rounded-lg to-gray-700 text-white h-10 max-h-fit flex flex-items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-5 ml-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
              <p className="ml-3 mt-2 font-medium">LinkedIn</p>
            </div>
            <a href="#">
              <h5 className="mb-2 mt-4 p-4 text-md font-small text-center tracking-tight text-gray-900 dark:text-white">
                Kanalınıza bağlı herhangi bir hesabınız bulunmamaktadır.
              </h5>
            </a>
            <p className="mb-6 font-small text-gray-700 dark:text-gray-400 text-center">
              Sosyal medya kanallarınızı bağlayarak gönderi planlayın.
            </p>
            <a
              href="#"
              className="inline-flex items-center ml-14 px-3 py-2 text-sm font-medium text-center text-white bg-green-400 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Hesap bağla
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

          <div className="w-3/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-lg">
            <div className="bg-gradient-to-r from-blue-400 via-blue-600 rounded-lg to-gray-400 text-white h-10 max-h-fit flex flex-items-center ">
              <svg
                className="h-9 w-5 ml-3"
                fill="currentColor"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlSpace="preserve"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinejoin: "round",
                  strokeMiterlimit: "1.41421",
                }}
              >
                <path
                  id="telegram-1"
                  d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
                />
              </svg>
              <p className="ml-3 mt-2 font-medium">Telegram</p>
            </div>
            <a href="#">
              <h5 className="mb-2 mt-4 p-4 text-md font-small text-center tracking-tight text-gray-900 dark:text-white">
                Kanalınıza bağlı herhangi bir hesabınız bulunmamaktadır.
              </h5>
            </a>
            <p className="mb-6 font-small text-gray-700 dark:text-gray-400 text-center">
              Sosyal medya kanallarınızı bağlayarak gönderi planlayın.
            </p>
            <a
              href="#"
              className="inline-flex items-center mb-6 ml-14 px-3 py-2 text-sm font-medium text-center text-white bg-green-400 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Hesap bağla
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAccount;
