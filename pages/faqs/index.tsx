import { Collapse, Container, Grid, Text } from '@nextui-org/react';
import { NextPage } from 'next';
import React from 'react';
import { MainLayout } from '../../components/layouts';
import TwitterIcon from '@mui/icons-material/Twitter';

const Faqs: NextPage = () => {
  return (
    <MainLayout title="FAQS">
      <Container fluid css={{ padding: '0 6rem' }}>
        <Grid.Container gap={3}>
          <Grid xs={12}>
            <Collapse.Group
              splitted
              css={{
                width: '100%',
              }}
            >
              <Collapse title="Who are we">
                <Container>
                  <Text size={18}>
                    We are Looties and we believe in you having a fair game. We
                    are a Web 3 smart contract built on the Solana blockchain
                    that allows users to open Lootboxes in Sol and win Sol in
                    return. There is a 4% transaction fee for every Lootbox
                    opened which is split up into:
                  </Text>
                  <ul>
                    <li>
                      <Text size={18}>⚪ 3% to Looties NFT holders</Text>
                    </li>
                    <li>
                      <Text size={18}>⚪ 0.5% to the house wallet</Text>
                    </li>
                    <li>
                      <Text size={18}>⚪ 0.5% to the team wallet </Text>
                    </li>
                  </ul>
                </Container>
              </Collapse>
              <Collapse title="what are the odds">
                <Container>
                  <Text size={18}>
                    All our games have a 100% Return To Player (RTP) there is no
                    house edge or margin.
                  </Text>
                </Container>
              </Collapse>
              <Collapse title="what are the prizes">
                <Container>
                  <Text size={18}>
                    0X, 0.5X, 1X, 2X, 5X, 10X, 25X, 50X, 100X.
                  </Text>
                </Container>
              </Collapse>
              <Collapse title="what are the prizes">
                <Container>
                  <Text size={18}>
                    Transactions on the smart contract are verified on chain.
                  </Text>
                  <ol>
                    <li>
                      <Text size={18}>
                        House wallet :
                        55TLUPqASKcVLAbYcio7FgyioUmtiGD68RQRDFgsztH8
                      </Text>
                    </li>
                    <li>
                      <Text size={18}>
                        Fee wallet :
                        7RkSs75YG6kVg8PEHoSUFGukZFBqe44onubzBAtRX9pZ
                      </Text>
                    </li>
                  </ol>
                </Container>
              </Collapse>
              <Collapse title="what are the prizes">
                <Container
                  display="flex"
                  justify="flex-start"
                  fluid
                  css={{
                    '@media (max-width: 768px)': {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                  }}
                >
                  <Text
                    size={18}
                    css={{
                      margin: '0 1rem 0 0',
                      '@media (max-width: 768px)': {
                        margin: '0',
                      },
                    }}
                  >
                    We will never DM you first. Only use the official channels.
                  </Text>
                  <TwitterIcon
                    sx={{
                      color: 'white',
                      fontSize: '2rem',
                    }}
                  />
                </Container>
              </Collapse>
            </Collapse.Group>
          </Grid>
          <Grid xs={12}></Grid>
        </Grid.Container>
      </Container>
    </MainLayout>
  );
};

export default Faqs;
