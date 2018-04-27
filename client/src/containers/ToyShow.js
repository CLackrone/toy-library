import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { deleteToy } from '../actions/toyActions'
import ToyShowUI from '../components/ToyShowUI'


class ToyShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toy: this.props.toy,
      sendRedirect: false,
      isEditing: false
    }
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  handleDelete = toy => {
    this.props.deleteToy(toy)
    this.setState({ sendRedirect: true })
  }

  toggleEdit() {
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
          handleOnClick={this.handleDelete}
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
  deleteToy,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToyShow)
