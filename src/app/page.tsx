import Image from "next/image";

import backgroundImg from "/public/background.jpg";
import heroImg from "/public/heroImg.svg";

export default function Home() {
  return (
    <div>
      <section className="bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] to-rose-100 from-blue-100 dark:to-blue-950 to-80% dark:from-rose-950 -mb-9">
        <div className="flex h-[95vh] items-center justify-center text-slate-900 dark:text-slate-200">
          {/* <div className="absolute w-full h-full z-0 select-none">
          <div className="relative h-full w-full overflow-hidden select-none">
          <Image
          className="blur-2xl scale-150 brightness-110 contrast-75 select-none"
          alt=""
          src={backgroundImg}
          fill
          />
          </div>
        </div> */}

          <div className="flex flex-col w-1/2 p-20 gap-8">
            <h1 className="text-5xl font-semibold">
              Hello, world! This is a heading!
            </h1>
            <p className="text-2xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus dolores voluptates nobis ab assumenda error autem
              deserunt, laudantium explicabo quaerat
            </p>
            <button className="w-max px-8 py-3 text-xl rounded-[3rem] text-slate-200 bg-gradient-to-tr from-blueFrom to-blueTo">
              Press me
            </button>
          </div>
          <div className="w-1/2 h-full">
            <div className="relative h-full w-full">
              <Image
                className="object-contain mix-blend-multiply dark:mix-blend-hard-light contrast-[0.9]"
                src={heroImg}
                fill
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div className="p-40 bg-blue-950 skew-y-[-3deg] border-y-2 border-slate-200 min-h-screen">
        <div className="flex flex-col skew-y-3 gap-6 text-slate-200">
          <h1 className="text-3xl text-center">Services</h1>

          <div className="flex flex-row justify-center gap-8 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
            tenetur, molestias harum similique et eligendi aliquid voluptatem
            non rerum ipsam omnis quidem dicta quibusdam quas aperiam laborum
            quo placeat molestiae?
          </div>
        </div>
      </div>
      {/* <div className="skew-x-[-3deg] bg-slate-200 w-[90%] m-auto rounded-3xl">
        <div className="flex flex-row justify-center gap-6 p-20 skew-x-3">
          <div className=" w-72 h-[30rem] bg-gradient-to-tr from-blueFrom to-blueTo rounded-xl shadow-2xl">
            <div className="flex flex-col gap-5 w-full h-full border-2 rounded-xl border-white m-3 p-4">
              <h1 className="text-2xl text-slate-200">Lorem Ipsum and such</h1>
              <p className="text-slate-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                doloremque ad odio eveniet, nobis architecto ipsa enim nam
                molestias id modi
              </p>
            </div>
          </div>
          <div className="w-72 h-[30rem] bg-gradient-to-tr from-blueFrom to-blueTo rounded-2xl">
            asidiasjd
          </div>
          <div className="w-72 h-[30rem] bg-gradient-to-tr from-blueFrom to-blueTo rounded-2xl">
            asidiasjd
          </div>
        </div>
      </div> */}
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] to-rose-100 from-blue-100 dark:to-blue-950 to-80% dark:from-rose-950 -mt-9">
        <h1 className="pt-20 text-white text-3xl">contact</h1>
      </section>
    </div>
  );
}
