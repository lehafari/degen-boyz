import { Container, Grid, Text } from "@nextui-org/react";
import type { NextPage } from "next";
import { CardLayout } from "../components/card";

import { MainLayout } from "../components/layouts";
import { cards } from "../data";

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

        <Grid.Container gap={2} justify="flex-start">
          {cards.map((card, i) => {
            return (
              <Grid key={i} xl={4} md={4} sm={6} xs={12}>
                <CardLayout {...card} />
              </Grid>
            );
          })}
        </Grid.Container>
      </Container>
    </MainLayout>
  );
};

export default Home;
