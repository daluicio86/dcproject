import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function DropdownMenu({ t, items }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // 🔥 Cerrar menú al hacer click fuera
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={menuRef}>
      {/* Botón principal */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:text-24 text-24 text-black"
      >
        {t("jubiladosForm.reason5")}
      </button>

      {/* Menú dinámico */}
      {open && (
        <div className="absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-xl overflow-hidden z-20">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="block px-6 py-3 hover:bg-gray-100 duration-200"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
