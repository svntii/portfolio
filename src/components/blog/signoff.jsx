import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function SignOff({ phrase }) {
    return (
        <Box>
            <Typography>
                {phrase}
            </Typography>
            <Typography variant="h6" sx={{ marginTop: '2em', textAlign: 'center', fontFamily: 'cursive' }}>
                {"svntii"}
            </Typography>
        </Box>
    );
};
