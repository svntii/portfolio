import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import CodeIcon from '@mui/icons-material/Code';
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
        switch (true) {
            case path === '/project':
            case path.startsWith('/project/'):
                return 0;
            case path === '/blog':
            case path.startsWith('/blog/'):
                return 1;
            case path === '/':
                return 2;
            case path === '/career':
                return 3;
            case path === '/SJRODRIGUEZ_ATS.pdf':
                return 4;
            default:
                return 2;
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
                    icon={<CodeIcon style={{ fontSize: 40 }} />}
                    LinkComponent={Link}
                    href='/project'
                />

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

