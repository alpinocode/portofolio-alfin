"use client";
import Image from "next/image";
import Icon from "../components/icon";
import Button from "../components/button";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function HomeLayout({ onClick }) {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-10 lg:mt-20 gap-8 px-6 lg:px-20">
        {/* Social Icons */}
        <div className="flex flex-row mr-2 lg:flex-col gap-4 lg:gap-6">
          <Icon
            src={"/github.png"}
            alt={"github"}
            toLink={"https://github.com/alpinocode"}
          />
          <Icon
            src={"/linkedin.png"}
            alt={"linkedin"}
            toLink={"https://github.com/alpinocode"}
          />
          <Icon
            src={"/receive-mail.png"}
            alt="mail"
            toLink={
              "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBpDrvwgWdgGVZxDjNhdsrnPNVKkrVKsvBSsmXwXqPqzGkmtKPrXvxFjnvCDfwGtQgKkVrP"
            }
          />
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left flex flex-col gap-4 max-w-2xl">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#111a2b]">
            I&apos;m a Web Developer, Full Stack Developer, App Developer
          </h1>
          <p className="text-gray-700 text-sm lg:text-base">
            Saya adalah seorang Full Stack Developer dengan pengalaman dalam
            mengembangkan berbagai aplikasi berbasis web dan mobile. Dengan
            keahlian di JavaScript, PHP, Laravel, Express.js, React, dan Android
            Studio Kotlin, saya telah membangun beberapa proyek, mulai dari
            website bisnis, sistem autentikasi, hingga aplikasi mobile.
          </p>
          <Button name={"Learn More"} width={200} toLink={"/about"} />
        </div>

        {/* Profile Image */}
        <Image
          src={"/my-footage.png"}
          alt="my-fotoge"
          width={400}
          height={450}
          className="w-full lg:w-auto "
        />
      </div>

      {/* About Me Section */}
      <div className="flex flex-col items-center justify-between mt-20 gap-8 bg-white px-6 py-10">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111a2b] mb-2">
            About Me
          </h2>
          <p className="text-gray-700 text-lg">For More Information</p>
          <hr className="border-amber-600 mt-4 w-24 border-2 mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row gap-20 w-full max-w-5xl">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-[#111a2b]">
              Developing With a Passion While Exploring The World.
            </h2>
            <hr className="border-amber-600 mt-4 w-12 border-2" />
            <p className="text-gray-700 mt-4 text-sm lg:text-base">
              Saya adalah seorang Full Stack Developer dengan pengalaman dalam
              mengembangkan aplikasi berbasis web dan mobile.
              <br />
              <br />
              Dengan keahlian di JavaScript, PHP, Laravel, Express.js, React,
              dan Kotlin (Android Studio), saya telah membangun berbagai proyek:
              <br />
              <br /> ✅ Website Bisnis – Sistem manajemen layanan dengan
              autentikasi pengguna & pembayaran online.
              <br />✅ Sistem Autentikasi – Implementasi JWT & Laravel Sanctum
              untuk keamanan login.
              <br />✅ Aplikasi Mobile – Android dengan Kotlin & API integrasi.
            </p>
            <Button
              name={"Contact Me"}
              width={200}
              toLink="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBpDrvwgWdgGVZxDjNhdsrnPNVKkrVKsvBSsmXwXqPqzGkmtKPrXvxFjnvCDfwGtQgKkVrP"
            />
          </div>

          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="absolute top-4 left-4 w-full h-[300px] bg-[#F25F5C] rounded-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/my-project.png"
                alt="my-photo"
                width={400}
                height={450}
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* My Projects Section */}
      <div className="flex flex-col items-center mt-20 gap-8 bg-white px-6 py-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#111a2b]">
          My Projects
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Image
            src="/project-1.png"
            alt="my-project"
            width={400}
            height={300}
            className="w-full"
          />
          <Image
            src="/project-2.png"
            alt="my-project"
            width={400}
            height={300}
            className="w-full"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
