import React from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const isCurrentPath = (path) => path === router?.pathname;
  const navItems = [
    {
      label: "Home",
      href: "/",
      isCurrent: isCurrentPath("/"),
    },
    {
      label: "About Us",
      href: "/about-us",
      isCurrent: isCurrentPath("/about-us"),
    },
    {
      label: "Services",
      href: "/services",
      isCurrent: isCurrentPath("/services"),
    },
    {
      label: "Contact",
      href: "/contact",
      isCurrent: isCurrentPath("/contact"),
    },
  ];

  return (
    <nav>
      <div className="absolute z-40 hidden md:flex justify-end gap-8 w-full md:pr-16 lg:pr-32 pt-16 text-[#f1f1f1] text-lg font-semibold">
        {navItems.map((item) => (
          <a
            className="hover:shadow-xl hover:text-white hover:underline underline-offset-4"
            key={item.label}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
