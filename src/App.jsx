import {Routes, Route } from "react-router-dom";
import Home from '@/app/Home';
import AboutPage from "./app/AboutPage";
import NavMenu from "./components/Utils/NavMenu";
import Footer from "./components/Utils/Footer";
import CoursePage from "./app/CoursePage";
import Franchise from "./app/Franchise";
import StateFr from "./app/StateFr";
import Accreditation from "./app/Accreditation";
import DownloadPage from "./app/DownloadPage";
import ScrollToTop from "./components/Utils/ScrollTop";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import HallTicket from "./app/HallTicket";
import ATCreq from "./app/ATCreq";
import NotFound from "./app/404";
import Gallery from "./app/Gallery";
import ContactPage from "./app/ContactUsPage";
import TSCC from "./app/TSCC";
import Result from "./app/ResultPage";
import CertificateVerification from "./app/VerifyCertificate";

function App() {
  useEffect(() => {
    // Initialize AOS
    Aos.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Easing type
    });
  }, []);

  return (
   <div>
    <ScrollToTop/>
    <NavMenu/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/tscc" element={<TSCC/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/course" element={<CoursePage/>}/>
      <Route path="/franchise" element={<Franchise/>}/>
      <Route path="/stage-franchise" element={<StateFr/>}/>
      <Route path="/accreditation" element={<Accreditation/>}/>
      <Route path="/downloads" element={<DownloadPage/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/*" element={<NotFound/>}/>

      <Route path="/hall-ticket" element={<HallTicket/>}/> 
      <Route path="/check-result" element={<Result/>}/> 
      <Route path="/certificate-verification" element={<CertificateVerification/>}/> 

      <Route path="/atc-req" element={<ATCreq/>}/> 
    </Routes>
    <Footer/>
   </div>
  )
}

export default App
