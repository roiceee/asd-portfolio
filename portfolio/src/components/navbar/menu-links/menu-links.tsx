"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

interface MenuItemsProps {
  onClick?: () => void;
}

function MenuItems({ onClick }: MenuItemsProps) {
  const items = useRef<Array<HTMLAnchorElement | null>>(new Array());

  const pathname = usePathname();

  const addActive = useCallback(() => {
    items.current.forEach((element) => {
      if (!element) {
        return;
      }
      if (element.id === "/") {
        if (pathname === element.id) {
          element.classList.add("nav-active");
        } else {
          element.classList.remove("nav-active");
        }
      } else if (pathname.includes(element.id)) {
        element.classList.add("nav-active");
      } else {
        element.classList.remove("nav-active");
      }
      element.blur();
    });
  }, [pathname]);

  useEffect(() => {
    addActive();
  }, [addActive]);
  return (
    <>
      <li onClick={onClick}>
        <Link
          className="font-bold text-lg active:bg-accent active:text-white"
          href={"/"}
          ref={(element) => items.current.push(element)}
          id="/"
        >
          Home
        </Link>
      </li>
      <li onClick={onClick}>
        <Link
          className="font-bold text-lg active:bg-accent active:text-white"
          href={"/blog/1"}
          ref={(element) => items.current.push(element)}
          id="/blog"
        >
          Blog
        </Link>
      </li>
      <li onClick={onClick}>
        <Link
          className="font-bold text-lg active:bg-accent active:text-white"
          href={"/techstack"}
          ref={(element) => items.current.push(element)}
          id="/techstack"
        >
          Techstack
        </Link>
      </li>
      <li onClick={onClick}>
        <Link
          className="font-bold text-lg active:bg-accent active:text-white"
          href={"/contact"}
          ref={(element) => items.current.push(element)}
          id="/contact"
        >
          Contact me
        </Link>
      </li>
    </>
  );
}

export default MenuItems;
