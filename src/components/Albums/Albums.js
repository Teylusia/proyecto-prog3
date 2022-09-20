import React, { Component } from 'react';
import Card from '../Card/Card';
import '../Tracks/Tracks.css'
class Albums extends Component {
  constructor(){
    super();
    this.state = {
      amount: 10,

    }
  }
  SeeMore = () => {
    this.setState({amount: this.state.amount + 5})
  }

  componentDidMount(){
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?limit=${this.state.amount}`)
    .then(response => response.json())
    .then(data => this.setState({info: data}))
  }

  componentDidUpdate(){
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?limit=${this.state.amount}`)
    .then(response => response.json())
    .then(data => this.setState({info: data}))
  }
  render() {
    
    if(this.state.info){
      return (
        <section className='chartSection'>
        <h2 className='chartSectionTitle'>Albums</h2>
        {this.state.info.data.map( (card, i) =>{
              console.log(card);
              return <Card info={card} id={card.id} key={i} isAlbum={true} />
            })}
        <button className='buttons' onClick={this.SeeMore}>Cargar Mas</button>
        </section>
      )
    }else{
      <h4>Cargando...</h4>
    }

  }
}

export default Albums;
