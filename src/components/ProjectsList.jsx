import React from 'react'

export default function ProjectsList(props) {


    return (
        <div className="wrapper">
            { props.projects.map((i, index) => {
                return(
                    <img src={i.img} category={i.category} key={index} alt="portfolio_item" />
                )
            }) }
        </div>
    )
}
