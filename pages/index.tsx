import Head from 'next/head';
import React from 'react';
import { Button } from '../src/components/common/button';
import { Menu } from '../src/components/common/menu';
import { Text } from '../src/components/common/text';
import { Layout } from '../src/components/layout';
import { Grid } from '../src/components/layout/grid';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Instalura - by: Emerson P. Gomes</title>
      </Head>
      <Layout.Header>
        <Menu />
      </Layout.Header>
      <Layout.Content>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col offset={{ xs: 0, md: 1 }} span={{ xs: 12, md: 5 }}>
              <Text
                variant="title"
                tag="h1"
                color="tertiary.main"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Compartilhe momentos e conecte-se com amigos
              </Text>
              <Text
                variant="paragraph1"
                tag="p"
                color="tertiary.light"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s.
              </Text>

              <Button
                variant="primary.main"
                margin={{
                  xs: 'auto',
                  md: 'initial',
                }}
                display="block"
              >
                Cadastrar
              </Button>
            </Grid.Col>
            <Grid.Col span={{ xs: 12, md: 6 }}>
              <img
                style={{ display: 'block', margin: 'auto' }}
                src="/images/phones.png"
                alt=""
              />
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Layout.Content>
      <Layout.Footer>
        <a href="https://www.alura.com.br/">
          <img
            src="https://www.alura.com.br/assets/img/alura-logo.svg"
            alt="Logo Alura"
          />
        </a>
        <p>
          Orgulhosamente criado durante o{' '}
          <a href="https://www.alura.com.br/">
            <span>Bootcamp Alura JAM Stack</span>
          </a>
        </p>
      </Layout.Footer>
    </Layout>
  );
}
