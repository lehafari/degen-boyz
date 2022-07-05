import { Container, Text } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MainLayout } from "../components/layouts";

const Home: NextPage = () => {
  return (
    <MainLayout title="Home">
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 2rem",
          margin: "auto",
          "@md": {
            padding: "3rem 5rem",
          },
        }}
      >
        <Text
          h1
          css={{
            textAlign: "center",
            fontSize: "4rem",
          }}
        >
          Open Degen Boyz Loot Boxes to win up to 100X in SOL
        </Text>
        <Text
          css={{
            fontSize: "1.2rem",
            marginTop: "2rem",
          }}
        >
          No house edge, with 100% RTP.
        </Text>
      </Container>
    </MainLayout>
  );
};

export default Home;
