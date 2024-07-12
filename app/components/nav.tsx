"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./../components/mode-toggle";

const navItems = {
  "/": {
    name: "Home",
  },
  "/blog": {
    name: "Blog",
  },
  "/projects": {
    name: "Projects",
  },
  "/friends": {
    name: "Friends",
  },
  "/about": {
    name: "About",
  },
};

export function Navbar() {
  const pathname = usePathname();
  return (
    <aside className="mb-16 tracking-tight sticky top-0 bg-white dark:bg-black">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row justify-between items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav">
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all first:pl-0 hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 ${
                    pathname === path ||
                    (path !== "/" && pathname.includes(path))
                      ? "text-neutral-900 dark:text-neutral-100 font-bold"
                      : "text-neutral-600 dark:text-neutral-400"
                  }`}>
                  {name}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center h-full">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </aside>
  );
}
