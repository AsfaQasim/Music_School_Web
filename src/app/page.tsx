
import React from "react";
import HeroSection from "./components/hero_Section";
import Featured_courses from "./components/featured_courses";
import MusicSchoolTestimonials from "./components/TestimonialCards";
import Whyschooseus from "./components/whyschooseus";
import Upcomingwebinar from "./components/upcomingwebinar";
import Instructors from "./components/instructors";


const Home = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased  bg-grid-white/[0.2]">
      <h1 className="text-2xl text-center"></h1>
      <HeroSection />
      <Featured_courses />
      <Whyschooseus />
      <MusicSchoolTestimonials />
      <Upcomingwebinar />
      <Instructors />
 
    </main>
  );
};

export default Home;
