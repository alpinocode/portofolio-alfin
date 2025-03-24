"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Icon({ alt, src, toLink }) {
  const router = useRouter();
  return (
    <div>
      <Image
        src={src}
        width={50}
        height={50}
        alt={alt}
        className="rounded-full ml-6"
        onClick={() => router.push(toLink)}
      />
    </div>
  );
}
