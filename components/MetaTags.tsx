import Head from 'next/head';

interface MetaTagsProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export default function MetaTags({
  title,
  description,
  url,
  image = 'https://yourdomain.com/og-image.jpg',
}: MetaTagsProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="GraphicWorks" />
      <meta name="keywords" content="web design, branding, media, 3D modeling, GraphicWorks, creative studio" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Head>
  );
}
