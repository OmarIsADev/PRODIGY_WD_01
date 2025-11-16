const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar({ isScrolled }: { isScrolled: boolean }) {
  const navBaseClasses =
    "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-6 py-4";

  // Classes that change based on the 'isScrolled' state
  const navScrollClasses = isScrolled
    ? "bg-white text-gray-800 shadow-md"
    : "bg-blue-600 text-white";

  const linkBaseClasses =
    "font-semibold text-lg transform transition-all duration-200 inline-block";

  const linkHoverClasses = isScrolled
    ? "hover:text-blue-600"
    : "hover:text-yellow-300";

  return (
    <nav className={`${navBaseClasses} ${navScrollClasses}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold transition-colors duration-300"
        >
          Logo
        </a>

        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`${linkBaseClasses} ${linkHoverClasses}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
