import React from 'react';
import { Box, Container } from '@mui/material';
import Logo from "../../assets/img/healthy-relationships-coach.svg"
import BannerBg from "../../assets/img/banner-img.webp"

const Banner: React.FC = () => {
  return (
    <Box className="banner" style={{backgroundImage: `url(${BannerBg})`}}>
      <Container>
            <div className='text-center logo-top'>
                <img src={Logo} alt="Healthy Relationships Coach" />
            </div>
            <h1 className='tag-1 text-center text-white'>
                Are you and your partner compatible?
            </h1>
            <p className='banner-text text-center text-white mt-3'>
                Identify potential sources of conflict, and learn how to overcome them.
            </p>
            <p className='banner-text-2 text-center text-white' style={{marginTop: '2px'}}>
                Find out your and your partner's common ground, complementarities and conflict zones.
            </p>
      </Container>
    </Box>
  );
};

export default Banner;
