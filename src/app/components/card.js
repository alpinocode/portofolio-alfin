"use client";
import Image from "next/image";

export default function Card({ icon, title, description }) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm justify-center dark:bg-gray-800 dark:border-gray-700 text-center">
      <div className="flex justify-center mb-2">
        <Image src={icon} alt="home" width={40} height={40} />
      </div>

      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
