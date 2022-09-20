import React, { Component } from 'react';
import './AlbumDetail.css'
class AlbumDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: props.match.params.id,
    }
  }
  componentDidMount(){
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.state.id}`)
    .then( response =>   response.json())
    .then( data => this.setState({info: data}))
  }

  render() {
    if(this.state.info){
      console.log(this.state.info);
      return (
        <div className='detail'>
        <img className='detailImg' src={this.state.info.cover_medium} alt={this.state.info.title}/>
        <h2 className='detailTitle'>{this.state.info.title}</h2>
        <h3 className='detailName'>{this.state.info.artist.name}</h3>
        <h4 className='detailGenre'>{this.state.info.genres.data[0].name}</h4>
        <h5 className='detailReleaseDate'>{this.state.info.release_date}</h5>
        <ul>
          {this.state.info.tracks.data.map(track =>{
            return(
              <li className='detailTitle'>{track.title}</li>
            )
          })}
        </ul>
        </div>
        
      )
    }else{
      <h4>Cargando...</h4>
    }
  }
}

export default AlbumDetail;
