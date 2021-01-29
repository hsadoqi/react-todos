import React, {Component} from 'react'
import Item from './Item'

class FavoritesContainer extends Component {
    render(){
        return (
            <div>
                <h1>Favorites Container</h1>
                {this.props.items.map(favorite => <Item item={favorite} dislike={this.props.dislikeItem}/>)}
            </div>
        )
    }
}

export default FavoritesContainer