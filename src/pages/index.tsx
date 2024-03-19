import * as React from 'react';
import Box from '@mui/material/Box';
import { Profile } from '../components/home/profileBox';
import config from '../app/config.json';
import CssBaseline from '@mui/material/CssBaseline';

export default function Home() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center',  background: 'Black'}}>
                <Profile
                    name={config.profile.name}
                    title={config.profile.title}
                    description={config.profile.description}
                    interests={config.profile.interests}
                    socials={[config.profile.socials.github, config.profile.socials.linkedin, config.profile.socials.twitter]}
                />
            </Box>
        </React.Fragment>
    );
}