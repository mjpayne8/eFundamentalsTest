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
      const splitReviews = review.split(/\W+/);
      for(const word of splitReviews){
        const lowCase = word.toLowerCase();
        newData[lowCase] ? newData[lowCase] += 1 : newData[lowCase] = 1;
      }
    }
    delete newData['']
    this.setState({formattedData: newData})
  }

  render(){
    return(
        <WordTable className="WordTable" wordObject={this.state.formattedData}/>
  )
  }
}

export default ReviewBox;
