import React from 'react'
import './App.css'

import Effect from './Effect'
import Ref from './Ref'
import Button from './Button'

export default class App extends React.Component {
    render () {
        return (
            <div>
                <Effect />
                <Ref />
                <Button />
            </div>
        )
    }
}