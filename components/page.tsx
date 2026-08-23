import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BusinessDomains from "@/components/BusinessDomains";
import GroupCompanies from "@/components/GroupCompanies";
import PartnerCompanies from "@/components/PartnerCompanies";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <BusinessDomains />
        <GroupCompanies />
        <PartnerCompanies />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
