import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/homepage/Hero";
import Section2 from "../components/homepage/Section2";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <Section2/>
        
      </Layout>
    </div>
  );
}
