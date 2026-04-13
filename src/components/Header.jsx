import logo from '../assets/images/logo.svg'
import Button from './Button'
import '../stylecomponents/Header.css'
import iconDropdown from '../assets/images/icon-dropdown.svg'
import iconUnits from '../assets/images/icon-units.svg'
import DropdownMenu from './DropdownMenu'
import { useState } from 'react'

function Header({units, updateUnit, system, toggleSystem}) {
    const [open, SetOpen] = useState(false)
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="logo" />
            <div style={{position:'relative'}}>
                <Button variant='units' onClick={() => { SetOpen((open) => !open) } }>
                    <img className="icon unicon" src={iconUnits} alt="" />
                    Units
                    <img className="icon dropicon" src={iconDropdown} alt="" />
                </Button>
                <DropdownMenu open={open} units={units} updateUnit={updateUnit} system={system} toggleSystem={toggleSystem}/>
            </div>
        </div>
    )
}

export default Header