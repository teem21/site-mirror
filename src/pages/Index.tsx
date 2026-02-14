import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductGallery from "@/components/ProductGallery";
import KeyFeatures from "@/components/KeyFeatures";
import SpecsTable from "@/components/SpecsTable";
import ApplicationsSection from "@/components/ApplicationsSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductGallery />
      <KeyFeatures />
      <SpecsTable />
      <ApplicationsSection />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
