import React from 'react';

const LoadingSpinner = (props) => {
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">{ props.textMessage }</div>
      </div>
    );
};

LoadingSpinner.defaultProps = {
  textMessage: 'Loading....'
}
export default LoadingSpinner;
