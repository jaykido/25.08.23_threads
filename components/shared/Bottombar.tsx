"use client";

import { sidebarLinks } from "@/components/shared/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Bottombar() {
  const pathname = usePathname();

  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`bottombar_link ${isActive && "bg-primary-500"}`}
            >
              {" "}
              {/* Wrap in a flex container */}
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-suble-medium text-light-1 max-sm:hidden">
                {link.label.split(/\s+/)[0]}
              </p>{" "}
              {/* Add margin to create space */}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
export default Bottombar;
