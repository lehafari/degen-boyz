import NextLink from 'next/link';
import { Container, Image, Link, Progress, Text } from '@nextui-org/react';
import TwitterIcon from '@mui/icons-material/Twitter';

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
          width: '90%',
          display: 'flex',

          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src="https://res.cloudinary.com/dtgfpjvoi/lootbox/images/HeaderLogo.webp"
          alt="Logo"
          width={200}
          height={60}
        />
        <Container
          css={{
            width: '30%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <NextLink href="/favorites" passHref>
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
        </Container>
      </Container>
    </>
  );
};
