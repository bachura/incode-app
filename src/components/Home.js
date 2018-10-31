import React, { Component } from 'react';
import Category from '../containers/category/Category'
import Post from '../containers/post/Post'

class Home extends Component {
  render() {
    return (
      <div>
        <Category />
        <Post />
      </div>
    );
  }
}

export default Home;
