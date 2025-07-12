import React, { useState, type JSX } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';

interface AccordionItem {
  number: number;
  title: string;
  content: JSX.Element;
}

const accordionItems: AccordionItem[] = [
  {
    number: 1,
    title: 'Upload CliftonStrength 34 Report',
    content: (
      <div>
        <p>CliftonStrengths® helps you discover your natural talents and apply them in your personal and professional life.</p>
      </div>
    ),
  },
  {
    number: 2,
    title: 'Enter email address',
    content: (
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    ),
  },
  {
    number: 3,
    title: 'Choose Bundle',
    content: (
      <ul>
        <li>Understand your strengths</li>
        <li>Improve relationships</li>
        <li>Grow with purpose</li>
      </ul>
    ),
  },
  {
    number: 4,
    title: 'Book coaching session',
    content: (
      <div>
        <p>You can start anytime by clicking the sign-up button and completing your profile.</p>
        <button>Get Started</button>
      </div>
    ),
  },
];

const CustomAccordion: React.FC = () => {
  const [expanded, setExpanded] = useState<number | false>(1);

  const handleChange =
    (panel: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box className="numbered-accordion">
      {accordionItems.map((item) => (
        <Accordion
            key={item.number}
            expanded={expanded === item.number}
            onChange={handleChange(item.number)}
            sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                mb: '10px',
                mt: '10px',
                borderBottom: '0px solid #ccc', // optional: visual separation
                '&::before': {
                display: 'none',
                },
            }}
        >
          <AccordionSummary
            aria-controls={`panel${item.number}-content`}
            id={`panel${item.number}-header`}
          >
            <Typography sx={{ 
                display: 'grid', 
                gridTemplateColumns: 'minmax(0,auto) minmax(0,1fr)', 
                gridGap: '1rem', 
                alignItems: 'center', 
                color: expanded === item.number ? '#3A5B82' : '#A4A7BF',
                fontSize: '1.5rem' }}>
              <span className='circle--box' style={{ backgroundColor: expanded === item.number ? '#3A5B82' : '#A4A7BF',}}>{item.number}</span> <span>{item.title}</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.content}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default CustomAccordion;
