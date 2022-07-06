import { Button, Card, Col, Container, Row, Text } from '@nextui-org/react';
import { FC } from 'react';
import { CardData } from '../../data';

export const CardLayout: FC<CardData> = ({ img, price }) => {
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
          <Button size="sm" color="gradient" rounded>
            Select Wallet
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};
