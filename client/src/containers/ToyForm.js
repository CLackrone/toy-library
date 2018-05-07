import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { createToy, fetchToy, updateToy } from '../actions/toyActions'

class ToyForm extends Component {
  constructor(props) {
    super(props)

    const toy = this.props.toy

    this.state = {
      id: toy ? toy.id : null, 
      name: toy ? toy.name : '',
      age_range: toy ? toy.age_range : '',
      image_url: toy ? toy.image_url : '',
      description: toy ? toy.description : '',
      
    }
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      name: nextProps.toy.name,
      age_range: nextProps.toy.age_range,
      image_url: nextProps.toy.image_url,
      description: nextProps.toy.description
    })
  }

  componentDidMount = () => {
    const id = this.props.match.params.toyId

    if (id) {
      this.props.fetchToy(id)
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { createToy, updateToy } = this.props
    const { id } = this.state

    if (id) {
      updateToy(this.state)
      this.props.history.push(`/toys/${id}`)
    } else {
      createToy(this.state, this.props.history)
      //this.props.history.push('/toys')
    }
    //this.setState({ sendRedirect: true })
  }

  render() {
    const { id } = this.props.toy

   

    return (
      <div className='container text-center'>

        <form onSubmit={e => this.handleSubmit(e, id ? id : false)}>
          
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
            <input type='submit' />
          </div>

        </form>
        
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {

  const toy = state.toys.find(toy => toy.id === parseInt(ownProps.match.params.toyId, 10))

  if (toy) {
    return { toy }
  } else {
    return { 
      toy: {}
    }
  }
}

export default connect(mapStateToProps, { createToy, fetchToy, updateToy })(ToyForm)