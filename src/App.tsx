import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Features from "./components/features/Features";
import Contact from "./components/contact/Contact";
import "./app.scss";
import About from './components/About/About';
import Recentwork from "./components/recentwork/Recentwork";
function App(): JSX.Element {
  return (
    <div className="app">
      <Topbar/>
      
      <div className="sections">
        <Intro/>
        <About/>
        <Portfolio/>
        <Recentwork/>
        <Features/>
        <Contact/>
        
      </div>
    </div>
  );
}

export default App;
