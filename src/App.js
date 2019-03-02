import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Fade from 'react-reveal/Fade';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

import resumeData from './resumeData.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-76161989-3');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    this.setState({resumeData});
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <Fade>
        <About data={this.state.resumeData.main}/>
        </Fade>
        <Fade>
        <Resume data={this.state.resumeData.resume}/>
        </Fade>
        <Fade>
        <Portfolio data={this.state.resumeData.portfolio}/>
        </Fade>
        <Fade>
        <Contact data={this.state.resumeData.main}/>
        </Fade>
        <Fade>
        <Footer data={this.state.resumeData.main}/>
        </Fade>
      </div>
    );
  }
}

export default App;
