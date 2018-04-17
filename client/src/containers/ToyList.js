import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/toyActions'
import ToyCard from '../components/ToyCard'

class Toys extends Component {

  componentWillMount() {
    const { actions } = this.props

    actions.fetchToys()
  }

  render() {

    const { toys } = this.props

    const allToys = toys.map((toy, i) => {
      return <ToyCard key={i} toy={toy} />
    })

    // const quotes = this.props.quotes.map((q, i) => {
    //   return <QuoteCard key={i} quote={q} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} removeQuote={this.props.removeQuote} />
    // })

    // const renderToys = toys.map(toy =>
    //   <div key={toy.id} className="container text-center" > 
    //     <p>Toy Name: {toy.name}</p>
    //     <p>Age Range: {toy.age_range}</p>
    //     <img src={`${toy.image_url}`} style={{height: '220px', width: '221px', margin: 'auto'}} alt={toy.name} />
    //   </div>
    // )

    return(
      <div>
        { allToys }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { toys: state.toys }
}

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Toys)
