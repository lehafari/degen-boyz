import NextLink from 'next/link';
import Image from 'next/image';
import { Spacer, Text, useTheme, Link, Button } from '@nextui-org/react';

import logo from '../../../public/img/logo.svg';
import { MenuMobile } from './MenuMobile';

export const NavbarMobile = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '0rem 2rem',
        fontFamily: 'Roboto',
      }}
    >
      <NextLink href="/" passHref>
        <Link>
          <Image src={logo} alt="Logo" width={100} height={100} />
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <MenuMobile />
    </div>
  );
};
