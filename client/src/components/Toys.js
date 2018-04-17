import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/toyActions'

class Toys extends Component {

  componentWillMount() {
    const { actions } = this.props

    actions.fetchToys()
  }

  render() {
    // const toys = [
    //   {"id":9,"name":"Barbie House","age_range":"5-10","image_url":"https://imgur.com/FMwMstR.png","created_at":"2018-04-12T15:51:22.914Z","updated_at":"2018-04-12T15:51:22.914Z"},
    //   {"id":5,"name":"BeatBelle","age_range":"1-4","image_url":"https://imgur.com/RLjP9hE.png","created_at":"2018-04-12T15:51:22.905Z","updated_at":"2018-04-12T15:51:22.905Z"},
    //   {"id":10,"name":"Bow and Arrows","age_range":"5-10","image_url":"https://imgur.com/hwDhmMu.png","created_at":"2018-04-12T15:51:22.917Z","updated_at":"2018-04-12T15:51:22.917Z"}
    // ]

    const { toys } = this.props

    console.log(toys)


    const renderToys = toys.map(toy =>
      <div key={toy.id} className="container text-center" > 
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

//can now pass in toys payload as state for render()
const mapStateToProps = state => {
  return { toys: state.toys }
}

//componentDidMount calls this.props.actions.fetchToys()
const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}



export default connect(mapStateToProps, mapDispatchToProps)(Toys)
