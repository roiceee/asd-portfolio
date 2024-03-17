import Link from "next/link";
import RoiceText from "../roice";
import MenuItems from "./menu-links/menu-links";
import NavbarDropdown from "./navbar-dropdown";

function Navbar() {
  return (
    <section className="navbar sticky top-0 border-b w-full bg-white z-50">
      <div className="navbar px-4 max-w-7xl mx-auto">
        <div className="navbar-start">
          <Link href={"/"}>
            <RoiceText/>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-1 rounded-box">
            <MenuItems />
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <NavbarDropdown />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
