import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer"
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <FAQ/>
      <Footer/>
    </div>
  );
}
