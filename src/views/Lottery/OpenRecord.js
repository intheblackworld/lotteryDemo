import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import _ from 'lodash'


class OpenRecord extends Component {
  constructor() {
    super()
    
  }

  render() {
    return (
      <div>
        <div className='lotter-openrecord'>
          <div className='lottery-openrecord-title'>
            <span>期次</span>
            <span>開獎號碼</span>
          </div>
          {
            _.map(this.props.lotteryList, (lottery, index) => {
              if (index > 2) {
                return
              }
              return (
                <div className="lottery-openrecord-item" key={index}>
                <span>{lottery.opentimestamp.toString().slice(4)}</span>
                <span>{lottery.opencode.split(',').join(' ')}</span>
              </div>
              )
            })

          }
          
        </div>
      </div>
    )
  }
}

OpenRecord.defaultProps = {
  lotteryList: [
    {
      opentimestamp: 1512486060,
      opencode: '00 00 00 00 00 00'
    },
    {
      opentimestamp: 1512486060,
      opencode: '00 00 00 00 00 00'
    },
    {
      opentimestamp: 1512486060,
      opencode: '00 00 00 00 00 00'
    }
  ],
}
OpenRecord.propTypes = {
  lotteryList: PropTypes.array
};

export default OpenRecord
