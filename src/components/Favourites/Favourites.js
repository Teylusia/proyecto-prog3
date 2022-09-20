import React, { Component } from 'react';
import Card from '../Card/Card';
import './Favourites.css'

class Favourites extends Component {
  constructor(props){
    super(props)
    
    this.state = {
    }
  }
  componentDidMount(){
    let favourites = localStorage.getItem('favourites')
    let parsedFavourites = JSON.parse(favourites)
    this.setState({favourites: parsedFavourites})
  }
  clearFavourites(){
    localStorage.clear()
  }
  render() {

    if(this.state.favourites && this.state.favourites.length > 0){
      console.log(this.state.favourites);
      return (
        <div className='favourites'>
          {this.state.favourites.map((item, i) => {
            if(item.type === 'album'){
               return <Card info={item} id={item.id} key={i} isAlbum={true} />
            }else if(item.type === 'artist'){
              return <Card info={item} id={item.id} key={i} isAlbum={false} />
            }else if(item.type === 'track'){
              return <Card info={item} id={item.id} key={i} isAlbum={false} />
            }
          })}
        <button className='buttons' onClick={event => this.clearFavourites()}>Eliminar Lista</button>
        </div>
      )
    }else{
      return (
        <div className='favourites'>
          <h2 className='nothingYet'>No tienes nada agregado todavía</h2>
        </div>
      )
      
    }

  }
}

export default Favourites;
