import React from 'react';
import { Box, Container } from '@mui/material';
import ClifTwoPic from '../../assets/img/assestment-2.webp';
import Button from '../Button/Button';

interface CliftonProps {
  className?: string;
}

const CliftonAlter: React.FC<CliftonProps> = ({ className }) => {
  return (
    <Box className="benefit_wrapper">
      <Container>
        <div className={`grid_col_auto ${className || ''}`}>
          <div>
            <img src={ClifTwoPic} alt={ClifTwoPic} className='mx-auto d-block ms-md-0' />
          </div>
          <div>
            <h2 className='benefit-title text-primary mb-3'>
                Why do I need a <b>CliftonStrengths assessment?</b>
            </h2>
            <p className='card-text text-primary f14 maxw-530 mb-4'>
               Your CliftonStrengths 34 report gives you greater insight into who your partner truly is, and why they think, speak and act the way they do.<br></br><br></br>
               It allows you to use a common language that help you see your partner as a human being, independently of their quirks and habits.
            </p>
            <h3 className='benefit-title text-primary maxw-530 mb-3'>
                <b>Get your personalised compatibility assessment now!</b>
            </h3>
            <p className='benefit-title text-primary maxw-530'>
               You are just FOUR STEPS away from breaking old habits, stepping out of entrenched conversations and finding fresh ways to build your relationship.
            </p>
            <div className='mt-40'>
              <Button
                text="Check out available bundles"
                className="custom-btn"
                showIcon={true}
              />
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default CliftonAlter;
