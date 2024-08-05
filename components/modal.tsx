import React, { useState } from "react";
import CreatePost from "../pages/createPost/page";
import Card from "../pages/card/page";

interface ModalProps {
  language: "tr" | "en"; // Modal bileşeni için dil props'u ekliyoruz
}

export const Modal: React.FC<ModalProps> = ({ language }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="absolute bottom-1 right-1 px-1 py-1 bg-[#0000FF] text-[#FFFFFF] rounded-full text-sm"
        type="button"
        onClick={() => setShowModal(true)}
      >
        +
      </button>
      {showModal ? (
        <>
          <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg fixed flex flex-row w-full bg-white outline-none focus:outline-none">
                <Card />
                <CreatePost language={language} />
              </div>
            </div>
            <button
              className="absolute text-xl font-semibold right-4 inline-block rounded border-neutral-800 pt-2 text-black-500"
              type="button"
              onClick={() => setShowModal(false)}
            >
              x
            </button>
          </div>
        </>
      ) : null}
    </>
  );
};
