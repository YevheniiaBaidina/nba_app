import React, { Component } from 'react';
import axios from 'axios';
import SliderTemplates from './SliderTemplates';

class NewsSlider extends Component {
  state = {
    news: []
  };

  componentWillMount() {
    axios.get(`http://localhost:3004/articles?_start=${this.props.start}&_end=${this.props.end}`)
      .then( response => {
          this.setState({
            news: response.data
          })
      });
  };
    render() {
        console.log(this.props.type);
      return (
        <div>
          <SliderTemplates 
            data={this.state.news}
            type={this.props.type}
            settings={this.props.settings}
          />
        </div>
      );
    };
};

export default NewsSlider;