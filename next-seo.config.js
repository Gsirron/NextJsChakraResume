/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Norris Luong",
  titleTemplate: "%s | Norris Luong Personal Website",
  defaultTitle: "Norris Luong Personal Website",
  description: "Norris Luong's Personal Website",
  canonical: "https://nextarter-chakra.sznm.dev",
  openGraph: {
    url: "https://nextarter-chakra.sznm.dev",
    title: "Norris Luong Personal Website",
    description: "Norris Luong's Personal Website",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "nextarter-chakra.sznm.dev og-image",
      },
    ],
    site_name: "Norris Luong Personal Website",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
