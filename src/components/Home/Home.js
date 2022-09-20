import Search from "../Search/Search"
import ChartSection from "../ChartSection/ChartSection"
import { Component } from "react"
import SearchResults from "../SearchResults/SearchResults"
import './Home.css'
class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      searchResults: ""
    }
  }
  searchFunction(search){
    console.log(search)
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${search}`)
    .then(response => response.json())
    .then( data => this.setState({searchResults: data, search: search}))
    .catch(err => console.log('hubo un error'))
  }
  render(){
    const sections = ['Albums', 'Artists', 'Tracks']
    if(this.state.searchResults !== "" && !this.state.searchResults.error){
      console.log('vuelve y renderiza')
      return(
        <div className="home">
           <Search searchFunction={(search) => this.searchFunction(search)} />
           <SearchResults info={this.state.searchResults} search={this.state.search} chartTitle="Resultados de tu Busqueda" />
        </div>
      )
    }else{
      return(
        <div className="home">
          <Search searchFunction={(search) => this.searchFunction(search)} />
          {sections.map( (section, i) =>{
            return <ChartSection chartTitle= {section} key={i} />
          })}
        </div>
      )
    }
  }
}

export default Home