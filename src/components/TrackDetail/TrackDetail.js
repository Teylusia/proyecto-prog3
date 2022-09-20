import React, { Component } from 'react';
import '../AlbumDetail/AlbumDetail.css'

class TrackDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: props.match.params.id,
    }
  }
  componentDidMount(){
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.state.id}`)
    .then( response =>   response.json())
    .then( data => this.setState({info: data}))
  }

  render() {
    console.log(this.state);
    if(this.state.info){
      return (
        <div className='detail'>
        <img className='detailImg' src={this.state.info.album.cover} alt={this.state.info.title}/>
        <h2 className='detailTitle'>{this.state.info.title}</h2>
        <h3 className='detailName'>{this.state.info.artist.name}</h3>
        <h4 className='detailGenre'>{this.state.info.album.title}</h4>
        <audio controls autoplay muted>
          <source src={this.state.info.preview} />
        </audio>
        </div>
      )
    }else{
      <h4>Cargando...</h4>
    }
  }
}

export default TrackDetail;
