import Card from "../components/card";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function ContactLayout() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        <div className="justify-center items-center h-10 mb-20 mt-8">
          <h1 className="text-black text-4xl font-bold text-center">
            About Me
          </h1>
          <hr className="border-amber-600 mt-4 w-24 border-2 mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 mb-20 h-auto gap-4 mx-2">
          <Card
            icon="/mansion.png"
            title="Kota Batam, Kepulauan Riau"
            description="Indonesia"
          />
          <Card
            icon="/receive-mail.png"
            title="alfinohasan629@gmail.com"
            description="Contact me every time!"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
