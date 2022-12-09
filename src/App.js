import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Service from './components/Service.jsx';
import Skill from './components/Skill.jsx';
import Project from './components/Project.jsx'
import Contact from './components/Contact';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toogleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <div className="App" id={theme}>
        <Navbar />
        <div className='switch'>
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toogleTheme} checked={theme === "dark"} />
        </div>
        <Hero />
        <About />
        <Service />
        <Project name='Hello' />
        <Skill />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;