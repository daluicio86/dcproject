<<<<<<< HEAD
﻿"use client";
import { useTranslation } from 'react-i18next';
import Link from "next/link";
=======
"use client";
import { useTranslation } from 'react-i18next';
import Link from "next/link";
import { Icon } from "@iconify/react"
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921
import { FooterLinks } from "@/app/api/footerlinks";

const Footer = () => {
  const { t } = useTranslation();
<<<<<<< HEAD

  return (
    <footer className="relative z-10 mt-16 bg-dark">
      <div className="container mx-auto max-w-8xl pt-14 lg:px-0">
        <div className="border-b border-white/10 py-16">
          <div className="grid grid-cols-12 gap-y-6 sm:gap-10">
            <div className="col-span-12 md:col-span-7">
              <h2 className="mb-6 text-40 font-medium leading-[1.2] text-white lg:max-w-3/4">
                {t("footer.title")}
              </h2>
              <Link href="/contactus" className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:cursor-pointer hover:bg-white hover:text-dark">
                {t("footer.cta")}
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
              <div className="flex w-fit flex-col gap-4">
                {FooterLinks.slice(0, 4).map((item, index) => (
                  <div key={index}>
                    <Link href={item.href} className="text-xm text-white/40 hover:text-white">
=======
  // FooterLinks is now imported directly
  return (
    <footer className="relative z-10 bg-dark">
      <div className="container mx-auto max-w-8xl pt-14 px-4 sm:px-6 lg:px-0">
       {/* <div className="flex lg:items-center justify-between items-end lg:gap-11 pb-14 border-b border-white/10 lg:flex-nowrap flex-wrap gap-6">
          <p className="text-white text-sm lg:max-w-1/5">
            {t("footer.subscribeText")}
          </p>
          <div className="flex lg:flex-row flex-col items-center lg:gap-10 gap-3">
            <div className="flex gap-2 lg:order-1 order-2">
              <input type="email" placeholder={t("footer.emailPlaceholder")} className="rounded-full py-4 px-6 bg-white/10 placeholder:text-white text-white focus-visible:outline-0" />
              <button className="text-dark bg-white py-4 px-8 font-semibold rounded-full hover:bg-primary hover:text-white duration-300 hover:cursor-pointer">
                {t("footer.subscribeButton")}
              </button>
            </div>
            <p className="text-white/40 text-sm lg:max-w-[45%] order-1 lg:order-2">
              {t("footer.subscribeDisclaimer")}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#">
              <Icon icon="ph:x-logo-bold" width={24} height={24} className="text-white hover:text-primary duration-300" />
            </Link>
            <Link href="#">
              <Icon icon="ph:facebook-logo-bold" width={24} height={24} className="text-white hover:text-primary duration-300" />
            </Link>
            <Link href="#">
              <Icon icon="ph:instagram-logo-bold" width={24} height={24} className="text-white hover:text-primary duration-300" />
            </Link>
          </div>
        </div>*/}
        <div className="py-16 border-b border-white/10">
          <div className="grid grid-cols-12 sm:gap-10 gap-y-6">
            <div className="md:col-span-7 col-span-12">
              <h2 className="text-white leading-[1.2] text-40 font-medium mb-6 lg:max-w-3/4">
                {t("footer.title")}
              </h2>
              <Link href="/contactus" className="bg-primary text-base font-semibold py-4 px-8 rounded-full text-white hover:bg-white hover:text-dark duration-300 hover:cursor-pointer">
                {t("footer.cta")}
              </Link>
            </div>
            <div className="md:col-span-3 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-4 w-fit">
                {FooterLinks.slice(0, 4).map((item, index) => (
                  <div key={index}>
                    <Link href={item.href} className="text-white/40 text-xm hover:text-white">
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
<<<<<<< HEAD
            <div className="col-span-12 sm:col-span-6 md:col-span-2">
              <div className="flex w-fit flex-col gap-4">
                {FooterLinks.slice(4, 8).map((item, index) => (
                  <div key={index}>
                    <Link href={item.href} className="text-xm text-white/40 hover:text-white">
=======
            <div className="md:col-span-2 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-4 w-fit">
                {FooterLinks.slice(4, 8).map((item, index) => (
                  <div key={index}>
                    <Link href={item.href} className="text-white/40 text-xm hover:text-white">
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="flex flex-wrap items-center justify-between gap-6 py-6 md:flex-nowrap">
          <p className="text-sm text-white/40">©2025 Design & Developed by BWS</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-sm text-white/40 hover:text-primary">
              {t("footer.termsOfService")}
            </Link>
            <Link href="#" className="text-sm text-white/40 hover:text-primary">
=======
        <div className="flex justify-between md:flex-nowrap flex-wrap items-center py-6 gap-6">
          <p className="text-white/40 text-sm ">
            {/*©2025 Cm -Properties - Design & Developed by BWS*/}
            ©2025 Design & Developed by BWS
          </p>
          <div className="flex gap-8 items-center">
            <Link href="#" className="text-white/40 hover:text-primary text-sm">
              {t("footer.termsOfService")}
            </Link>
            <Link href="#" className="text-white/40 hover:text-primary text-sm">
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921
              {t("footer.privacyPolicy")}
            </Link>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </footer>
  );
};

export default Footer;

=======
    </footer >
  );
};

export default Footer;
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921
