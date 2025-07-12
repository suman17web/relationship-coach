import React from 'react';
import { Box, Container } from '@mui/material';

const Video: React.FC = () => {
  return (
    <Box className="video_box">
      <Container>
            <div className='video_item mx-auto'>
                <div style={{
                    position: 'relative',
                    paddingTop: '56.25%', // 16:9 aspect ratio
                    overflow: 'hidden',
                }}>
                    <iframe
                        src="https://player.vimeo.com/video/76979871?h=8272103f6e"
                        title="Vimeo video player"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        }}
                    ></iframe>
                </div>
            </div>
      </Container>
    </Box>
  );
};

export default Video;
