import React from 'react'
//import InstagramIcon from '@mui/icons-material/Instagram';
//import TwitterIcon from '@mui/icons-material/Twitter';
//import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';


import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://www.linkedin.com/in/harsha4499'><LinkedIcon/></a>
            <a href='https://github.com/HARSHA4499?tab=repositories'><GithubIcon/></a>  
        </div>
        <p id="copyright"> &copy; 2023 harsha4499.com</p>
    </div>
  )
}

export default Footer