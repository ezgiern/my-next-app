import React from "react";
import Image from "next/image"; // Import the Image component
import { usePostStore } from "../../store/store";

const Card = () => {
  const { content, account } = usePostStore(); // Use Zustand store

  return (
    <div className="content-center min-h-screen ml-4 p-3 bg-black bg-opacity-50 w-4/12">
      <a
        href="#"
        className="flex flex-row block max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <Image
          src="/image.png"
          alt="Description"
          width={100}
          height={100}
          className="w-1/6 h-auto object-contain"
        />
        <div className="flex flex-col">
          <h5 className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
            Posteffect.io
          </h5>
          <p className="text-md font-light tracking-tight text-gray-900 dark:text-white">
            @posteffectio
          </p>
          <div className="mt-2 text-sm text-gray-700">
            <p>{account}</p>
            <p>{content}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
