import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { deleteToy, updateToy} from '../actions/toyActions'
import ToyShowUI from '../components/ToyShowUI'


class ToyShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toy: this.props.toy,
      sendRedirect: false,
      isEditing: false
    }
  }

  handleDelete = toy => {
    this.props.deleteToy(toy)
    this.setState({ sendRedirect: true })
  }

  toggleEdit = toy => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  componentWillReceiveProps(nextProps) {
    const { toy } = this.props 
    if (toy.id !== nextProps.toy.id) {
      this.setState({ toy: nextProps.toy })
    }
  }

  updateToyState = e => {
    const name = e.target.name
    const toy = this.state.toy
    toy[name] = e.target.value
    return this.setState({
      toy: toy
    })
  }

  saveToy = e => {
    e.preventDefault()
    this.props.actions.updateToy(this.state.toy)
  }

  render() {
    const { sendRedirect, isEditing } = this.state

    const { toy } = this.props

    if (isEditing) {
      return (
        <div>
          <h1>edit toy</h1>
        </div>
      )
    }

    return(
      <div>
        <ToyShowUI toy={toy} 
          handleDelete={this.handleDelete}
          toggleEdit={this.toggleEdit} />
        {sendRedirect && (
          <Redirect to='/toys' />
        )}
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

const mapDispatchToProps = {
  deleteToy, updateToy
}

export default connect(mapStateToProps, mapDispatchToProps)(ToyShow)
