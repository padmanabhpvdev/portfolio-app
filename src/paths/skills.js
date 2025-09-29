import { SiPython, SiJavascript, SiReact, SiHtml5, SiFlutter, SiC, SiCplusplus, SiPhp, SiLinux, SiArduino, SiCss3 } from "react-icons/si";
import './home.css';

function SkillBalls({name,icon,level,color}){
    return(
        <div className='skillballs'>
            <div style={{height:`${(level/100)*240}px`}} className='bar'>{level}%</div><br/>
            <div style={{display:"block", lineHeightStep:"1"}}>
                <span style={{color:`${color}`}}>{icon}</span><br/>
                <small>{name}</small>
            </div>
        </div>
    )
}
export function Skills(){
    return(
        <div className='skill-container'>
            <SkillBalls icon={<SiHtml5/>} name="HTML" color='red' level="95"/>
            <SkillBalls icon={<SiCss3/>} name="CSS" color='blue' level="95"/>
            <SkillBalls icon={<SiPython/>}name="Python" color='yellow' level="90"/>
            <SkillBalls icon={<SiReact/>}name="React" color='skyblue' level="92"/>
            <SkillBalls icon={<SiFlutter/>}name="Flutter" color='blue' level="87"/>
            <SkillBalls icon={<SiJavascript/>}name="JavaScript" color='yellow' level="94"/>
            <SkillBalls icon={<SiC/>}name="C" color='blue' level="80"/>
            <SkillBalls icon={<SiCplusplus/>}name="C++" color='lightblue' level="82"/>
            <SkillBalls icon={<SiPhp/>}name="PHP" color='skyblue' level="84"/>
            <SkillBalls icon={<SiLinux/>}name="Linux" color='white' level="98"/>
            <SkillBalls icon={<SiArduino/>}name="Arduino" color='skyblue' level="78"/>
        </div>
    )
}