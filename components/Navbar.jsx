const Navbar = () => {
  const handleClick = (event, href) => {
    event.preventDefault();

    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetSection = document.querySelector(href);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "#about-us",
    },
    {
      label: "Services",
      href: "#gallery",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav>
      <div className="absolute z-40 flex flex-col md:flex-row items-end justify-end gap-8 w-full pr-10 md:pr-16 lg:pr-32 pt-10 md:pt-16 text-[#f1f1f1] text-lg font-semibold">
        {navItems.map((item) => (
          <a
            className="hover:drop-shadow-md hover:text-blue-400 hover:underline underline-offset-4"
            key={item.label}
            href={item.href}
            onClick={(event) => handleClick(event, item.href)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
