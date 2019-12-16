import React, {Component} from 'react';
import data from '../data/reviews.json'
import WordTable from '../components/WordTable.js'
import WordCloudTable from '../components/WordCloudTable.js'
// import WordCloud from '../components/WordCloud.js'

class ReviewBox extends Component{
  constructor(props){
    super(props)
    this.state = {
      formattedData: {},
      keyArray: []
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

  transformArray(array){
    const newArray = [];
    while (array.length){
      newArray.push(array.splice(0,5));
    }
    return newArray
  }

  componentDidMount(){
    const newData = this.countWords(data.reviews);
    this.setState({formattedData: newData});
    const array = this.transformArray(Object.keys(newData));
    this.setState({keyArray: array})
  }

  render(){
    return(
        <div>
          <WordCloudTable className="WordCloudTable" words= {this.state.keyArray} wordObject={this.state.formattedData}/>
          <WordTable className="WordTable" wordObject={this.state.formattedData}/>
        </div>
      )
  }
}

export default ReviewBox;
