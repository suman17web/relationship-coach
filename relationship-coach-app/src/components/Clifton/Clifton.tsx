import React from 'react';
import { Box, Container } from '@mui/material';
import ClifOnePic from '../../assets/img/assestment.webp';

interface CliftonProps {
  className?: string;
}

const Clifton: React.FC<CliftonProps> = ({ className }) => {
  return (
    <Box className="benefit_wrapper">
      <Container>
        <div className={`grid_col7 ${className || ''}`}>
          <div className='order-sm-1'>
            <img src={ClifOnePic} alt={ClifOnePic} className='mx-auto d-block mr-md-0' />
          </div>
          <div>
            <h2 className='benefit-title text-primary mb-3'>
                Why do I need a <b>CliftonStrengths® assessment?</b>
            </h2>
            <p className='card-text text-primary'>
                Your CliftonStrengths® 34 report gives you greater insight into why your partner thinks, speaks and acts the way they do.<br></br><br></br>
                It allows you to see your partner for who they really are, and use a common language to talk about your unique view of the world.
            </p>
            <div className='mt-3'>

            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Clifton;
