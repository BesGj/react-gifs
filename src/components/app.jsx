import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "46zrggi8goXgFosxQz"
    }



  }

  handlegif = (id) => {
    this.setState({
      selectedGifId: id
    })
  }

  search = (query) => {
    giphy('EOGYwYAd0SH3j2Lf0MOqtNG2P1CndCm0').search({
    q: query,
    rating: 'g',
    limit: 10
   }, (error, result) => {
    // Res contains gif data!
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {



    return(
    <div>
      <div className={"left-scene"}>
        <SearchBar searchFunction={this.search}/>
       <div className={"selected-gif"}>
         <Gif id={this.state.selectedGifId}   />
        </div>
      </div>
      <div className={"right-scene"}>
      <GifList gifs={this.state.gifs} selectImg={this.handlegif} />

      </div>
    </div>
    );
  }
}

export default App;
