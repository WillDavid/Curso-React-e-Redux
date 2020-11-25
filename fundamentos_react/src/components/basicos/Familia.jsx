import React, { cloneElement } from 'react'
/* {cloneElement} */

export default function Familia(props) {

    return(
        <div>
           {React.Children.map(props.children, (child) => {
               return cloneElement(child, props);
           })}
        </div>
    )
}