<<<<<<< HEAD
﻿import Image from "next/image";
import { Metadata } from "next";
import { Icon } from "@iconify/react/dist/iconify.js";

export const metadata: Metadata = { title: "404 Page | Property" };
=======
import Image from "next/image";
import { Metadata } from "next";
import { Icon } from "@iconify/react/dist/iconify.js"

export const metadata: Metadata = {
  title: "404 Page | Property ",
};
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921

const ErrorPage = () => {
  return (
    <>
      <section className="flex justify-center pb-0!">
<<<<<<< HEAD
        <Image src="/images/404.png" alt="404" width={490} height={450} unoptimized={true} />
      </section>
      <section className="text-center bg-cover relative overflow-x-hidden">
        <div className="flex gap-2.5 items-center justify-center">
          <span><Icon icon={"ph:house-simple-fill"} width={20} height={20} className="text-primary" /></span>
          <p className="text-base font-semibold text-dark/75 dark:text-white/75">Error 404</p>
        </div>
        <h2 className="text-dark text-52 relative font-bold dark:text-white">Lost? Let us help you find properties.</h2>
        <p className="text-lg text-dark/50 dark:text-white/50 font-normal w-full mx-auto">Looks like you hit a dead end, but we will help you get back on track.</p>
=======
        <Image
          src="/images/404.png"
          alt="404"
          width={490}
          height={450}
          unoptimized={true}
        />
      </section>
      <section className="text-center bg-cover relative overflow-x-hidden" >
        <div className='flex gap-2.5 items-center justify-center'>
          <span>
            <Icon
              icon={'ph:house-simple-fill'}
              width={20}
              height={20}
              className='text-primary'
            />
          </span>
          <p className='text-base font-semibold text-dark/75 dark:text-white/75'>
            Error 404
          </p>
        </div>
        <h2 className="text-dark text-52 relative font-bold dark:text-white " >
          Lost? Let’s Help You Find Properties.
        </h2>
        <p className="text-lg text-dark/50 dark:text-white/50 font-normal w-full mx-auto">
          Looks like you’ve hit a dead end — but don’t worry, we’ll help you get back on track
        </p>
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921
      </section>
    </>
  );
};

<<<<<<< HEAD
export default ErrorPage;
=======
export default ErrorPage;
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921
