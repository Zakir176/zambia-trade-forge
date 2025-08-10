import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Episodes from "@/components/Episodes";
import TopTraders from "@/components/TopTraders";
import Mentorship from "@/components/Mentorship";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Episodes />
        <TopTraders />
        <Mentorship />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
