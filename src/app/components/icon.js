"use client";

import Image from "next/image";
import Link from "next/link";

export default function Icon({ alt, src, toLink }) {
  if (!src) {
    console.error("Icon: 'src' is required");
    return null;
  }

  return (
    <Link href={toLink}>
      <Image src={src} alt={alt} width={40} height={40} />
    </Link>
  );
}
