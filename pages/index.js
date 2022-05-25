import Head from "next/head";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>LyraGuard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="LyraGuard Discord Bot" />
        <hr />
        <p className="description">
          Feedback is always welcome for the LyraGuard Bot. Either thats Bugs or Positiveness, All is welcome!
        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
