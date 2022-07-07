import NextLink from 'next/link';
import {
  Spacer,
  Text,
  useTheme,
  Link,
  Button,
  Container,
} from '@nextui-org/react';

import Image from 'next/image';

import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../../public/img/logo.svg';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { FC } from 'react';
import { Box } from '@mui/material';

export const Navbar: FC = () => {
  const { publicKey } = useWallet();
  const wallet = useWallet();
  console.log(wallet);
  console.log(publicKey);
  console.log(publicKey?.toBase58());

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
      <Box
        sx={{
          '& > button': {
            background:
              'linear-gradient(112deg, #06b7db -63.59%, #ff4ecd -20.3%, #0072f5 70.46%)',
          },
        }}
      >
        <WalletMultiButton />
      </Box>
    </div>
  );
};
