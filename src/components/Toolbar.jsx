import React from 'react'

export default function Toolbar(props) {

    return (
        <div className="top">
           { props.filters.map(filter => {
               return(
                   <div className="filter">{filter}</div>
               )
           }) }
        </div>
    )
}
