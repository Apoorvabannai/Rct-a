import React from "react";
import ReactDOM  from "react-dom";
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: 'Let us hit the beach',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it is chilly',
    iconName: 'snowflake'
  }
};

const getSeason = (lat) => {
  const currentMonth = new Date().getMonth();
  if ( currentMonth > 2 && currentMonth < 8){
    return (lat > 0 ? 'summer' : 'winter');
  } else{
    return (lat < 0 ? 'winter' : 'summer');
  }
};

const SeasonDisplay = (props) => {
  const seasonIs = getSeason(props.lat);
  const {text, iconName} = seasonConfig[seasonIs];

  return (
    <div className={`season-display ${seasonIs}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1> { text } </h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export { 
  SeasonDisplay
};