import Head from 'next/head';
import { FC } from 'react';
import Resize from '../../utils/resize';
import { Footer, Navbar, NavbarMobile } from '../ui';

interface Props {
  children: JSX.Element;
  title: string;
}

export const MainLayout: FC<Props> = ({ children, title }) => {
  let size: number = Resize();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {size <= 900 ? <NavbarMobile /> : <Navbar />}
      {/* <Navbar /> */}
      {/* <NavbarMobile /> */}
      {children}
      <Footer />
    </>
  );
};
