import React from 'react';
import { Box, Container } from '@mui/material';
import Link from '@mui/material/Link';
import LinkedIn from '../../assets/img/linkedIn.svg'
import Twiiter from '../../assets/img/twitter-icon.svg'
import Facebook from '../../assets/img/facebook-icon.svg'
import Youtube from '../../assets/img/youtube-icon.svg'
import Instagram from '../../assets/img/instagram.svg'

const Footer: React.FC = () => {
  return (
    <Box component="footer" className="benefit_wrapper">
      <Container>
            <div className='maxw-850 mx-auto'>
                <div className='text-center'>
                    <p className='footer-text'>
                        Disclaimer: <br></br>
                        CliftonStrengths, CliftonStrengths Theme Names and Theme descriptions are trademarks of Gallup, Inc. This portal and any documents we provide are purely for your personal use as part of our coaching and training programs. They are not to be shared, reproduced, or in any other way made publicly available.<br></br> 
                        For full details visit <Link 
                        href="https://www.gallup.com/about/267957/terms-of-use.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="always">Gallup | Analytics and Tools to Transform Your Workspace - Product Terms of Use.</Link>
                    </p>
                </div>
                <div className='footer_card_wrapper'>
                    <div className='grid-col-manage'>
                        <div className='grid_sm_6'>
                            <div>
                                <p className='footer_card-heading'>
                                    OUR OFFICES
                                </p>
                                <p className='footer_card-text'>
                                    <span className='text-primary'>SINGAPORE</span> <br></br>
                                    138 Robinson Road<br></br> #21-02 Oxley Tower Lobby 1<br></br> Singapore 068906
                                </p>
                            </div>
                            <div>
                                <p className='footer_card-text mt-sm-3'>
                                    <span className='text-primary'>MALAYSIA</span> <br></br>
                                    800 Jalan Sentul D6 @ Sentul<br></br> East Unit 1-9,<br></br> 51000 Kuala Lumpur<br></br> Malaysia
                                </p>
                            </div>
                        </div>
                        <div className='flex-lgbox'>
                            <div>
                                <p className='footer_card-heading'>
                                    FOLLOW US
                                </p>
                                <div className='socila_links'>
                                    <Link href="https://www.linkedin.com/company/hongbaomedia" target="_blank">
                                        <img src={LinkedIn} alt={LinkedIn} />
                                    </Link>
                                    <Link href="https://twitter.com/HongBaoMedia" target="_blank">
                                        <img src={Twiiter} alt={Twiiter} />
                                    </Link>
                                    <Link href="https://www.facebook.com/hongbaomedia/" target="_blank">
                                        <img src={Facebook} alt={Facebook} />
                                    </Link>
                                    <Link href="https://www.youtube.com/user/hongbaomedia" target="_blank">
                                        <img src={Youtube} alt={Youtube} />
                                    </Link>
                                    <Link href="https://instagram.com/hongbaomedia" target="_blank">
                                        <img src={Instagram} alt={Instagram} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </Container>
    </Box>
  );
};

export default Footer;
