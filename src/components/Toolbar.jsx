import React from 'react'

export default function Toolbar(props) {

let clNames = 'filter'

function onSelectFilter() {
    console.log("Ololo, I am hacker")
  }

    return (
       <>
        { props.filters.map((f, index, onSelectFilter) => {
            return <div className={clNames} 
            key={index}
            onClick={() => onSelectFilter()}
            >{f.name}</div>
        }) }
       </>
    )
}