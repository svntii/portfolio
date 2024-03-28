import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { profileBoxStyles } from '@/app/styles';
import Date from '../../components/date';


export function BlogList({ allPostsData, expandedBox, setExpandedBox }) {
    const maxWidth = 600;
    const maxHeight = 50;
    const isExpanded = expandedBox === 'blog';
    const setExpanded = () => setExpandedBox(isExpanded ? null : 'blog');

    return (
        <Box sx={{
            ...profileBoxStyles(maxWidth, isExpanded ? 'none' : maxHeight), width: '100%'
        }}
            onClick={setExpanded}>

            <Typography variant="body1" sx={{ fontWeight: '600' }}>Blog 🧑‍💻</Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {allPostsData.slice(0, 5).map(({ id, date, title }) => (
                    <li key={id} style={{ marginBottom: '0.5em' }}>
                        <Typography variant="h6" sx={{ fontStyle: "italic" }}>
                            <Link href={`/blog/${id}`}>{title}</Link>
                        </Typography>
                        {date}
                    </li>
                ))}
            </ul>

            <Link href={"/blog"}>
                <Typography variant="caption" sx={{}}>More...</Typography>
            </Link>
        </Box>
    );
}