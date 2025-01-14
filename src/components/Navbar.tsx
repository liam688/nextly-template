"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"

export const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <span>
                <Image
                  src="/img/logo.svg"
                  width="32"
                  alt="N"
                  height="32"
                  className="w-8"
                />
              </span>
            <span>Smart Growth</span>
          </span>
        </Link>

        {/* Theme Switcher */}
        <div className="nav__item">
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
