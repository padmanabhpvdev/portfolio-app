import './App.css';
import { BrowserRouter,Routes, Route , NavLink} from 'react-router-dom';
import { Contact } from './paths/contact';
import { Home } from './paths/home';
import { Skills } from './paths/skills';
import { Projects } from './paths/projects';
import { About } from './paths/about';

function App() {
  return (
    <BrowserRouter>
      <nav className='navbar'>
        <a href='/' className='brand'>Padmanabh's Portfolio</a>
        <div className='rightLinks'>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} viewTransition>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} viewTransition>About</NavLink>
          <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''} viewTransition>Skills</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} viewTransition>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} viewTransition>Contact</NavLink>
        </div>
      </nav>
      <div className='route-container'>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/about' element={ <About/>} />
          <Route path='/skills' element={ <Skills/>} />
          <Route path='/projects' element={ <Projects/>} />
          <Route path='/contact' element={ <Contact/>} />
        </Routes>
      </div> 
    </BrowserRouter>
  );
}

export default App;
