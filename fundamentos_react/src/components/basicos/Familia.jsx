import React from 'react'

export default function Familia(props) {

    return(
        <div>
            {React.cloneElement(props.children)}
        </div>
    )
}