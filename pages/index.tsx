import Link from "next/link";
import Layout from "../components/Layout";
import Navbar from "../components/marketing/Navbar";
import Footer from "../components/marketing/Footer";
import About from "../components/marketing/About";
import Features from "../components/marketing/Features";
import Hero from "../components/marketing/Hero";

const IndexPage = () => (
  <div className="w-full h-full ">
    <Navbar />
    <Hero />
    <About />
    <Features />
    <Footer />
  </div>
);

export default IndexPage;
