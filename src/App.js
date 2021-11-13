import './App.css';
import Intro from './Intro';
import Contact from './Contact';
import Projects from './Projects';
import { Helmet } from 'react-helmet';

function App() {
  return <div id="app">
    <Helmet>
      <meta name="image" property="og:image" content="/public/cat_balloon.png">
      </meta>
    </Helmet>
    <Intro></Intro>
    <Projects></Projects>
    <Contact></Contact>
  </div>;
}

export default App;