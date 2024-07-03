"use client"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Education from "@/Components/Education";
import Introduction from "@/Components/Introduction";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import VideoPlayer from "@/Components/VideoPlayer";
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <main className='overflow-hidden'>
      <Navbar></Navbar>
      <VideoPlayer src="bannervideo.mp4" type="video/mp4"></VideoPlayer>
      <Introduction></Introduction>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </main>
  );
}
