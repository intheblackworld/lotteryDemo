import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import _ from 'lodash'


class OpenNumber extends Component {
  constructor() {
    super()
    
  }

  render() {
    return (
      <div>
        <div className='lotter-opennumber'>
          11選5 
          第
          <span>{this.props.expect}</span>
          期 離截止時間
        </div>
        <div className='opennumber-row'>
          {
            _.map(this.props.opencode, (code, index) => (
              <div className="opennumber" key={index}>
                {code}
              </div>
            ))
          }
        </div>
        
      </div>
    )
  }
}

OpenNumber.defaultProps = {
  opencode: ['00', '00', '00', '00', '00'],
  expect: '2017000000'
}
OpenNumber.propTypes = {
  opencode: PropTypes.array,
  expect: PropTypes.string
};

export default OpenNumber
