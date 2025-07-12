import React from 'react';
import { Box, Container } from '@mui/material';
import CustomAccordion from '../CustomAccordion';

const UploadDoc: React.FC = () => {
  return (
    <Box className="benefit_wrapper bg-purple">
      <Container>
           <CustomAccordion/>
      </Container>
    </Box>
  );
};

export default UploadDoc;
