// Home.js
import "../styles/globals.css";
import { VotingProvider } from "../context/Voter";
import Navbar from "../components/NavBar/NavBar";
import Head from "next/head";

export default function Home({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Online Voting System</title>
      </Head>
      <VotingProvider>
        <div>
          <Navbar />
          <div>
            <Component {...pageProps} />
          </div>
        </div>
      </VotingProvider>
    </>
  );
}
