import React, { Component } from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';

class Timer extends Component {

  render() {
    return (
      <div className='lottery-opentime'>
        <div className='expect'>
          第
          <span>{this.props.expect}</span>
          期 離截止時間
        </div>
        <div className="timer">{this.props.opentime}</div>
      </div>
    )
  }
}

Timer.defaultProps = {
  opentime: '00:00:00',
  expect: '2017000000'
}
Timer.propTypes = {
  opentime: PropTypes.string,
  expect: PropTypes.string
};

export default Timer
