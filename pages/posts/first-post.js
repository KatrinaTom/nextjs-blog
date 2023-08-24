import Head from 'next/head';

function FirstPostPage(props) {
  console.log("[FirstPostPage] render:", props);
  return (
    <>
        <Head>
            <title>First Post - My Blog</title>
        </Head>
      <main>
        <h1>First Post</h1>
        <p>
            This is my first blog post.
        </p>
      </main>
    </>
  );
}

export default FirstPostPage;