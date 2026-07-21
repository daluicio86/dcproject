"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FooterLinks } from "@/app/api/footerlinks";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative z-10 overflow-hidden bg-[#071f28] text-white">
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#20c99c]/10 blur-3xl" />
      <div className="container relative mx-auto max-w-8xl pt-14 lg:px-8">
        <div className="border-b border-white/10 py-16">
          <div className="grid grid-cols-12 gap-y-10 sm:gap-10">
            <div className="col-span-12 md:col-span-7">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#61dfb9]">Properties in Ecuador</p>
              <h2 className="mb-8 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">{t("footer.title")}</h2>
              <Link href="/contactus" className="inline-flex items-center gap-2 rounded-full bg-[#43d7aa] px-7 py-3.5 text-sm font-bold text-[#082129] transition hover:-translate-y-0.5 hover:bg-white">
                {t("footer.cta")} <Icon icon="ph:arrow-right-bold" width={18} height={18} />
              </Link>
            </div>
            {[FooterLinks.slice(0, 4), FooterLinks.slice(4, 8)].map((links, column) => (
              <div key={column} className={`col-span-12 sm:col-span-6 ${column === 0 ? "md:col-span-3" : "md:col-span-2"}`}>
                <div className="flex w-fit flex-col gap-4">
                  {links.map((item) => (
                    <Link key={item.href + item.label} href={item.href} className="text-base text-white/55 transition hover:translate-x-1 hover:text-white">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 py-7 md:flex-nowrap">
          <p className="text-sm text-white/40">© 2026 Properties in Ecuador</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-white/40 hover:text-[#61dfb9]">{t("footer.termsOfService")}</Link>
            <Link href="#" className="text-sm text-white/40 hover:text-[#61dfb9]">{t("footer.privacyPolicy")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
