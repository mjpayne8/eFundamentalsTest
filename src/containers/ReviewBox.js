import React, {Component} from 'react';
import data from '../data/reviews.json'
import WordTable from '../components/WordTable.js'
// import WordCloud from '../components/WordCloud.js'

class ReviewBox extends Component{
  constructor(props){
    super(props)
    this.state = {
      formattedData: {}
    }
  }

  countWords(wordsToCount){
    const newData = {}
    for (const sentance of wordsToCount){
      const splitSentance = sentance.split(/\W+/);
      for(const word of splitSentance){
        const lowCase = word.toLowerCase();
        newData[lowCase] ? newData[lowCase] += 1 : newData[lowCase] = 1;
      }
    }
    if (newData['']){ delete newData[''] };
    return newData
  }

  componentDidMount(){
    const newData = this.countWords(data.reviews);
    this.setState({formattedData: newData});
  }

  render(){
    return(
        <div>
          <WordTable className="WordTable" wordObject={this.state.formattedData}/>
        </div>
      )
  }
}

export default ReviewBox;
