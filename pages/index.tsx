import Head from 'next/head';
import React from 'react';
import { Menu } from '../src/components/common/menu';
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
        <div style={{ textAlign: 'center' }}>[Content]</div>
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
