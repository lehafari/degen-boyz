import { useState } from 'react';
import NextLink from 'next/link';
import { Text, Link, Button, Container } from '@nextui-org/react';
import { Sidebar } from 'primereact/sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from '@mui/icons-material/Twitter';

export const MenuMobile = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button size="sm" onClick={() => setVisible(true)} color="gradient">
        <MenuIcon />
      </Button>

      <Sidebar
        visible={visible}
        position="right"
        onHide={() => setVisible(false)}
      >
        <Container
          display="flex"
          direction="column"
          justify="center"
          alignItems="center"
        >
          <NextLink href="/how-to-open" passHref>
            <Link css={{ margin: '1rem 0rem' }}>
              <Text size={20} color="white">
                HOW TO OPEN
              </Text>
            </Link>
          </NextLink>
          <NextLink href="/faqs" passHref>
            <Link css={{ marginBottom: '0.5rem ' }}>
              <Text size={20} color="white">
                FAQS
              </Text>
            </Link>
          </NextLink>
          <NextLink href="#" passHref>
            <Link css={{ margin: '0rem 0rem' }}>
              <TwitterIcon
                sx={{
                  color: 'white',
                  fontSize: '2rem',
                }}
              />
            </Link>
          </NextLink>
          <NextLink href="#" passHref>
            <Link css={{ margin: '1.3rem 0rem' }}>
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
        </Container>
      </Sidebar>
    </>
  );
};
