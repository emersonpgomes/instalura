import Head from 'next/head';
import React from 'react';
import { Button } from '../src/components/common/button';
import { Menu } from '../src/components/common/menu';
import { Text } from '../src/components/common/text';
import { Layout } from '../src/components/layout';

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
        <div>
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
        </div>
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
