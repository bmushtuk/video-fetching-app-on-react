import React, {Component} from 'react';

const keyAPI = 'AIzaSyDan_QK79dUNLfAXGGsU3HinVh7H3HL8M0'
const channelID = 'UC8butISFwT-Wl7EV0hUK0BQ'
const numOfVid = 6;
const finalURL = `https://www.googleapis.com/youtube/v3/search?key=${keyAPI}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${numOfVid}`

class YoutubeVid extends Component {
  constructor(props){
    super(props);

    this.state = {
      finalResult: []
    };
    this.clicked = this.clicked.bind(this);
  }
  clicked(){
    fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        const finalResult = responseJson.items.map(obj => "https://www.youtube.com/embed/"+ obj.id.videoId);
        this.setState({finalResult});
      });
  }
  render(){
    return(
      <div>
        <button onClick={this.clicked}>Get recent freeCodeCamp videos</button>
          {
            this.state.finalResult.map((link, i) => {
              console.log(link);
              var frame = <div key={i} className="youtube"><iframe  title="Intentionally blank" width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
              return frame;
            })
          }
          {this.frame}
      </div>
    );
  }
}
export default YoutubeVid;
