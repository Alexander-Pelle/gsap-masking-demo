"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const COVER_VIDEO_URL = "https://videos.pexels.com/video-files/19026925/19026925-uhd_2560_1440_25fps.mp4";

export default function Home() {

  useGSAP(()=> {
    gsap.to("h2", {
      scale: 300,
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "+=1000",
        scrub: 1,
        pin: true
      }
    })
  })

  return (
    <main className="w-full h-full">      
      
      <video  
        autoPlay muted loop 
        src={`${COVER_VIDEO_URL}`}
         
      />

      <div className="mask">
        <h2>CIRCUS</h2>
      </div>
        
    </main>
  );
}
