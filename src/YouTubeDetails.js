import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import InfiniteScroll from 'react-infinite-scroll-component'


class YouTubeDetails extends Component {

  constructor() {
    super()
  }

  render() {

    const {item, data} = this.props


    if (data.loading) {
      return false
    }

    const [dataItem] = data.youtubeV3.videos.list.items


    return <div> {dataItem.snippet.title}</div>



  }
}

export default graphql(gql`
 query getVideoDetails($id:String!) {
    youtubeV3(key:"noop"){       
      videos{
        list(id:$id,  part:"snippet") {
          items {          
            snippet{
              title
            }
          }
        }  
      }
    }
  }`,
  {
    options: (props) => ({
      variables: {
        id: props.item.id.videoId
      }
    })
  })(YouTubeDetails)