import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategory } from "../../actions/category";
import { getCategoryByTitle } from "../../actions/post"

import Button from '@material-ui/core/Button';

class Category extends Component {
  state = {
    login: '',
    password: ''
  }

  componentDidMount() {
    this.props.getCategory();
  }

  render() {
    return (
      <div className="category-wrap">
        {this.props.category.categories.length && this.props.category.categories.map(category => {
          return (
            <div key={category.id}>
              <Button 
                variant="contained"
                className="category-btn"
                onClick={() =>  this.props.getCategoryByTitle(category.title)}
                fullWidth="true">
                <h2>{category.title}</h2>
              </Button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  category: state.category
})

const mapDispatchToProps = {
  getCategory,
  getCategoryByTitle
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category)