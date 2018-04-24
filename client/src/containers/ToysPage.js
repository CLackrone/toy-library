import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/toyActions'
import ToysList from '../components/ToysList'
import ToyShow from './ToyShow'

class ToysPage extends Component {

  componentWillMount() {
    const { actions } = this.props

    actions.fetchToys()
  }

//match is a JS object that contains the current url '/toys'
  render() {

    const { toys, match } = this.props

    return(
      <div>
        <ToysList toys={toys} />
        <Route path={`${match.url}/:toyId`} component={ToyShow} />
        <Route exact path={match.url} render={() => (
          <h3>Please choose a toy</h3>
          )} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ToysPage)



// const MoviesPage = ({ match, movies }) => 
//   <div>
//     <MoviesList movies={movies} />
//     <Route path={`${match.url}/:movieId`} component={MovieShow}/>
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a Movie from the list.</h3>
//     )}/>
//   </div>;