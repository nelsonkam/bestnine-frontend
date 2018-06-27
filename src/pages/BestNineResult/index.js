import React, { Component } from 'react';
import axios from 'axios'
import TileColumn from '../../components/TileColumns';
import Message from '../../components/Message';

class BestNineResult extends Component {
  state = {
    isLoading: true,
    error: null,
    user: null,
    images: []
  }

  componentDidMount() {
    const {username} = this.props.match.params
    axios.get("/api/bestnine/" + username)
      .then(({data}) => {
        this.setState({
          user: data.user,
          images: data.images,
          isLoading: false
        })
      }).catch((err) => {
        this.setState({
          isLoading: false,
          error: err
        })
      })
  }

  render() {
    const {isLoading, user, error, images} = this.state;
    if (isLoading) {
      return <Message message="Generating..." />
    } else if (error) {
      return <Message message="Oops. Something went wrong..." />
    } else {
      return (
        <div>
          <div className="mt-8 flex flex-col items-center">
            <img src={user.profile_image.large} className="h-32 w-32 rounded-full shadow" alt=""/>
            <p className="text-center text-2xl font-bold mt-3 mx-2">{user.name} (@{user.username})</p>
            <p className="mt-1 text-lg text-center mx-2">{user.bio}</p>
            <br/>
            <p className="text-3xl text-center font-bold mt-4">🌟 Best Nine Pictures 🌟</p>
            <div className="lg:flex md:hidden hidden justify-center flex-wrap mx-auto items-start mt-8">
              {Array.from({length: 3}, (v, k) => k).map((i) => (
                <TileColumn images={images} numberOfColumns={3} position={i} key={i} />
              ))}
            </div>
            <div className="lg:hidden md:flex hidden justify-center flex-wrap mx-auto items-start mt-8">
              {Array.from({length: 2}, (v, k) => k).map((i) => (
                <TileColumn images={images} numberOfColumns={2} position={i} key={i} />
              ))}
            </div>
            <div className="lg:hidden md:hidden flex justify-center flex-wrap mx-auto items-start mt-8">
              {Array.from({length: 1}, (v, k) => k).map((i) => (
                <TileColumn images={images} numberOfColumns={1} position={i} key={i} />
              ))}
            </div>
          </div>
        </div>
      )
    }

  }
}


export default BestNineResult;