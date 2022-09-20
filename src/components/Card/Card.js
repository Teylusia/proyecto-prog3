import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

class Card extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: props.id,
      isAlbum: props.isAlbum,
      info: props.info,
      descriptionStatus: "hideDescription",
    }
  }
  addFavourites(){
    
    if(localStorage.getItem('favourites')){
      let itemInfo = this.state.info
      let favourites = JSON.parse(localStorage.getItem('favourites'));
    
        favourites.push(itemInfo)
        let stringFavourites = JSON.stringify(favourites)
        localStorage.setItem('favourites', stringFavourites)
    }else if(!localStorage.getItem('favourites')){
      let favourites = []
      let itemInfo = this.state.info
      favourites.push(itemInfo)

      let stringFavourites = JSON.stringify(favourites)
      localStorage.setItem('favourites', stringFavourites)

    }
    console.log(localStorage);
  }
  removeFavourites(){
    if(localStorage.getItem('favourites')){

      let itemInfo = this.state.info
      let favourites = JSON.parse(localStorage.getItem('favourites'))
      let removedFavourites = favourites.filter(favs => favs.title !== itemInfo.title)
      if(removedFavourites.length === favourites.length){
        alert('no tienes esta cancion en el album')
      }else{
        let removedStringifiedFavourites = JSON.stringify(removedFavourites)
        localStorage.setItem('favourites', removedStringifiedFavourites)
      }
    }
  }
  toggleDescripition(){
    if(this.state.descriptionStatus === 'hideDescription'){
      this.setState({descriptionStatus: 'showDescription'})
    }else{
      this.setState({descriptionStatus: 'hideDescription'})
    }

  }

  render() {
    if(this.state.info.title && this.state.isAlbum === true){

      return (
       
          <div className='Card'>
            <img className='cardImage' src={this.state.info.cover} alt=''/>
            <h3 className='cardTitle'>{this.state.info.title}</h3>
            <p className={this.state.descriptionStatus}>{`ranking: ${this.state.info.position}, +18: ${this.state.info.explicit_lyrics}, creador: ${this.state.info.artist.name}`}</p>
            <button onClick={ item => this.toggleDescripition()} className='buttons'>Ver Mas/Menos</button>
            <Link className='buttons' to={`/album/${this.state.info.id}`}>Ir a detalle</Link>
            <button className='buttons' onClick={item => this.addFavourites()}>Añadir a favoritos</button>
            <button className='buttons' onClick={item => this.removeFavourites()}>Quitar favoritos</button>
          </div>
        
      )
    }else if(this.state.info.name ){
      return (
        
          <div className='Card'>
            <img className='cardImage' src={this.state.info.picture} alt=''/>
            <h3 className='cardTitle'>{this.state.info.name}</h3>
            <p className={this.state.descriptionStatus}>{`ranking: ${this.state.info.position}`}</p>
            <button onClick={ item => this.toggleDescripition()} className='buttons'>Ver Mas/Menos</button>
            <Link className='buttons' to={`/artist/${this.state.info.id}`} >Ir a detalle</Link>
            <button className='buttons' onClick={item => this.addFavourites()}>Añadir favoritos</button>
            <button className='buttons' onClick={item => this.removeFavourites()}>Quitar favoritos</button>
          </div>
      )
    }else if(this.state.info.title_short && this.state.isAlbum === false){
      return(
        
        <div className='Card'>
          <img className='cardImage' src={this.state.info.album.cover} alt=''/>
          <h3 className='cardTitle'>{this.state.info.title_short}</h3>
          <p className={this.state.descriptionStatus}>{`ranking: ${this.state.info.position}, duracion: ${this.state.info.duration}`}</p>
          <button onClick={ item => this.toggleDescripition()} className='buttons'>Ver Mas/Menos</button>
          <Link className='buttons' to={`/track/${this.state.info.id}`} >Ir a detalle</Link>
          <button className='buttons' onClick={item => this.addFavourites()}>Añadir favoritos</button>
          <button className='buttons' onClick={item => this.removeFavourites()}>Quitar favoritos</button>
        </div>
      
      )
    }
    else{
      return(
        <h4>Cargando Producto...</h4>

      )
    }
  }
}

export default Card;
