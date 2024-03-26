import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { CareerTimeline } from "../../components/career/careerTimeline"
import Head from 'next/head';


export default function AllJobs() {
    const title = "My Job Journey 🚀";
    return (
        <Box sx={{ padding: "3em", background: "background.paper" }}>
            <Head>
                <title>{title}</title>
            </Head>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginBottom: 2 }}>
               {title}
            </Typography>
            <CareerTimeline />
        </Box>
    );
}