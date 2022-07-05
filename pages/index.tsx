import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { MainLayout } from '../components/layouts';

const Home: NextPage = () => {
  return (
    <MainLayout title="Home">
      <h1>Hola</h1>
    </MainLayout>
  );
};

export default Home;
