import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Link from 'next/link';
import GetAppIcon from '@mui/icons-material/GetApp';


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
                    icon={<RssFeedIcon style={{ fontSize: 40 }} />}
                    LinkComponent={Link}
                    href='/blog'
                />
                <BottomNavigationAction
                    icon={<HomeIcon style={{ fontSize: 40 }} />}
                    LinkComponent={Link}
                    href='/'
                />
                <BottomNavigationAction
                    icon={<GetAppIcon style={{ fontSize: 40 }} />}
                    href='/SJRODRIGUEZ_ATS.pdf'
                    download="SJRODRIGUEZ_ATS.pdf"
                    target='_blank'
                />
            </BottomNavigation>
        </Box>
    );
};

