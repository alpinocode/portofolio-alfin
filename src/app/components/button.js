"use client";

import { useRouter } from "next/navigation";

export default function Button({ toLink, name, width }) {
  const router = useRouter();
  return (
    <button
      className="hidden lg:block bg-amber-600 mt-2 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded"
      style={{ width: width }}
      onClick={() => router.push(toLink)}
    >
      {name}
    </button>
  );
}
