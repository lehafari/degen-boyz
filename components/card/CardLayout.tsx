import { Box } from '@mui/system';
import { Button, Card, Col, Container, Row, Text } from '@nextui-org/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { FC } from 'react';
import { CardData } from '../../data';

export const CardLayout: FC<CardData> = ({ img, price }) => {
  const { publicKey } = useWallet();
  return (
    <Card
      css={{
        backgroundColor: 'white',
      }}
    >
      <Card.Body css={{ pb: 0 }}>
        <Card.Image
          src={img}
          objectFit="cover"
          width="100%"
          height="100%"
          alt="Lootbox"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          bgBlur: '#364a6858',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          className="container-left"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            className="container-image"
            style={{
              marginRight: '10px',
            }}
          >
            <Card.Image
              src="https://res.cloudinary.com/dtgfpjvoi/lootbox/images/solana.webp"
              width={50}
              height={50}
            />
          </div>
          {/*//*text-price  */}
          <Text
            css={{
              fontSize: '1.2rem',
            }}
          >
            {price}
          </Text>
        </div>
        <div className="container-right">
          {/* //*Button */}
          {publicKey ? (
            <Button
              size="sm"
              color="gradient"
              css={{
                padding: '1.2rem 1rem',
              }}
              rounded
            >
              Open Lootbox
            </Button>
          ) : (
            <Box
              sx={{
                '& > button': {
                  background:
                    'linear-gradient(112deg, #06b7db -63.59%, #ff4ecd -20.3%, #0072f5 70.46%)',
                },
              }}
            >
              <WalletMultiButton
                style={{
                  width: '100%',
                }}
                className="btn btn-ghost"
              />
            </Box>
          )}
        </div>
      </Card.Footer>
    </Card>
  );
};
