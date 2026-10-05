import React from "react";
import {
  Hero,
  TrustStrip,
  Services,
  About,
  HowItWorks,
  RecentWork,
  ServiceArea,
  Contact,
} from "@/components/Island";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Services />
      <About />
      <HowItWorks />
      <RecentWork />
      <ServiceArea />
      <Contact />
    </main>
    // <main style={{ padding: "40px", textAlign: "center", fontFamily: "sans-serif" }}>
    //   <h1>Island Lawncare Setup</h1>
    //   <p>Almost there! Follow these steps to complete setup:</p>
    //   <ol style={{ textAlign: "left", display: "inline-block", marginTop: "20px" }}>
    //     <li>Copy <code>components.tsx</code> to <code>src/components/Island/index.tsx</code></li>
    //     <li>Run <code>npm install next-themes</code></li>
    //     <li>Restart the dev server with <code>npm run dev</code></li>
    //   </ol>
    //   <p style={{ marginTop: "30px", color: "#666" }}>The Island Lawncare website will appear once components.tsx is in place.</p>
    // </main>
  );
}
