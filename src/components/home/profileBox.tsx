import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { profileBoxStyles } from '@/app/styles';


interface ProfilePage {
    name: string;
    title: string;
    description: string;
    interests: string[];
    socials: string[];
}

export function Profile({ name, title, description, interests, socials }: ProfilePage) {
    return (
        <div>
            {BioBox({ name, title, description })}
            {InterestsBox(interests)}
            {SocialsBox(socials)}
        </div>
    );
}

function BioBox({ name, title, description }: { name: string, title: string, description: string }) {
    return (
        <Box sx={{ ...profileBoxStyles(600, 90, 600) }}>
            <Typography variant="h4" component="div" sx={{ color: 'text.primary', '&:hover': { backgroundColor: 'blueviolet', color: 'white' } }}>
                {name}
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: 'text.primary', fontStyle: 'italic', '&:hover': { backgroundColor: 'blueviolet', color: 'white' } }}>
                {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.primary', '&:hover': { backgroundColor: 'blueviolet', color: 'white' } }}>
                {description}
            </Typography>
        </Box>
    );
}

function InterestsBox(interests: string[]) {
    return <Box sx={{ ...profileBoxStyles(600, 50, 400) }}>
        <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: '600' }}>
            Interests 🧠
        </Typography>
        <List>
            {interests.map((interest, index) => (
                <ListItem key={index}>
                    <Typography variant="body2" sx={{ color: 'text.primary', '&:hover': { backgroundColor: 'blueviolet', color: 'white' } }}>
                        {interest}
                    </Typography>
                </ListItem>
            ))}
        </List>
    </Box>;
}


function SocialsBox(socials: string[]) {
    return (
        <Box sx={{ ...profileBoxStyles(600, 50, 400) }}>
            <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: '600' }}>
                Socials 📱
            </Typography>
            <List>
                {socials.map((social, index) => (
                    <ListItem key={index}>
                        <a href={"https://" + social} target="_blank" rel="noopener noreferrer">
                            <Typography variant="body2" sx={{ color: 'text.primary', '&:hover': { backgroundColor: 'blueviolet', color: 'white' } }}>
                                {social}
                            </Typography>
                        </a>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}