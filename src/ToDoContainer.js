import React, { Component } from 'react'
import ItemsContainer from './ItemsContainer'
import ToDoForm from './ToDoForm'
import FavoritesContainer from './FavoritesContainer'


class ToDoContainer extends Component {

    constructor(){
        super()
        this.state = {
            items: [{content: "Work"}, {content: "Take attendance"}, {content: "Do labs"}],
            favoriteItems: [{content: "hello"}]
        }
    }

    // componentDidMount(){
    //     fetch(`http://localhost:3000/items`)
    //     .then(res => res.json())
    //     .then(items => {
    //         this.setState({
    //             items: items
    //         })
    //     })
    // }

    handleSubmit = (item) => {
       this.setState((state) => {
           return {items: [...state.items, item]}
       })
    }

    favoriteItem = (item) => {
        const foundItem = this.state.favoriteItems.find(favItem => favItem === item)
        if(!foundItem){
            this.setState((state) => {
                return {favoriteItems: [...state.favoriteItems, item]}
            })
        } else {
            const newArray = this.state.favoriteItems.filter(favItem => favItem !== item)
            this.setState((state) => {
                return { favoriteItems: newArray }
            })
        }

    }

    render(){
        return(
            <div>
                <ToDoForm handleSubmit={this.handleSubmit}/>
                <ItemsContainer items={this.state.items} favoriteItem={this.favoriteItem}/>
                <FavoritesContainer items={this.state.favoriteItems} dislikeItem={this.favoriteItem}/>
            </div>
        )
    }
}

export default ToDoContainer