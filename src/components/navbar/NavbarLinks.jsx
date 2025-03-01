const NavbarLinks = () => {
  const links = [
    { name: "About me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <ul className="flex flex-col lg:flex-row lg:gap-6 font-bold text-center">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="block py-2 px-4 hover:text-orange-400 transition-colors duration-300"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
