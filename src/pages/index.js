import React, { useState } from "react";
import Box from "@mui/material/Box";

import { Profile } from "../components/home/profileBox";
import { BlogList } from "../components/blog/blogList";
import { CareerBox } from "../components/career/careerBox";
import config from "../app/config.json";
import CssBaseline from "@mui/material/CssBaseline";
import { getSortedPostsData } from "../../lib/posts";
import { homeBoxStyle } from "@/app/styles";
import Head from "next/head";
import { motion } from "framer-motion";
import ParticlesComponent from "@/components/particles";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const [expandedBox, setExpandedBox] = useState(null);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ParticlesComponent />
      <Head>
        <title>{"svntiiago.com"}</title>
        <link rel="icon" href="/app/favicon.ico" sizes="any" />
      </Head>

      <CssBaseline />
      <Box sx={{ ...homeBoxStyle }}>
        <Profile
          name={config.profile.name}
          title={config.profile.title}
          description={config.profile.description}
          interests={config.profile.interests}
          socials={[
            config.profile.socials.github,
            config.profile.socials.linkedin,
            config.profile.socials.twitter,
            config.profile.socials.email
          ]}
          expandedBox={expandedBox}
          setExpandedBox={setExpandedBox}
        />
        <BlogList
          allPostsData={allPostsData}
          expandedBox={expandedBox}
          setExpandedBox={setExpandedBox}
        />
        <CareerBox expandedBox={expandedBox} setExpandedBox={setExpandedBox} />
      </Box>
    </motion.main>
  );
}
