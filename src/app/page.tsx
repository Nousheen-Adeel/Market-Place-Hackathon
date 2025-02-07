import Image from "next/image";
import Navbar3 from "./components/Navbar3";
import Hero1 from "./components/Hero1";
import Footer1 from "./components/Footer1";
import Navbar2 from "./components/Navbar2";
import Navbar1 from "./components/Navbar1";


export default function Home() {

  return (
    <div>
    <Navbar1/>
    <Navbar2/>
      <Navbar3/>
      <Hero1/>
    <Footer1/>
    
  
      
    </div>
  );
}
