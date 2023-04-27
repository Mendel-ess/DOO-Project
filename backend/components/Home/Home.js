import React, { Fragment } from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import Container from "..Home/Container";

const Home = () => {
  return (
    <Fragment>
      <div class="wraapper-general">
        <Header />
        <Container />
        <Footer />
      </div>{" "}
    </Fragment>
  );
};
export default Home;
