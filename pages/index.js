import Head from 'next/head';
import Link from 'next/link';

function HomePage() {
  return (
    <>
        <Head>
            <title>Kat's Blog</title>
            <meta name="description" value="This is my blog" />
        </Head>
        <main>
            <h1>My Blog</h1>
            <ul>
                <li>
                    <Link href="/posts/first-post">
                        First Page
                    </Link>
                </li>
            </ul>
        </main>
    </>
  );
}

export default HomePage;
