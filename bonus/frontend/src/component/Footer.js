import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const { palette } = useTheme();
    return (
        <Box sx={{
            height: '50vh', // Cover at least half of the page height
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end', // Push content to the bottom
            alignItems: 'center',
            overflow: 'hidden', // Ensure no content is cut off
        }}>
            <Box sx={{
                width: '100%',
                height: '100%',
                backgroundImage: 'url(https://i.ibb.co/Kj7XnSX/Whats-App-Image-2024-09-04-at-1-57-23-PM.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'absolute', // Position the image behind the text
                top: 0,
                left: 0,
                zIndex: 1,
            }} />

            <Box sx={{
                width: '100%',
                bgcolor: palette.secondary.midNightBlue, // Blue background for the text
                padding: '10px',
                position: 'relative',
                zIndex: 2, // Ensure the text appears above the image
                textAlign: 'center', // Center the text
                // Ensure the padding doesn't push the content out of view
                marginTop: 'auto',
            }}>
                <Typography 
                    sx={{ 
                        color: palette.primary.main, 
                    }}
                >
                    The All rights reserved! 2024.
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;
