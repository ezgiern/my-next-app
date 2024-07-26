import React, { useState } from "react";
import CreatePost from "../pages/createPost/page";
import Card from "../pages/card/page";

export const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="absolute bottom-1 right-1 px-1 py-1 bg-blue-500 text-white rounded-full text-sm"
        type="button"
        onClick={() => setShowModal(true)}
      >
        +
      </button>
      {showModal ? (
        <>
          <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mr-14 ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg fixed   flex flex-row w-full bg-white outline-none focus:outline-none">
                <Card /> <CreatePost />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
