import NextLink from 'next/link';
import { Container, Link, Progress, Text } from '@nextui-org/react';
import Image from 'next/image';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../../public/img/logo.svg';
import { Box } from '@mui/material';

export const Footer = () => {
  return (
    <>
      <Container
        css={{
          width: '90%',
          marginBottom: '5rem',
        }}
      >
        <Progress
          shadow
          value={100}
          color="gradient"
          status="secondary"
          css={{
            height: '2px',
          }}
        />
      </Container>
      <Container
        css={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
          },
        }}
      >
        <Image src={logo} alt="Logo" width={200} height={120} />
        <Box
          sx={{
            width: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            '@media (max-width: 768px)': {
              marginTop: '0.5rem',
            },
          }}
        >
          <NextLink href="#" passHref>
            <Link css={{ marginBottom: '1.3rem' }}>
              <TwitterIcon
                sx={{
                  color: 'white',
                  fontSize: '2rem',
                }}
              />
            </Link>
          </NextLink>
          <Text size={16} color="white" span>
            © 2022 Degen Boyz
          </Text>
        </Box>
      </Container>
    </>
  );
};
