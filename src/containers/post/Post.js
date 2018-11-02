import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost } from "../../actions/post";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

class Post extends Component {
  state = {
    login: '',
    password: ''
  }

  componentDidMount() {
    this.props.getPost()
  }

  render() {
    return (
      <div className="post-wrap">
        {this.props.post.posts.length && this.props.post.posts.map(post => {
          return (
            <div key={post.id}>
              <ExpansionPanel>
                <ExpansionPanelSummary className="post-btn">
                  <Typography>{post.title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography className="post-body">
                    <div>{post.body}</div>
                    <p>{`Author : ${post.author_name}`}</p>
                    <span>{`Category : ${post.category_name}`}</span>
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
})

const mapDispatchToProps = {
  getPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)