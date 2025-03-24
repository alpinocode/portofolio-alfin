import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F25F5C] text-white py-6 px-4 mt-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Bagian ikon sosial media */}
        <div className="flex flex-row justify-center md:justify-start gap-6">
          <Image
            src="/github.png"
            alt="GitHub"
            width={40}
            height={40}
            className="object-contain"
          />
          <Image
            src="/linken-icon.png"
            alt="LinkedIn"
            width={40}
            height={40}
            className="object-contain"
          />
          <Image
            src="/mail.png"
            alt="Email"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Gambar profil */}
        <Image
          src="/man.png"
          alt="Man"
          width={100}
          height={100}
          className="rounded-full object-cover shadow-lg"
        />

        {/* Email */}
        <h1 className="text-lg md:text-xl font-semibold text-center">
          alfinohasan629@gmail.com
        </h1>
      </div>

      {/* Garis pemisah */}
      <div className="flex justify-center mt-6">
        <hr className="w-full max-w-3xl border-t-2 border-white" />
      </div>

      {/* Copyright */}
      <div className="flex justify-center mt-4">
        <h2 className="text-sm md:text-base">Copyright © 2023 Alfino Hasan</h2>
      </div>
    </footer>
  );
}
