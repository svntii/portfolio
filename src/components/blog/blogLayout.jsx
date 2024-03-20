import React from 'react';
import Box from '@mui/material/Box';

export function BlogLayout({ children }) {
    return (
        <Box>
            <main>{children}</main>
        </Box>
    );
};