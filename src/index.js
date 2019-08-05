import React, { Component } from 'react'
import ReactDOM  from 'react-dom';
import { SeasonDisplay } from './SeasonDisplay';
import LoadingSpinner from './Spinner';
import './SeasonDisplay.css';

class App extends Component {
  state = {lat: null, errorMessage: ''};

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude}),
      err => this.setState({ errorMessage: err.message })
    )
  };
  
  seasonContent () {
    if(this.state.lat && !this.state.errorMessage){
      return (
        <div>
          <SeasonDisplay lat={ this.state.lat } />
        </div>
      );
    }

    if(!this.state.lat && this.state.errorMessage){
      return (      
        <div>
          Error Message Is: {this.state.errorMessage}
        </div>
      );
    }

    return (
      <LoadingSpinner textMessage={'Please accept location request'} />
    );
  }
  render() {
    return(
      <div className={`border-styled-color`}>
        {this.seasonContent()}
      </div>
    );
  };
};

ReactDOM.render(<App />, document.querySelector('#root'));
