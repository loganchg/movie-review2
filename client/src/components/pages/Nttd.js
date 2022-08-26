import React from 'react';
import './Content.css';
import { Link } from 'react-router-dom';
import Welcome from './Welcome';




function Content ()  {
  return (
    
    <div className='backgroundimage'>
    <section className='posterdescription'>
    <h1><img src="images/img-6.jpg" alt="Logo" /></h1>
    <Welcome/>
   
    <body>
      <p className='posterdescription-heading'>
      Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.
      </p>
    
      </body>
    </section>
    <div class='footerlinks'>
      <div className='footerlinkwrapper'>
        <div class='footerlinkitems'>
          <h2>About Us</h2>
          <Link to='/sign-up'>Register your account</Link>
          <Link to='/'>History</Link>
        </div>
        <div class='footerlinkitems'>
          <h2>Contact us</h2>
          <Link to='/sign-up'>Customer Support</Link>
          <Link to='/sign-up'>Technical Support</Link>
        </div>
        <div class='footerlinkitems'>
          <h2>Useful Resources</h2>
          <Link to={{ pathname: "https://www.imdb.com/?ref_=nv_home" }} target="_blank">IMDb</Link> 
          
        </div>
    </div>
   </div>
       
    <section class='social-media'>
      <div class='social-media-wrap'>
        <div class='footer-logo'>
          <Link to='/' className='social-logo'>
            Flixer
            <i class='fab fa-typo2' />
          </Link>
        </div>
        <medium class='website-rights'>Flixer © 2022</medium>
        <div class='social-icons'>
          <Link
            class='social-icon-link facebook'
            to={{ pathname: "https://www.facebook.com/" }}
            target='_blank'
            aria-label='Facebook'
          >
            <i class='fab fa-facebook-f' />
          </Link>
          <Link
            class='social-icon-link instagram'
            to={{ pathname: "https://www.instagram.com/" }}
            target='_blank'
            aria-label='Instagram'
          >
            <i class='fab fa-instagram' />
          </Link>
          <Link
            class='social-icon-link youtube'
            to={{ pathname: "https://www.youtube.com/" }}
            target='_blank'
            aria-label='Youtube'
          >
            <i class='fab fa-youtube' />
          </Link>
          <Link
            class='social-icon-link twitter'
            to={{ pathname: "https://www.twitter.com/" }}
            target='_blank'
            aria-label='Twitter'
          >
            <i class='fab fa-twitter' />
          </Link>
          <Link
            class='social-icon-link Linkedin'
            to={{ pathname: "https://www.linkedin.com/" }}
            target='_blank'
            aria-label='LinkedIn'
          >
            <i class='fab fa-linkedin' />
          </Link>
        </div>
      </div>
    </section>
  </div>
);
}

export default Content;