import React, { Component } from 'react';

class BestNine extends Component {
  state = {
    username: null,
    showError: false
  }
  handleGenerateClick = () => {
    const {username} = this.state
    if (username) {
      this.props.history.push('/bestnine/' + this.state.username)
    } else {
      this.setState({showError: true})
    }
  }
  render() {
    return (
      <div className="flex flex-col items-center mx-4 justify-center" style={{marginTop: "15%"}}>
        <h1 className="text-5xl text-center">Best Nine</h1>
        <p className="text-xl mt-2 text-center">Showcase the 9 most popular pictures of your profile</p>
        <div className="flex flex-wrap justify-center container mt-8 md:w-1/2">
          <input 
            onChange={(e) => this.setState({username: e.target.value}) }
            className="border p-3 rounded w-3/5" 
            type="text" 
            placeholder="Enter your username" />
          <button onClick={this.handleGenerateClick} className="shadow rounded bg-black text-white p-3 ml-3">Generate</button>
        </div>
        {this.state.showError && <p className="text-orange mt-2 text-left">Please enter your username</p>}
      </div>
    )
  }
}

export default BestNine;