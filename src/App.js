import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Social from './components/Social';
import Projects from './components/Projects';
import data from './portfolio_data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <About data={data}/>
        <Social data={data}/>
        <Projects data={data}/>
      </div>
    );
  }
}

export default App;
