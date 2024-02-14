import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import 'semantic-ui-css/semantic.min.css';
import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '@service/client';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ApolloProvider client ={client}>
  <Layout >
    <Component {...pageProps} />
  </Layout>
  </ApolloProvider>
  )  
}