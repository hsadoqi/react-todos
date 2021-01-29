import React, {Component} from 'react'
import Item from './Item'

class ItemsContainer extends Component {
    render(){
        return (
            <ul>
                {this.props.items.map(item => <Item item={item} favorite={this.props.favoriteItem}/>)}
            </ul>
        )
    }
}

export default ItemsContainer