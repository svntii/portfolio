import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ProfileBox } from '../components/home/profileBox';

export default function Home() {
  return (
    <Box sx={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
          <ProfileBox
      name='Santiago Rodriguez'
      title='Jack of all trades, master of none 🃏'
      interests={["machine learning", "brain interface chips", "spacial computing", "urban design/policy", "chess", "cryptography"]}
      socials={["linkedin.com/in/sjrodriguez-iii", "github.com/svntii", "x.com/strangesantiago"]}
    />
    </Box>

  );
}