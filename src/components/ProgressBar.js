import React from 'react'
import "./ProgressBar.css"


function ProgressBar({completed}) {
  return (
    <div className="progress my-3">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${completed}%` }}
        aria-valuenow={completed}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {completed}%
      </div>
    </div>
  )
}

export default ProgressBar
