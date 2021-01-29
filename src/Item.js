import React from 'react'

export default function Item(props){

    const renderButtons = () => {
        if(props.dislike){
            return (
                <button onClick={() => props.dislike(props.item)}>Dislike</button>
            )
        } else {
            return (
                <button onClick={() => props.favorite(props.item)}>Like</button>
            )
        }
    }
    return (
        <li>
            {props.item.content}
            {renderButtons()}
        </li>
    )
}