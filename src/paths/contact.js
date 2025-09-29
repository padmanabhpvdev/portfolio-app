import { FaEnvelope, FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import './home.css'
export function Contact(){
    return(
        <div className="main2">
            <div className='left2'>
                <div className='aboutavatar' style={{marginTop: "-40px"}}>
                    <img src='avatar.png' alt='Me'/>
                </div>
            </div>
            <div className='right2'>
                <div className='grid'>
                    <h1>Get In Touch!</h1>
                    <div className='social'>
                        <a href='/'><FaGithub/></a>
                        <a href='/'><FaEnvelope/></a>
                        <a href='/'><FaLinkedin/></a>
                        <a href='/'><FaInstagram/></a>
                        <a href='/'><FaPhoneAlt/></a>
                        <a href='/'><FaFacebookF/></a>
                        <a href='/'><FaTwitter/></a>
                        <a href='/'><FaGoogle/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}