"use client";
import Image from "next/image";
import Navbar from "../components/navbar.js";
import Footer from "../components/footer";

export default function ProjectsLayout() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        <div className="justify-center items-center mb-8 mt-12 ">
          <h1 className="text-black text-4xl font-bold text-center">
            Portofolio
          </h1>
          <hr className="border-amber-600 mt-4 w-24 border-2 mx-auto" />
        </div>
        <div className="justify-center items-center mt-12 mb-8">
          <h1 className="text-black text-3xl font-bold text-center">
            What Service You Will Get From Me
          </h1>
          <hr className="border-amber-600 mt-4 w-24 border-2 mx-auto" />
          <h2 className="text-black text-center ml-14 mr-8 mt-8">
            Saya menyediakan layanan pengembangan website bisnis dan aplikasi
            yang profesional, modern, dan responsif. Dengan pengalaman dalam
            teknologi seperti Laravel, React, Node.js, dan database MySQL,
            android studio Kotlin saya siap membantu bisnis Anda berkembang di
            dunia digital.
          </h2>
        </div>

        <div className="flex flex-col ">
          <div className="flex flex-col md:flex-row justify-center items-center mt-12 mb-8 gap-4 px-4 ml-8 mr-8">
            <Image
              src="/project-1.png"
              alt="argowisata"
              width={800}
              height={800}
              className="object-center w-full max-w-md md:max-w-lg"
            />
            <Image
              src="/projectApp-1-section1.png"
              alt="App Event Dicoding"
              width={300}
              height={20}
            />
            <Image
              src="/projectApp-1-section2.png"
              alt="App Event Dicoding"
              width={300}
              height={20}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-12 mb-8 gap-4 px-4 ml-8 mr-8">
            <Image
              src="/project-2.png"
              alt="mamah Laundry"
              width={800}
              height={800}
              className="object-center w-full max-w-md md:max-w-lg mt-4 md:mt-0"
            />
            <Image
              src={"/projectApp-2-section1.png"}
              alt="App Bookmarks News Api"
              width={300}
              height={20}
            />
            <Image
              src={"/projectApp-2-section2.png"}
              alt="App Bookmarks News Api"
              width={300}
              height={20}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-12 mb-8 gap-4 px-4 ml-8 mr-8">
            <Image
              src="/project-3.jpg"
              alt="mamah Laundry"
              width={800}
              height={800}
              className="object-center w-full max-w-md md:max-w-lg mt-4 md:mt-0"
            />
            <Image
              src="/projectApp-3-section1.png"
              alt="App Bookmarks News Api"
              width={300}
              height={20}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
