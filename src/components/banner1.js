import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner1.css'

const Banner1 = (props) => {
  return (
    <div className="banner1-container1 thq-section-padding">
      <div className="banner1-max-width thq-section-max-width">
        <div className="banner1-container2">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="banner1-text5 thq-heading-2">Company Name</h2>
              </Fragment>
            )}
          </h2>
          <h3>
            {props.content1 ?? (
              <Fragment>
                <h3 className="banner1-text3 thq-heading-3">
                  Company mission statement
                </h3>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner1-text4">Call to Action</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Banner1.defaultProps = {
  content1: undefined,
  action1: undefined,
  heading1: undefined,
}

Banner1.propTypes = {
  content1: PropTypes.element,
  action1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Banner1
