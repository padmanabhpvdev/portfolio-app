import './home.css'
export function Home(){
    return(
        <div className='main'>
            <div className='left'>
                <h2>Hi, I'm</h2>
                <h1>Padmanabh P V</h1>
                <h3>Computer Programmer <span>&#9881;</span> App Developer <span>&#9881;</span> Web Developer</h3><br/>
                <a href='/' className='button'>Hire Me</a>
            </div>
            <div className='right'>
                <img src='avatar.png' alt='Avatar' className='avatar'/>
            </div>
        </div>
    )
}