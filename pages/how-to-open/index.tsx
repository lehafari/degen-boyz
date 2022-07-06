import { Card, Container, Grid, Text } from '@nextui-org/react';
import { NextPage } from 'next';
import Image from 'next/image';
import { MainLayout } from '../../components/layouts';
import { steps } from '../../data';
import logo from '../../public/img/logo.svg';

const HowToOpenPage: NextPage = () => {
  return (
    <MainLayout title="How to open">
      <Container
        css={{
          padding: '5rem',
        }}
      >
        <Card
          css={{
            bgBlur: '#0f111466',
            padding: '4rem',
          }}
        >
          <Card.Header>
            <Grid.Container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid
                css={{
                  transform: 'translateY(-1rem)',
                }}
              >
                <Text h1>How to open</Text>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body
            css={{
              pl: '2rem',
            }}
          >
            {steps.map((faq, i) => (
              <Text
                key={i}
                size={18}
                css={{
                  marginBottom: '1rem',
                }}
              >
                {i + 1}. {faq.title}
              </Text>
            ))}
            <Text size={20}>
              <strong>Phantom Wallet</strong> - is a decentralized Web 3.0
              self-custodial wallet that stores your private keys on your device
              thus giving you complete control of your funds. Phantom is
              compatible with several browsers including Chrome, Firefox, Edge,
              and the Brave browser.
            </Text>
          </Card.Body>
        </Card>
      </Container>
    </MainLayout>
  );
};

export default HowToOpenPage;
