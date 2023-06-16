import React from 'react';

import './SiteFooter.css';

// Assets
import GitIcon from '../../assets/github-mark-white.svg';
import TwitterIcon from '../../assets/twitter-logo.svg'

export default function SiteFooter() {
    return(
        <div className='site--footer'>
            <p className='copyright-note'>&copy; anoxtovo 2023</p>
            <ul className='footer--social'>
                <li><a href='https://github.com/anoxtovo' target='_blank' rel='noopener noreferrer'><img src={GitIcon} alt='GitHub Icon' /></a></li>
                <li><a href='https://twitter.com/anoxtovo' target='_blank' rel='noopener noreferrer'><img src={TwitterIcon} alt='Twitter Icon' /></a></li>
            </ul>
        </div>
    );
}

