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
    expandedBox: string | null;
    setExpandedBox: (value: string | null) => void
}

export function Profile({ name, title, description, interests, socials, expandedBox, setExpandedBox }: ProfilePage) {


    return (
        <div>
            {BioBox({
                name,
                title,
                description,
                isExpanded: expandedBox === 'bio',
                setExpanded: () => setExpandedBox(expandedBox === 'bio' ? null : 'bio')
            })
            }

            {InterestsBox({
                interests,
                isExpanded: expandedBox === 'interests',
                setExpanded: () => setExpandedBox(expandedBox === 'interests' ? null : 'interests')
            })}

            {SocialsBox({
                socials,
                isExpanded: expandedBox === 'socials',
                setExpanded: () => setExpandedBox(expandedBox === 'socials' ? null : 'socials')
            })}
        </div>
    );
}

function BioBox({ name, title, description, isExpanded, setExpanded }: { name: string, title: string, description: string, isExpanded: boolean, setExpanded: () => void }) {
    const maxWidth = 600;
    const maxHeight = 90;

    return (
        <Box sx={{
            ...profileBoxStyles(maxWidth, isExpanded ? 'none' : maxHeight)
        }}
            onClick={setExpanded}>

            <Typography variant="h4" component="div" sx={{ color: 'text.primary', '&:hover': { backgroundColor: 'blueviolet', color: 'white' } }}>
                {name}
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: 'text.primary', fontStyle: 'italic', '&:hover': { backgroundColor: 'blueviolet', color: 'white' }, paddingBottom: 1 }}>
                {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.primary', '&:hover': { backgroundColor: 'blueviolet', color: 'white' } }}>
                {description}
            </Typography>
        </Box>
    );
}

function InterestsBox({ interests, isExpanded, setExpanded }: { interests: string[], isExpanded: boolean, setExpanded: () => void }) {
    const maxWidth = 600;
    const maxHeight = 50;
    return (
        <Box sx={{ ...profileBoxStyles(maxWidth, isExpanded ? 'none' : maxHeight) }} onClick={setExpanded}>
            <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: '600', paddingBottom: 1 }}>Interests 🧠</Typography>
            {interests.map((interest, index) => (
                <Typography key={index} variant="body2" sx={{ color: 'text.primary', '&:hover': { backgroundColor: 'blueviolet', color: 'white' } }}>
                    {interest}
                </Typography>
            ))}
        </Box>
    );
}


function SocialsBox({ socials, isExpanded, setExpanded }: { socials: string[], isExpanded: boolean, setExpanded: () => void }) {
    const maxWidth = 600;
    const maxHeight = 50;
    return (
        <Box sx={{ ...profileBoxStyles(maxWidth, isExpanded ? 'none' : maxHeight) }} onClick={setExpanded}>
            <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: '600', paddingBottom: 1 }}>Socials 📱</Typography>
            {socials.map((social, index) => (
                <a key={index} href={"https://" + social} target="_blank" rel="noopener noreferrer">
                    <Typography variant="body2" sx={{ color: 'text.primary', '&:hover': { backgroundColor: 'blueviolet', color: 'white' } }}>
                        {social}
                    </Typography>
                </a>
            ))}
        </Box>
    );
}