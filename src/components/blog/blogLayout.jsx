import React from 'react';
import Box from '@mui/material/Box';
import { BottomNav } from '../bNav';
import { SignOff } from './signoff';

export function BlogLayout({ children }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1em', backgroundColor: '#f5f5f5', color: '#333', width: '100%', height: '100%' }}>
            <Box sx={{ marginBottom: '1em' }}>
            </Box>
            <main>{children}</main>
            <BottomNav />
        </Box>
    );
};