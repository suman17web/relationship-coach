import React from 'react';
import { Box, Container } from '@mui/material';
import GroundIcon from '../../assets/img/build-icon.png';
import PreIcon from '../../assets/img/pre-empt-icon.png';
import SaveIcon from '../../assets/img/save-time-icon.png';

const Benifit: React.FC = () => {
  return (
    <Box className="benefit_wrapper">
      <Container>
          <h2 className='tag-1 text-primary text-center fw-normal mt-0'>
            Benefits
          </h2>
          <div className='card_grid'>
            <div className='card_grid_item'>
                <img src={GroundIcon} alt={GroundIcon} />
                <p className='card-text'>
                    <b>Build on common ground</b> - Know why you get along, and build on it
                </p>
            </div>
            <div className='card_grid_item'>
                <img src={PreIcon} alt={PreIcon} />
                <p className='card-text'>
                    <b>Pre-empt conflict</b> - Identify areas where you and your partner might experience friction, and solve it
                </p>
            </div>
            <div className='card_grid_item'>
                <img src={SaveIcon} alt={SaveIcon} />
                <p className='card-text'>
                    <b>Pre-empt conflict</b> - Identify areas where you and your partner might experience friction, and solve it
                </p>
            </div>
          </div>
      </Container>
    </Box>
  );
};

export default Benifit;
