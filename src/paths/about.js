import './home.css'
export function About(){
    return(
        <div className='main'>
            <div className='left'>
                <div className='pgbox'>
                    <h2>About Me ?</h2>
                    <p className='textbox'>I'm Padmanabh P V, a 21-year-old computer programmer, software developer and web developer with a passion for creating innovative solutions. I'm a self-taught technology enthusiast with strong skills in Computer Programming, Web Development, App Development and Software Development. My foundation in computer science was further strengthened through my studies at Marian College of Arts & Science, where I gained exposure to programming languages, software development methodologies and web technologies. With a deep passion for innovation, I continuously explore new ways to push the boundaries of technology.</p>
                    <p className='textbox'>When I'm not coding, you can find me tinkering with electronics, experimenting with microcontrollers, circuit boards and other electronic components to create interactive projects that combine hardware and software.</p>
                </div>
            </div>
            <div className='right'>
                <div className='aboutavatar'>
                    <img src='avatar.png' alt='Me'/>
                </div>
            </div>
        </div>
    )
}