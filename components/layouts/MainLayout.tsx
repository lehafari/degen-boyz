import Head from 'next/head';
import { FC } from 'react';
import { Footer, Navbar } from '../ui';

interface Props {
  children: JSX.Element;
  title: string;
}

export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
