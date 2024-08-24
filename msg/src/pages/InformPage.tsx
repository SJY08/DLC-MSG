import styled from "styled-components";
import { Colors } from "../styles/colors";
import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";

function InformPage() {
  return (
    <>
      <Background>
        <Header />
      </Background>
      <Footer />
    </>
  );
}

export default InformPage;

const Background = styled.div`
  display: flex;
  align-items: center;
`;
