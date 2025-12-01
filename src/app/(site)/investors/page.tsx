"use client";
import { createUpdateContact } from '@/actions/contact/create-update-contacts';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function Investors() {
  const router = useRouter();
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { ok } = await createUpdateContact(formData);
    if (!ok) {
      alert('Contacto no se pudo actualizar');
      return;
    }
    form.reset();
  };

  return (
    <div className="container max-w-7xl mx-auto px-6 lg:px-0 pt-32 md:pt-44 pb-20 md:pb-32">
      {/* Encabezado */}
      <div className="mb-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Icon
            icon="ph:house-simple-fill"
            width={24}
            height={24}
            className="text-primary drop-shadow-md"
          />
          <p className="text-base font-semibold text-primary/90 tracking-wide uppercase">
            {t("investors.breadcrumb")}
          </p>
        </div>

        <h3 className="text-4xl sm:text-6xl font-semibold tracking-tight text-black mb-4 leading-tight drop-shadow-sm">
          {t("investors.title")}
        </h3>
        
        <p className="max-w-2xl mx-auto text-base text-black/60 leading-relaxed">
          {t("investors.description.name")}
        </p>

        <ul className="mt-8 flex flex-col md:flex-row md:justify-center md:gap-8 text-sm text-black/60">
          <li>{t("investors.description.point1")}</li>
          <li>{t("investors.description.point2")}</li>
          <li>{t("investors.description.point3")}</li>
          <li>{t("investors.description.point4")}</li>
        </ul>
      </div>

      {/* Descripción inferior */}
      <p className="text-base text-black/60 leading-relaxed max-w-3xl mx-auto text-center">
        {t("investors.description1")} 
      </p>

      <h4 className="text-3xl font-semibold tracking-tight text-black text-center mt-10 drop-shadow-sm">
        {t("investors.title1")}
      </h4>
    </div>
  );
}
