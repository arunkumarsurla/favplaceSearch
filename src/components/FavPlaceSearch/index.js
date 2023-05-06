import './index.css'
import { Component } from 'react'



const DestinationItem = props => {
    const {initialList} = props
    const {imgUrl, name} = initialList
  
    return (
      <li className="destination-item">
        <img src={imgUrl} alt={name} className="destination-image" />
        <p className="name">{name}</p>
      </li>
    )
  }




class FavPlaceSearch extends Component{
    state = {
        searchTerm:"",
}

onChangeSearchInput = event => {
    this.setState({searchTerm: event.target.value})
  }

  render(){
    const {searchTerm} = this.state
    const {initialList} = this.props
    const searchResults = initialList.filter(each => each.name.toLowerCase().includes(searchTerm.toLowerCase()),)
    return (
        <div className="app-container">
          <div className="destinations-search-container">
            <h1 className="heading">FavPlace Search</h1>
            <div className="search-input-container">
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                value={searchTerm}
                onChange={this.onChangeSearchInput}
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                alt="search icon"
                className="search-icon"
              />
            </div>
            <ul className="destinations-list">
              {searchResults.map(eachDestination => (
                <DestinationItem
                  key={eachDestination.id}
                  initialList={eachDestination}
                />
              ))}
            </ul>
          </div>
        </div>
      )
    }
  }
  




export default FavPlaceSearch