//import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.css';
function Card({img, content, description,link}){
    return(
        <div className="card">
            <div>
                <img src={img} alt=''/>
            </div>
            <div className="card-content">
                <span className="card-title">{content}</span>
                <p className="card-description">{description}</p><br/>
                <a className="card-button" href={link}>View Project</a>
            </div>
        </div>
    )
}
export function Projects(){
  return (
    <div className='container'>
        <h1>My Projects</h1>
        <div className="card-container">
            <Card 
                img='https://raw.githubusercontent.com/padmanabhpvdev/music-player/main/public/image.png'
                content='React Music Player'
                description='Minimal music player made using React'
                link='https://github.com/padmanabhpvdev'
            />
            <Card
                img='https://raw.githubusercontent.com/padmanabhpvdev/DeepSeaView/refs/heads/main/enhancer/static/images/preview.jpg'
                content='Deep Sea View'
                description='DeepSea image enhancer using Python Django'
                link='https://github.com/padmanabhpvdev'
            />
            <Card
                img='https://raw.githubusercontent.com/padmanabhpvdev/scrapopy/main/images/scrnsht1.png'
                content='ScrapOPy'
                description='Scraping tool written in Python to collect informations from a webpage'
                link='https://github.com/padmanabhpvdev'
            />
        </div>
    </div>
    )
}