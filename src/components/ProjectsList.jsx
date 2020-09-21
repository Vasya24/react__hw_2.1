import React from 'react'

export default function ProjectList(props) {
    const {projects} = props;

    return (
        <div className='projects'>
            {projects.map(el => <img className='listItem' src={el.img} alt={el.category}/>)}
        </div>
    )
}


