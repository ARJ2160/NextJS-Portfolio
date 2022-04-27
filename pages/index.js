import Contact from '@/components/Contact';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import { meta } from '@/data/config';

export default function Index() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
        <meta name="description" content="ARJs Portfolio" />
        <meta name="title" property="og:title" content="ARJ Portfolio" />
        <meta property="og:type" content="Portfolio Website" />
        <meta
          name="image"
          property="og:image"
          content="https://ik.imagekit.io/36athv2v82c8/Screenshot_2022-04-27_231006_KGf7zaPGt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651081293876"
        />
        <meta
          name="description"
          property="og:description"
          content="ARJs Portfolio"
        />
        <meta name="author" content="ARJ" />
        <title>{meta.title}</title>
      </Head>
      <div className="p-6 lg:p-20 max-w-4xl m-auto w-full">
        <Hero />
        <div className="p-0 space-y-10">
          <Projects />
          <Stack />
          <Contact />
        </div>
      </div>
    </>
  );
}
