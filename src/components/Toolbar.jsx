import React, { useState } from 'react'

export default function Toolbar(props) {

let clNames = 'filter'

const [selected, setState] = useState(false)

const handleSelect = e => {
  setState(selected = !selected)
}

    return (
       <>
        { props.filters.map((f, index) => {
            return <div className={clNames} 
            key={index}
            onClick={handleSelect}
            >{f.name}</div>
        }) }
       </>
    )
}
