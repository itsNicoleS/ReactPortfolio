import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Mynavbar } from './components/Mynavbar';
import { Banner } from './components/Banner';
import { SkillRide } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';





function App() {
  return (
    <div className="App">
      <Mynavbar />
      <Banner />
      <Contact />
      <SkillRide />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
