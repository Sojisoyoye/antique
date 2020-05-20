import React from "react";
import { Nav } from "../layouts/Nav/Nav";
import { Hero } from "../layouts/Hero/Hero";
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
