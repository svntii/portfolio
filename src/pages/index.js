import * as React from 'react';
import Box from '@mui/material/Box';

import { Profile } from '../components/home/profileBox';
import { BlogList } from "../components/blog/blogList"
import config from '../app/config.json';
import CssBaseline from '@mui/material/CssBaseline';
import { BottomNav } from '../components/bNav';
import { getSortedPostsData } from '@/posts';




export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}


export default function Home({ allPostsData }) {
    const [value, setValue] = React.useState(0);

    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'center', justifyContent: 'center', background: 'green' }}>
                <Profile
                    name={config.profile.name}
                    title={config.profile.title}
                    description={config.profile.description}
                    interests={config.profile.interests}
                    socials={[config.profile.socials.github, config.profile.socials.linkedin, config.profile.socials.twitter]}
                />
                <BlogList allPostsData={allPostsData} />
            </Box>
            <BottomNav/>
        </React.Fragment>
    );
}