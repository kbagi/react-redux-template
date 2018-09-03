import React from 'react'
import PropTypes from 'prop-types'

const Info = ({ info }) => (
    <span >
      {info}
    </span>
)

Info.propTypes = {
  info: PropTypes.string,
}

export default Info
