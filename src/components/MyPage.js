import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/createPost";
import { getCategory  } from "../actions/category";
import { getPostByAuthor } from "../actions/post";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class MyPage extends Component {

  state = {
    title: "", 
    body: "",
    category: {
      title: ''
    }
  }
  
  componentDidMount() {
    this.props.getCategory();
    this.props.getPostByAuthor();
  }

  setCategoryValue = (category) => {
    this.setState({
      ...this.state,
      category
    })
  }

  setPostValueTitle = (title) => {
    this.setState({
      ...this.state,
      title
    })
  }

  setPostValueBody = (body) => {
    this.setState({
      ...this.state,
      body
    })
  }

  render(){
    const { categories, isLoading } = this.props.category;
    return !isLoading && (
      <div>
        <TextField
          id="post-title"
          label="Post Title"
          margin="normal"
          variant="outlined"
          fullWidth
          rows={1}
          onChange={(e) => this.setPostValueTitle(e.target.value)}
        />
        <TextField
          id="post-body"
          label="Post Body"
          margin="normal"
          variant="outlined"
          multiline
          fullWidth
          rows={7}
          onChange={(e) => this.setPostValueBody(e.target.value)}
        />
        <Dropdown 
          categories={categories}
          value={this.state.category}
          handleChange={this.setCategoryValue}
        />
        <Button
					size="large"
					className="buttonSubmit"
					variant="outlined"
					color="primary"
					onClick={() => {
            console.log(this.state)
            this.props.createPost({
              title: this.state.title,
              body: this.state.body,
              author_id: this.props.user.id,
              author_name: this.props.user.login,
              category_name: this.state.category.name,
              category_id: this.state.category.id
            })
          }}
					>
            Add
				</Button>

        <MyPosts />
      </div>
    );
  }
}

const MyPosts = (props) => {
  console.log(props)
  return (
    <div>
      {props.posts}
    </div>
  );
}

const Dropdown = ({categories, value, handleChange}) => {
  return (
    <Select
      onChange={(e) => handleChange(e.target.value)}
      value={value.title}
      fullWidth
      input= {
        <OutlinedInput
          name="cat"
          id="outlined-cat-native"
        />
      }
    >
      {categories.map(category => {
        return <MenuItem key={category.id} value={category}>{category.title}</MenuItem>
      })}
    </Select>
  )
}

const mapStateToProps = state => ({
  category: state.category,
  user: state.root.user,
  post: state.posts
})

const mapDispatchToProps = {
  createPost,
  getCategory,
  getPostByAuthor
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPage)
