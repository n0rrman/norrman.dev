import Image from "next/image";
import { FiSend, FiEdit } from "react-icons/fi";
import { MdDone } from "react-icons/md";

import { RiMenu3Fill } from "react-icons/ri";
import { RxPaperPlane } from "react-icons/rx";

import sentImg from "/public/contact.svg";

interface ModalProps {
  sent: boolean;
  topic: string;
  hideModal: () => void;
  textContent: {
    sentMessage: string;
    confirmationMessage: string;
  };
}

export default function Modal({
  sent = false,
  hideModal,
  topic,
  textContent: { sentMessage, confirmationMessage },
}: ModalProps) {
  const message = window.localStorage.getItem("message");
  const name = window.localStorage.getItem("name");
  const email = window.localStorage.getItem("email");

  const renderedModal = () => {
    if (!sent) {
      return (
        <>
          <h3 className="text-2xl">Confirm your {topic}:</h3>
          <p>{confirmationMessage}</p>
          <div className="flex flex-col items-center normal-case">
            <div className="overflow-scroll h-48 rounded-xl bg-bluishWhite/65 dark:bg-slate-900/65 w-full sm:w-[30rem] lg:w-[40rem] mb-3">
              <pre className="p-4 text-wrap whitespace-pre-line">{message}</pre>
            </div>
            <h3 className="text-right w-full text-[0.75rem]">{name}</h3>
            <h3 className="text-right w-full text-[0.6rem]">{email}</h3>
            <br />
            <div className="flex flex-row gap-5 text-base justify-center items-center">
              <button
                type="submit"
                className="flex flex-row justify-center items-center gap-2 bg-orange-500 text-white p-2 px-4 rounded-lg "
              >
                <div>Send</div>
                <FiSend />
              </button>
              <button
                onClick={hideModal}
                type="button"
                className="flex flex-row justify-center items-center gap-2 bg-transparent border-2 border-slate-900 p-2 px-4 rounded-lg "
              >
                <div>Edit</div>
                <FiEdit />
              </button>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row w-[300vw] translate-x-[100vw] animate-flyRight">
            <div className="w-[100vw] flex flex-col justify-center items-center gap-2">
              <h3 className="text-2xl flex flex-row items-center justify-center gap-2">
                <MdDone className="text-green-600 text-4xl" />
                <div className="">
                  {topic} sent
                  <span className="text-orange-500">!</span>
                </div>
              </h3>
              <p>{sentMessage}</p>
            </div>
            <div className="w-[100vw]">
              <h3 className="flex flex-row items-center justify-end">
                <RiMenu3Fill className="text-5xl" />
                <RxPaperPlane className="text-7xl" />
              </h3>
            </div>
          </div>
          <div
            className={`relative flex justify-center items-center aspect-square w-[15rem] ${
              sent ? "opacity-100" : "opactiy-0"
            } transition-all duration-100`}
          >
            <Image
              className="object-contain mix-blend-multiply dark:mix-blend-hard-light select-none pointer-events-none contrast-125 dark:contrast-100 brightness-[0.9] dark:brightness-100"
              src={sentImg}
              priority
              alt=""
              fill
            />
          </div>
        </div>
      );
    }
  };

  return (
    <dialog className="w-full h-full absolute inset-0 bg-slate-200/10 dark:bg-slate-900/75 z-50 backdrop-blur-lg flex flex-col justify-center items-center py-10 gap-7">
      {renderedModal()}
    </dialog>
  );
}
