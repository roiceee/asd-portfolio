"use client";
import { useCallback, useEffect, useRef } from "react";
import MenuItems from "./menu-links/menu-links";

function NavbarDropdown() {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const closeDropdown = useCallback(() => {
    if (!dropdownRef.current) {
      return;
    }
    if (!dropdownRef.current.classList.contains("dropdown-open")) {
      dropdownRef.current.classList.add("dropdown-open");
      return;
    }
    setTimeout(() => {
      dropdownRef.current!.classList.remove("dropdown-open");
      (document.activeElement as HTMLElement)!.blur();
    }, 150);
  }, []);

  return (
    <div ref={dropdownRef} className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn btn-ghost lg:hidden"
        onClick={closeDropdown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact bg-base-100 bg-opacity-90 border border-accent dropdown-content mt-3 p-2 rounded-box w-52"
      >
        <MenuItems onClick={closeDropdown} />
      </ul>
    </div>
  );
}

export default NavbarDropdown;
