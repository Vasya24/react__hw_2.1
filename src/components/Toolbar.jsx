import React from 'react'

export default function Toolbar(props) {
    const {filter, selected} = props;
    
    const Chosen = () => {
        props.onChangeSelected(props.filter);
    }

    return (
            <input className={filter === selected ? 'select' : 'unSelected'} type='button' value={filter} onClick={Chosen}/>
    )
}


