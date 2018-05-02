import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { createToy, fetchToy } from '../actions/toyActions'

class ToyForm extends Component {
  constructor(props) {
    super(props)

    const toy = this.props.toy

    this.state = {
        name: toy ? toy.name : '',
        age_range: toy ? toy.age_range : '',
        image_url: toy ? toy.image_url : '',
        description: toy ? toy.description : '',
        sendRedirect: false
    }
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
    const { createToy, updateToy, id } = this.props
    if (id) {
      updateToy(this.state, id)
    } else {
      createToy(this.state)
    }
    this.setState({ sendRedirect: true })
  }

  render() {
    const { sendRedirect } = this.state
    const { id } = this.props.toy

    return (
      <div>

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
        
        {sendRedirect && (
          <Redirect to='/toys' />
        )}
        
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  console.log('ran map')

  const toy = state.toys.find(toy => toy.id === parseInt(ownProps.match.params.toyId, 10))

  if (toy) {
    console.log('i am your if')
    console.log(toy)
    return { toy }
  } else {
    console.log('i am your else')
    console.log(toy)

    return { 
      toy: {}
    }
  }
}

export default connect(mapStateToProps, { createToy, fetchToy })(ToyForm)





//code for displaying borrowed checkbox
// <div>
//   <label>
//     <input 
//       type='checkbox'
//       checked={this.state.borrowed}
//       name='borrowed'
//       onChange={e => this.handleChange(e)}
//     />
//     Borrowed 
//   </label>
// </div>