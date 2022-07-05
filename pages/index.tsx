import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { CardLayout } from "../components/card";
import { MainLayout } from "../components/layouts";

const Home: NextPage = () => {
  return (
    <MainLayout title="Home">
      <>
        <h1>Hola</h1>
        <div
          style={{
            width: "300px",
            height: "300px",
          }}
        >
          <CardLayout />
        </div>
      </>
    </MainLayout>
  );
};

export default Home;
