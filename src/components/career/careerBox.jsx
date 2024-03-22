import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { profileBoxStyles } from '@/app/styles';
import career from "@/app/career.json"


export function CareerBox({ expandedBox, setExpandedBox }) {
    const maxWidth = 600;
    const maxHeight = 50;
    const isExpanded = expandedBox === 'career';
    const setExpanded = () => setExpandedBox(isExpanded ? null : 'career');
    const recentCareer = career.jobs[0]

    return (
        <Box sx={{
            ...profileBoxStyles(maxWidth, isExpanded ? 'none' : maxHeight),
            width: '100%',
        }}
            onClick={setExpanded}>
            <Box display="flex" flexDirection="column">
                <Typography variant="body1" sx={{ fontWeight: '600', paddingBottom:1 }}> Job History 💰 </Typography>
                <Typography variant="caption" sx={{ marginBottom: '0.5em' }}>{"Most Recent Role: "}</Typography>
                <Typography variant="body1" sx={{ marginBottom: '0.5em', fontWeight: 'bold' }}>{recentCareer.title + " @ " + recentCareer.company}</Typography>
                <Typography variant="body2" sx={{ marginBottom: '0.5em' }}>{recentCareer.location}</Typography>
                <Box display="block">
                    <Link href={"/career"}>
                        <Typography variant="caption" sx={{ textDecoration: 'underline' }}>View All...</Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}