import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createToy } from '../actions/toyActions'
import { bindActionCreators } from 'redux'
//import * as actions from '../actions/toyActions'

class ToyForm extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      age_range: '',
      image_url: '',
      description: '',
      borrowed: false
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //this function should redirect 
  handleSubmit = e => {
    e.preventDefault()

    const { actions } = this.props

    actions.createToy(e)

  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div>
            <label>Toy Name: </label>
            <input 
              type='text' 
              onChange={e => this.handleChange(e)}
              name='name'
              value={this.state.name} 
              />
          </div>
          <div>
            <label>Age Range: </label>
            <input
            type='text'
            onChange={e => this.handleChange(e)}
            name='age_range'
            value={this.state.age_range} 
            />
          </div>
          <div>
            <label>Image URL: </label>
            <input
              type='text'
              onChange={e => this.handleChange(e)}
              name='image_url'
              value={this.state.image_url} 
              />
          </div>
          <div>
            <label>Description: </label>
            <textarea
              type='text'
              onChange={e => this.handleChange(e)}
              name='description'
              value={this.state.description} 
              />
          </div>
          <div>
            <label>
              <input 
                type='checkbox'
                checked={this.state.borrowed}
                name='borrowed'
                onChange={e => this.handleChange(e)}
              />
              Borrowed 
            </label>
          </div>
          <div>
            <input type='submit' />
          </div>
        </form>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapDispatchToProps)(ToyForm)