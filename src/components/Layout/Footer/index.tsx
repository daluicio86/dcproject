"use client";
import { useTranslation } from 'react-i18next';
import Link from "next/link";
import { FooterLinks } from "@/app/api/footerlinks";

const Footer = () => {
  const { t } = useTranslation();

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
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-2">
              <div className="flex w-fit flex-col gap-4">
                {FooterLinks.slice(4, 8).map((item, index) => (
                  <div key={index}>
                    <Link href={item.href} className="text-xm text-white/40 hover:text-white">
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 py-6 md:flex-nowrap">
          <p className="text-sm text-white/40">©2025 Design & Developed by BWS</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-sm text-white/40 hover:text-primary">
              {t("footer.termsOfService")}
            </Link>
            <Link href="#" className="text-sm text-white/40 hover:text-primary">
              {t("footer.privacyPolicy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

