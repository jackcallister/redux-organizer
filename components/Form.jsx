import React, { Component, PropTypes } from 'react'

export default class Form extends Component {

  static propTypes = {
    addUser: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }
  }

  handleValueChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(e) => { this.props.addUser({ username: this.state.username }) }}>
        <input type='text'
               value={this.state.username}
               onChange={(e) => { this.handleValueChange(e) }}/>
      </form>
    )
  }
}
