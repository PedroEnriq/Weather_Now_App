import React from 'react'
import '../stylecomponents/DropdownMenu.css'

function DefeautDropdown(props) {
  return (
    <div className="dropdown-default">
      {props.children}
    </div>
  )
}

export default DefeautDropdown