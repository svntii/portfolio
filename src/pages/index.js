import * as React from 'react';
import Box from '@mui/material/Box';

import { Profile } from '../components/home/profileBox';
import { BlogList } from "../components/blog/blogList"
import config from '../app/config.json';
import CssBaseline from '@mui/material/CssBaseline';
import { BottomNav } from '../components/bNav';
import { getSortedPostsData } from '@/posts';
import Head from 'next/head';
import { homeBoxStyle } from '@/app/styles';


export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}


export default function Home({ allPostsData }) {
    return (
        <main>
            <Head>
                <title>{"Home"}</title>
                <link rel="icon" href="/app/favicon.ico" sizes="any" />
            </Head>

            <CssBaseline />
            <Box sx={{ ...homeBoxStyle }}>
                <Profile
                    name={config.profile.name}
                    title={config.profile.title}
                    description={config.profile.description}
                    interests={config.profile.interests}
                    socials={[config.profile.socials.github, config.profile.socials.linkedin, config.profile.socials.twitter]}
                />
                <BlogList allPostsData={allPostsData} />
            </Box>
        </main>
    );
}