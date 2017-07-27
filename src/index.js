import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSerch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyC9uznaiXK9TVnXKYFhZ5pEFIy9SAET2jM'

// create a component that produces some html
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards');
  }

videoSearch(term) {
  YTSerch({key: API_KEY, term: term}, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    });
  });
}

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500)
  return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
           videos={this.state.videos} />
     </div>
   );
  }
}
// take this components html and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
