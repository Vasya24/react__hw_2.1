import React from 'react'

export default function ProjectsList(props) {
    return (
        <div className="wrapper">
        { props.projects.map((p, index) => {
            return <img src={p.img} 
            alt="portfolio item"
            key={index} />
        }) }
        </div>
    )
}
