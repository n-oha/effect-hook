import React, { useRef } from 'react'

const Ref = () => {

    const inputRef = useRef()

    const onClick = () => {
        return inputRef.current
    }

    return (
        <div>
            <h1>Nobuaki</h1>
            <input type="text" placeholder="Ex..." ref={inputRef}  style={{ paddignLeft: "10px" }} />
            <button onClick={onClick}>Change Name</button>
        </div>
    )
}

export default Ref