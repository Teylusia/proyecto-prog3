import React, { Component } from 'react';
import Card from '../Card/Card';
import {Link} from 'react-router-dom';
import './ChartSection.css'

class ChartSection extends Component {
  constructor(props){
    super(props)
    this.state = {
      chartTitle: props.chartTitle
    }
  }
  componentDidMount(){
    if(this.state.chartTitle === 'Albums'){
      fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=0&limit=12')
      .then(response => response.json())
      .then(data => this.setState({info: data}))
    }else if(this.state.chartTitle === 'Artists'){
      fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/artists?index=0&limit=12')
      .then(response => response.json())
      .then(data => this.setState({info: data}))
    }else{
      fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?index=0&limit=12')
      .then(response => response.json())
      .then(data => this.setState({info: data}))
    }
  }

  render() {

    if(this.state.chartTitle === 'Albums' && this.state.info){
      return(
        <section className='chartSection'>
          <h2 className='chartSectionTitle'>{this.state.chartTitle}</h2>
          {this.state.info.data.map( (card, i) =>{
            return <Card info={card} id={card.id} key={i} isAlbum={true} />
          })}
          <Link className="viewMore"to="/Albums">Ver Más</Link>
        </section>
      )
    }else if(this.state.chartTitle === 'Artists' && this.state.info){
      return (
        <section className='chartSection'>
          <h2 className='chartSectionTitle'>{this.state.chartTitle}</h2>
          {this.state.info.data.map( (card, i) =>{
            return <Card info={card} id={card.id} key={i} isAlbum={false} />
          })
          }
          <Link className="viewMore"to="/Artistas">Ver Más</Link>
        </section>        
      )
    }else if(this.state.chartTitle === 'Tracks' && this.state.info){
      return (
        <section className='chartSection'>
          <h2 className='chartSectionTitle'>{this.state.chartTitle}</h2>
          {this.state.info.data.map( (card, i) =>{
            return <Card info={card} id={card.id} key={i} isAlbum={false} />
          })
          }
          <Link className="viewMore"to="/Tracks">Ver Más</Link>
        </section>        
      )
    }else{
      return (
        <section className='loadScreen'>
          <h4>Estamos preparando la página para ti!</h4>
        </section>
      )
    }
    
  }
}

export default ChartSection;
