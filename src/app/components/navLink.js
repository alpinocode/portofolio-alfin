"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ toLink, name }) {
  const pathName = usePathname();
  const isActivte = pathName === toLink;
  return (
    <Link
      className={`${
        isActivte ? "text-black" : "text-gray-500"
      } hover:text-gray-600`}
      href={toLink}
    >
      {name}
    </Link>
  );
}
