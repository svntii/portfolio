import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { CareerTimeline } from "../../components/career/careerTimeline"

export default function AllJobs() {
    return (
        <Box sx={{ padding: "3em", background: "background.paper" }}>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginBottom: 2 }}>
                My Job Journey
            </Typography>
            <CareerTimeline />
        </Box>
    );
}