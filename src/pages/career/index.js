import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';


export default function AllJobs() {
    return (
        <Box sx={{ padding: "3em", background: "background.paper" }}>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginBottom: 2 }}>
                My Job Journey
            </Typography>
        </Box>
    );
}