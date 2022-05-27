import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/homepage/Hero";
import SearchBar from "../components/search/SearchBar";
import CardResult from "../components/card/CardResult";
import { Container } from "react-bootstrap";

export default function Cars() {
  return (
    <>
      <Layout>
        <Hero />
        <SearchBar />
        <Container>
          <CardResult />
        </Container>
      </Layout>
    </>
  );
}
