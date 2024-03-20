import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';

export function BottomNav() {
    const [value, setValue] = useState(0);

    return (
        <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                icon={<HomeIcon style={{fontSize: 40}}/>} 
                LinkComponent={Link}
                href='/'
                />
                
            </BottomNavigation>
        </Box>
    );
};

