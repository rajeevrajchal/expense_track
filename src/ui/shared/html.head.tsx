import Head from 'next/head';
import { NextPage } from 'next';

interface HtmlHeadInterface {
  title?: string;
  description: string;
}

const HtmlHead: NextPage<HtmlHeadInterface> = ({ title, description }) => {
  return (
    <Head>
      <title>{`${title} - Expense Tracking`}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />

      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content="Track all your expense" />
      <meta name="keywords" content="expense" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="theme-color" content="#8f659a" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
};

export default HtmlHead;
