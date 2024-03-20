import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export function BlogList({ allPostsData }) {
    return (
        <Box sx={{ width: '100%', justifyContent: 'center', maxWidth: 600, maxHeight: 50, bgcolor: 'background.paper', p: 2, mt: 2, overflow: 'hidden', '&:hover': { maxHeight: 600 } }}>
            <Typography variant="body1" sx={{ fontWeight: '600' }}>Blog 🧑‍💻</Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {allPostsData.slice(0, 5).map(({ id, date, title }) => (
                    <li key={id} style={{ marginBottom: '0.5em' }}>
                        <Typography variant="h6" sx={{ fontStyle: "italic" }}>{title}</Typography>
                        <Link href={`/blog/${id}`}>{id}</Link>
                        <br />
                        {date}
                    </li>
                ))}
            </ul>
        </Box>
    );
}