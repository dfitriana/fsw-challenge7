import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/homepage/Hero";
import SearchBar from "../components/search/SearchBar";
import CardResult from "../components/card/CardResult";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <SearchBar />
        <Container>
          <CardResult />
        </Container>
      </Layout>
    </div>
  );
}
