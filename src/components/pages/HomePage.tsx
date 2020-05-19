import React from "react";
import { Nav } from "../layouts/nav/Nav";
import { Hero } from "../layouts/hero/Hero";
import { Content } from "../layouts/content/Content";

const HomePage = () => {
  return (
    <section>
        <Nav />
        <Hero />
        <Content />
    </section>
  );
};

export default HomePage;
