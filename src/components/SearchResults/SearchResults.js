import React, { Component } from 'react';
import Card from '../Card/Card';
import '../ChartSection/ChartSection.css'

class SearchResults extends Component {
  constructor(props){
    super(props)
    this.state = {
      chartTitle: props.chartTitle,
    }
  }
  componentDidMount(){
    this.setState({
      info: this.props.info
    })
  }


  render() {
      if(this.props.info.data.length > 0){
        console.log(this.state.info);
        return (
          <section key={this.props.info} className='chartSection'>
            <h2 className='chartSectionTitle'>{`${this.props.chartTitle}: ${this.props.search}`}</h2>
            {this.props.info.data.map( (card, i) =>{
              return <Card info={card} id={card.id} key={i} isAlbum={false} />
            })
            }
          </section>        
        )
      }else if(this.props.info.data.length === 0){
        <h4>No encontramos resultados para tu busqueda</h4>
      }
      else{
        <h4>Cargando tu busqueda....</h4>
      }
      
  }    
}

export default SearchResults;
