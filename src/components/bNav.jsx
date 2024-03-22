import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Link from 'next/link';
import GetAppIcon from '@mui/icons-material/GetApp';
import { useRouter } from 'next/router';


export function BottomNav() {
    const router = useRouter();
    const [value, setValue] = useState(getInitialValue(router.pathname));
    useEffect(() => {
        setValue(getInitialValue(router.pathname));
    }, [router.pathname]);

    function getInitialValue(path) {
        if (path === '/blog' || path.startsWith('/blog/')) {
            return 0;
        } else if (path === '/') {
            return 1;
        }
        else if (path === '/career') {
            return 2;
        } else if (path === '/SJRODRIGUEZ_ATS.pdf') {
            return 3;
        } else {
            return 0;
        }
    }

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
                    icon={<WorkHistoryIcon style={{ fontSize: 40 }} />}
                    LinkComponent={Link}
                    href='/career'
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

