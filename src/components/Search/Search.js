import { Component } from "react";
import './Search.css'

class Search extends Component{
  constructor(props){
    super(props)
    this.state = {
       search: "",
    }
  }
  
  preventSubmit(event){
    event.preventDefault();
  }
  mainSearch(event){
    this.setState({ search: event.target.value}, () => this.props.searchFunction(this.state.search))
  }

  render(){
    return(
      <div className="Search">
      <form onSubmit={(event) => {this.preventSubmit(event)}}> 
      <input placeholder="Inicia tu busqueda!" className="searchBar" type="text" onChange={(event) => this.mainSearch(event)} value={this.state.search}/>
      </form>
    </div>
    )
      
  }
}

export default Search