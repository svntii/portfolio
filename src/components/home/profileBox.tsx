import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

interface ProfileBoxProps {
  name: string;
  title: string;
  interests: string[];
  socials: string[];
}

export function ProfileBox({ name, title, interests, socials }: ProfileBoxProps) {
  return (
    <div>
      <Box sx={{maxWidth: 600, maxHeight: 400, bgcolor: 'background.paper', p:2 }}>
        <Typography variant="h4" component="div" sx={{ color: 'text.primary' }}>
          {name}
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: 'text.primary', fontStyle:'italic' }}>
          {title}
        </Typography>
      </Box>
      {InterestsBox(interests)}
      {SocialsBox(socials)}
    </div>
  );
}



function InterestsBox(interests: string[]) {
    return <Box sx={{ maxWidth: 600, maxHeight: 50, bgcolor: 'background.paper', p: 2, mt: 2, overflow: 'hidden', '&:hover': { maxHeight: 400 } }}>
        <Typography variant="body1" sx={{ color: 'text.primary' }}>
            Interests 🧠
        </Typography>
        <List>
            {interests.map((interest, index) => (
                <ListItem key={index}>
                    <Typography variant="body2" sx={{ color: 'text.primary' }}>
                        {interest}
                    </Typography>
                </ListItem>
            ))}
        </List>
    </Box>;
}


function SocialsBox(socials: string[]) {
    return (
      <Box sx={{ maxWidth: 600, maxHeight: 50, bgcolor: 'background.paper', p: 2, mt: 2, overflow: 'hidden', '&:hover': { maxHeight: 400 } }}>
        <Typography variant="body1" sx={{ color: 'text.primary' }}>
          Socials 📱
        </Typography>
        <List>
          {socials.map((social, index) => (
            <ListItem key={index}>
              <a href={"https://" + social} target="_blank" rel="noopener noreferrer">
                <Typography variant="body2" sx={{ color: 'text.primary' }}>
                  {social}
                </Typography>
              </a>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }