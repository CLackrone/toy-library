import React, { Component } from 'react'

export default class Toys extends Component {
  render() {
    const toys = [
      {"id":9,"name":"Barbie House","age_range":"5-10","image_url":"https://imgur.com/FMwMstR","created_at":"2018-04-12T15:51:22.914Z","updated_at":"2018-04-12T15:51:22.914Z"},
      {"id":5,"name":"BeatBelle","age_range":"1-4","image_url":"https://imgur.com/RLjP9hE","created_at":"2018-04-12T15:51:22.905Z","updated_at":"2018-04-12T15:51:22.905Z"},
      {"id":10,"name":"Bow and Arrows","age_range":"5-10","image_url":"https://imgur.com/hwDhmMu","created_at":"2018-04-12T15:51:22.917Z","updated_at":"2018-04-12T15:51:22.917Z"}
    ]

    const renderToys = toys.map(toy =>
      <div key={toy.id} > 
        <p>Toy Name: {toy.name}</p>
        <p>Age Range: {toy.age_range}</p>
        <img src={`${toy.image_url}`} style={{height: '220px', width: '221px', margin: 'auto'}} alt={toy.name} />
      </div>
    )

    return(
      <div>
        {renderToys}
      </div>
    )
  }
}


//<img src={catPic.url} className="thumbnail responsive" style={{height: '220px', width: '221px', margin: 'auto'}}/>