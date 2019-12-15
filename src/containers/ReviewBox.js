import React, {Component} from 'react';
import data from '../data/reviews.json'
import WordTable from '../components/WordTable.js'

class ReviewBox extends Component{
  constructor(props){
    super(props)
    this.state = {
      formattedData: {}
    }
  }

  componentDidMount(){
    const newData = {}
    for (const review of data.reviews){
      const splitReviews = review.split(' ');
      for(const word of splitReviews){
        const lowCase = word.toLowerCase();
        newData[lowCase] ? newData[lowCase] += 1 : newData[lowCase] = 1;
      }
    }
    this.setState({formattedData: newData})
  }

  render(){
    return(
      <div>
        <p>This is ReviewBox</p>
        <WordTable className="WordTable"/>
      </div>
  )
  }
}

export default ReviewBox;
