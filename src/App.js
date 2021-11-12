import './App.css';
import Intro from './Intro';
import Contact from './Contact';
import Featured from './Featured';

function App() {
  return <div id="app">
    <Intro></Intro>
    {/* <Projects></Projects> */}
    <Featured></Featured>
    <Contact></Contact>
  </div>;
}

export default App;
