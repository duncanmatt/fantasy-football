import Head from "next/head";

export const Seo = ({title}) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}