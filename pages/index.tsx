import { Container, Grid, Text } from '@nextui-org/react';
import { useWallet } from '@solana/wallet-adapter-react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { CardLayout } from '../components/card';

import { MainLayout } from '../components/layouts';
import { OpenBox } from '../components/popup/openbox.popup';
import { cards } from '../data';

const Home: NextPage = () => {
  const [visible, setVisible] = useState(false);

  return (
    <MainLayout title="Home">
      <Container
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem 2rem',
          margin: 'auto',
          '@md': {
            padding: '3rem 5rem',
          },
        }}
      >
        <Text
          h1
          css={{
            textAlign: 'center',
            fontSize: '4rem',
            // textGradient: '45deg, $blue600 -20%, $pink500 50%',
          }}
        >
          Open Degen Boyz Loot Boxes to win up to 100X in SOL
        </Text>
        <Text
          css={{
            fontSize: '1.2rem',
            marginTop: '2rem',
            // textGradient: '45deg, $blue600 -20%, $pink500 50%',
            fontWeight: '600',
          }}
        >
          No house edge, with 100% RTP.
        </Text>

        <Grid.Container
          gap={3}
          justify="flex-start"
          css={{
            marginTop: '1rem',
          }}
        >
          {cards.map((card, i) => {
            return (
              <Grid key={i} xl={4} md={4} sm={6} xs={12}>
                <CardLayout {...card} />
              </Grid>
            );
          })}
        </Grid.Container>
        <OpenBox visible={visible} setVisible={setVisible} />
      </Container>
    </MainLayout>
  );
};

export default Home;
