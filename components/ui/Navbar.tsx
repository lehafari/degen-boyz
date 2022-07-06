import NextLink from 'next/link';
import { Spacer, Text, useTheme, Link, Button } from '@nextui-org/react';

import Image from 'next/image';

import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../../public/img/logo.svg';

export const Navbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '2rem 3rem',
        fontFamily: 'Roboto',
      }}
    >
      <NextLink href="/" passHref>
        <Link>
          <Image src={logo} alt="Logo" width={200} height={120} />
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/how-to-open" passHref>
        <Link css={{ marginRight: '1.3rem' }}>
          <Text size={14} color="white">
            HOW TO OPEN
          </Text>
        </Link>
      </NextLink>
      <NextLink href="/faqs" passHref>
        <Link css={{ marginRight: '1.3rem' }}>
          <Text size={14} color="white">
            FAQS
          </Text>
        </Link>
      </NextLink>
      <NextLink href="#" passHref>
        <Link css={{ marginRight: '1.3rem' }}>
          <TwitterIcon
            sx={{
              color: 'white',
              fontSize: '2rem',
            }}
          />
        </Link>
      </NextLink>
      <NextLink href="#" passHref>
        <Link css={{ marginRight: '1.3rem' }}>
          <Button
            css={{
              padding: '1.5rem 1rem',
              fontFamily: 'Roboto',
              borderRadius: '5px',
            }}
            color="gradient"
          >
            <Text
              css={{
                fontWeight: '600',
              }}
            >
              SELECT WALLET
            </Text>
          </Button>
        </Link>
      </NextLink>
    </div>
  );
};
