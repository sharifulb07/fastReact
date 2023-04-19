import React from 'react'
import Button from './Button'

function Toolbar({ onPlay, onUpload }) {
    return (
        <div>
            <Button onClick={onPlay}>
                Play Now
            </Button>

            <Button onClick={onUpload}>
                Upload Photo
            </Button>
        </div>
    )
}

export default Toolbar
