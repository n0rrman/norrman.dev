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
    edit: string;
    send: string;
    confirmation: string;
    confirmed: string;
  };
}

export default function Modal({
  sent = false,
  hideModal,
  topic,
  textContent: {
    sentMessage,
    confirmationMessage,
    send,
    edit,
    confirmation,
    confirmed,
  },
}: ModalProps) {
  const message = window.localStorage.getItem("message");
  const name = window.localStorage.getItem("name");
  const email = window.localStorage.getItem("email");

  const renderedModal = () => {
    if (!sent) {
      return (
        <>
          <h3 className="text-xl xs:text-2xl">
            {confirmation}
            <span className="text-orange-500">: </span>
            {topic}
          </h3>
          <p className="normal-case w-72 text-center">
            {confirmationMessage} {topic.toLowerCase()}?
          </p>
          <div className="flex flex-col items-center normal-case w-10/12">
            <div className="overflow-scroll h-60 rounded-xl bg-bluishWhite/80 dark:bg-slate-900/80 w-full border-2 dark:border-slate-200 border-slate-900">
              <pre className="p-4 text-wrap whitespace-pre-line">{message}</pre>
            </div>
            <br />
            <div className="flex flex-col-reverse md:flex-row text-base justify-between items-center w-full px-1 gap-5 md:gap-0">
              <div className="flex flex-row gap-4 justify-center">
                <button
                  type="submit"
                  className="flex flex-row justify-center items-center gap-2 bg-orange-500 text-white p-2 px-4 rounded-lg hover:text-orange-500 hover:bg-transparent border-orange-500 border-2 transition"
                >
                  <div>{send}</div>
                  <FiSend />
                </button>
                <button
                  onClick={hideModal}
                  type="button"
                  className="flex flex-row justify-center items-center gap-2 bg-transparent border-2 dark:border-slate-200 border-slate-900 hover:opacity-65 transition p-2 px-4 rounded-lg"
                >
                  <div>{edit}</div>
                  <FiEdit />
                </button>
              </div>
              <div className="">
                <h3 className="text-center md:text-right w-full text-base">
                  {name}
                </h3>
                <h3 className="text-center md:text-right w-full text-sm">
                  {email}
                </h3>
              </div>
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
                  {topic} {confirmed}!
                </div>
              </h3>
              <p className="normal-case">
                {sentMessage}
                <span className="text-orange-500">!</span>
              </p>
            </div>
            <div className="w-[100vw]">
              <h3 className="flex flex-row items-center justify-end">
                <RiMenu3Fill className="text-5xl" />
                <RxPaperPlane className="text-7xl" />
              </h3>
            </div>
          </div>
          <div
            className={`relative flex justify-center items-center aspect-square w-[12.6rem] ${
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
    <dialog className="w-full h-full absolute inset-0 bg-slate-200/90 dark:bg-slate-900/90 z-50 backdrop-blur-md flex flex-col justify-center items-center py-10 gap-3">
      {renderedModal()}
    </dialog>
  );
}
