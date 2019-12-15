import React from 'react'
import HighChartsReact from 'highcharts-react-official'
import HighCharts from 'highcharts/modules/wordcloud.js'

const WordCloud = (props) => {

  const wordArray = Object.keys(props.wordObject).map((key) => {
      return ({name: key, weight: props.wordObject[key]})
  })

  const options = {
                series: [{
                    colors: ['#28B463', '#27AE60', '#186A3B', '#ABEBC6', '#73C6B6'],
                    type: 'wordcloud',
                    data: wordArray,
                    name: 'Count'
                }],
                title: {
                    text: ''
                },
                chart: {

                    height: 330,
                    margin: 15,
                    type: 'line'
                  },

            };

            return (
                        <div>
                            <HighchartsReact
                            highcharts={Highcharts}
                            constructorType={'chart'}
                            options={options} />
                        </div>
                    )


}

export default WordCloud
