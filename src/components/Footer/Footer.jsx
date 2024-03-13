import React from 'react';
import "./styles.css";
import crown from '../../assets/crown-2-svgrepo-com.svg';
import play from '../../assets/play-svgrepo-com.svg';
import cc from '../../assets/cc-card-svgrepo-com.svg';
import lightning from '../../assets/lightning-svgrepo-com.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='links'>
                <h3> Links </h3>
                <div className='link-table'>
                    <ul>
                        <ul>
                            <li> hello </li>
                            <li> hello </li>
                            <li> hello </li>
                        </ul>
                        <ul>
                            <li> hello </li>
                            <li> hello </li>
                            <li> hello </li>
                            <li> hello </li>
                        </ul>                        <ul>
                            <li> hello </li>
                            <li> hello </li>
                            <li> hello </li>
                            <li> hello </li>
                            <li> hello </li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='about-us'>
                <h3> About us </h3>
                <div className='description1'>
                    lorem ipsum maa chudaye aditya rai bsdk copy paste karna band kar de warna wahin aake gaand marunga bsdk bhen ke lund madarjaat kutte!
                </div>
                <div className='description2'>
                    lorem ipsum maa chudaye aditya rai bsdk copy paste karna band kar de warna wahin aake gaand marunga bsdk
                </div>
                <div className='plus-features'>
                    <div>
                        <img src={crown} />
                        <div>
                            High Quality
                        </div>
                    </div>
                    <div>
                        <img src={play} />
                        <div>
                            High Quality
                        </div>
                    </div>
                    <div>
                        <img src={lightning} />
                        <div>
                            High Quality
                        </div>
                    </div>
                    <div>
                        <img src={cc} />
                        <div>
                            High Quality
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;