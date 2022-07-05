import NextLink from 'next/link';
import { Spacer, Text, useTheme, Link, Image, Button } from '@nextui-org/react';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Navbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '2rem 3rem',
        fontFamily: 'Roboto',
      }}
    >
      <NextLink href="/" passHref>
        <Link>
          <Image
            src="https://res.cloudinary.com/dtgfpjvoi/lootbox/images/HeaderLogo.webp"
            alt="Logo"
            width={200}
            height={60}
          />
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites" passHref>
        <Link css={{ marginRight: '10px' }}>
          <Text size={14} color="white">
            HOW TO OPEN
          </Text>
        </Link>
      </NextLink>
      <NextLink href="/favorites" passHref>
        <Link css={{ marginRight: '10px' }}>
          <Text size={14} color="white">
            FAQS
          </Text>
        </Link>
      </NextLink>
      <NextLink href="/favorites" passHref>
        <Link css={{ marginRight: '10px' }}>
          <TwitterIcon
            sx={{
              color: 'white',
              fontSize: '2rem',
            }}
          />
        </Link>
      </NextLink>
      <NextLink href="/favorites" passHref>
        <Link css={{ marginRight: '10px' }}>
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
