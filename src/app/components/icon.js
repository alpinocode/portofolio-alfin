"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Icon({ alt, src, toLink }) {
  const router = useRouter();

  if (!src) {
    console.error("Icon: 'src' is required");
    return null;
  }

  return (
    <div className="cursor-pointer">
      <Image
        src={src}
        width={50}
        height={50}
        alt={alt || "icon"}
        className="rounded-full ml-6"
        onClick={() => {
          if (toLink) {
            router.push(toLink);
          } else {
            console.warn("Icon: 'toLink' is not provided");
          }
        }}
      />
    </div>
  );
}
