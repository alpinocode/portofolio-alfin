"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Icon from "../components/icon";
import Button from "../components/button";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const skills = [
  { name: "JavaScript", percentage: "80%" },
  { name: "HTML", percentage: "60%" },
  { name: "CSS", percentage: "90%" },
  { name: "React", percentage: "70%" },
  { name: "Next.js", percentage: "60%" },
  { name: "Node.js", percentage: "60%" },
  { name: "Express.js", percentage: "60%" },
  { name: "MongoDB", percentage: "60%" },
  { name: "kotlin", percentage: "80%" },
];
export default function AboutLayout() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col h-auto gap-4">
        <div className="justify-center items-center h-10 mb-2 mt-8">
          <h1 className="text-black text-4xl font-bold text-center">
            About Me
          </h1>
          <hr className="border-amber-600 mt-4 w-24 border-2 mx-auto" />
        </div>

        <div className="flex flex-col md:flex-col lg:flex-row justify-between mt-8 mb-8 h-auto gap-4 mr-2 ml-2">
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="absolute left-30 md:left-20 lg:left-20 w-[250px] h-[250px] bg-[#F25F5C] rounded-2xl"></div>
            <div className="relative rounded-2xl mt-2 md:mr-10 lg:mr-20 ">
              <Image
                src="/my-footage-background.png"
                alt="my-photo"
                width={200}
                height={800}
                className="rounded-2xl w-auto object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col text-balance w-full md:w-[80%] lg:w-[55%] gap-4 mr-2 ml-2">
            <h1 className="text-black text-3xl md:text-4xl font-bold">
              Coding with Passion While Building the Future
            </h1>
            <h2 className="text-black">
              Sebagai seorang programmer yang bersemangat, saya berkembang dalam
              memecahkan masalah yang kompleks dan membangun solusi yang
              inovatif. Dengan kecintaan yang mendalam pada coding dan
              pembelajaran berkelanjutan, saya membuat aplikasi yang efisien,
              terukur, dan aplikasi yang ramah pengguna. Perjalanan saya
              didorong oleh rasa ingin tahu, kreativitas, dan keinginan untuk
              membuat dampak yang berarti di dunia teknologi.
            </h2>
            <h2 className="text-black">Let&apos;s talk with me.</h2>
            <h2 className="text-black text-xl md:text-2xl font-bold">
              alfinohasan629@gmail.com
            </h2>
          </div>

          <div className="flex flex-col text-balance w-full md:w-[80%] lg:w-[55%] gap-4 mr-2 ml-2">
            <h1 className="text-black text-3xl md:text-4xl font-bold">
              Coding with Passion While Building the Future
            </h1>
            <h2 className="text-black">
              Sebagai seorang programmer, saya tidak hanya menciptakan kode—saya
              membangun solusi. Setiap produk yang saya buat bukan sekadar
              estetika, tetapi hasil dari logika, efisiensi, dan inovasi. Dengan
              pendekatan yang berfokus pada fungsionalitas dan pengalaman
              pengguna, saya mengubah ide menjadi aplikasi yang nyata,
              berdampak, dan bernilai bagi banyak orang.
            </h2>
            <div className="flex flex-row gap-4">
              <Icon src={"/github.png"} alt={"Github"} />
              <Icon src={"/linkedin.png"} alt={"Linkedin"} />
              <Icon src={"/email.png"} alt={"Email"} />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-col lg:flex-row justify-between mt-8 mb-8 mx-4 md:mx-14 gap-8">
          <div className="flex flex-col text-balance justify-start gap-4 w-full md:w-[80%] lg:w-[50%]">
            <h1 className="text-black text-3xl md:text-4xl font-bold">
              Full Stack Developer and Android Developer Native
            </h1>
            <hr className="border-amber-600 mt-4 w-40 border-2 mx-auto md:mx-0" />
            <h2 className="text-black">
              Sebagai seorang Full Stack Developer dan Android Native Developer,
              saya memiliki keahlian dalam membangun aplikasi web dan mobile
              dari sisi frontend hingga backend. Dengan pengalaman dalam
              teknologi seperti React, Tailwind CSS, Laravel, Node.js, dan
              Sequelize, saya mampu merancang sistem yang efisien, responsif,
              dan skalabel. Di sisi pengembangan Android Native, saya
              menggunakan React Native untuk menciptakan aplikasi mobile yang
              cepat, ringan, dan memiliki pengalaman pengguna yang optimal. Saya
              selalu berusaha menerapkan clean code, arsitektur yang baik, serta
              mengutamakan performa dan keamanan dalam setiap aplikasi yang saya
              bangun.
            </h2>
            <Button
              name={"Contact Me"}
              width={120}
              toLink={
                "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBpDrvwgWdgGVZxDjNhdsrnPNVKkrVKsvBSsmXwXqPqzGkmtKPrXvxFjnvCDfwGtQgKkVrP"
              }
            />
          </div>

          <div className="w-full max-w-d mx-auto mt-10 lg:w-[50%]">
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    {skill.name}
                  </p>
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    {skill.percentage}
                  </p>
                </div>

                <div className="w-full bg-gray-200 rounded-full min-h-4 relative overflow-hidden">
                  <motion.div
                    className="bg-[#d97706] min-h-4 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: skill.percentage }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
