import React, { Component } from 'react';

class Index extends Component {
  state = {
    username: null,
    showError: false
  }
  handleGenerateClick = () => {
    let {username} = this.state
    if (username) {
      if (username[0] === "@") {
        username = username.slice(1)
      }
      this.props.history.push('/bestnine/' + username)
    } else {
      this.setState({showError: true})
    }
  }
  render() {
    return (
      <div className="h-screen w-screen flex items-center justify-center" style={{backgroundImage: "url(https://source.unsplash.com/random)", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="flex flex-col items-center mx-4 justify-center rounded py-12 px-10 shadow-lg" style={{background: "#FFFFFF"}}>
          <h1 className="text-5xl font-bold text-center mb-3">Best Nine</h1>
          <p className="text-xl mt-2 text-center max-w-md">Showcase the 9 most popular pictures of your Unsplash profile</p>
          <div className="flex flex-wrap justify-center container mt-8 md:w-1/2 lg:w-full">
            <input 
              onChange={(e) => this.setState({username: e.target.value}) }
              className="border p-3 rounded w-3/5" 
              type="text" 
              placeholder="Enter your username" />
            <button onClick={this.handleGenerateClick} className="shadow rounded bg-black text-white p-3 ml-3">Generate</button>
          </div>
          <div className="w-4/5 container">
            {!this.state.showError && <p className="text-gray-700 text-sm mt-2 text-left">Example: @harleydavidson</p>}
            {this.state.showError && <p className="text-orange-500 text-sm mt-2 text-left">Please enter your username</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default Index;