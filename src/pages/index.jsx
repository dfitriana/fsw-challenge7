import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/homepage/Hero";
import SearchBar from "../components/search/SearchBar";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <SearchBar />
      </Layout>
    </div>
  );
}
