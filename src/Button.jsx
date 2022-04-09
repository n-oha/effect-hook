import React, { useState } from 'react'

const Button = () => {
    const [ toggle, setToggle ] = useState(false)

    return(
        <div>
            <button
            onClick={() => {
                setToggle(!toggle)
            }}
            >
                Click Here
            </button>
            {toggle && <span>This is toggle action</span>}
        </div>
    )
}

export default Button