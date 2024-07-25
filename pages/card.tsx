import React, { useState } from "react";
import { useRouter } from "next/router";
import { create } from "zustand";
import { createPost } from "createPost";

const card = () => {
  const [selectedAccount, setSelectedAccount] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  return (
    <div className="content-center min-h-screen ml-4 p-2 bg-black bg-opacity-50">
      <a
        href="#"
        className="flex flex-row block max-w-md p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <img
          src="image.png"
          alt="Description"
          className="w-1/6 h-auto object-contain"
        />
        <div className="flex flex-col">
          <h5 className=" text-l font-bold tracking-tight text-gray-900 dark:text-white">
            Posteffect.io
          </h5>
          <p className=" text-md font-light tracking-tight text-gray-900 dark:text-white">
            @posteffectio
          </p>
        </div>
      </a>
    </div>
  );
};

export default card;
