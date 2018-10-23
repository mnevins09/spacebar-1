import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Articles from '../../articles/Articles';
// import Wrapper from '../../layout/Wrapper';
import ChatApp from '../../ChatApp/ChatApp';
import "./Home.css";
import UserProfile from '../../Profile/Profile';

class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <div id="home-page" className="mt-4 css-grid-wrapper app-bg-color-3 mx-5 mb-4">

          {/* Profile */}
          <div id="profile-section" className="box a">
            {/* <h6 className="app-display-4">User Profile</h6> */}
            <div className="d-flex justify-content-around">
              <UserProfile />

<div className="ml-4">
  <ul className="list-group">
    <li className="list-group-item">
      <div className="">
        <h4>WHAT'S TRENDING</h4>
        <p>
          <img src="https://tse3.mm.bing.net/th?id=OIP.m2mhfs_-d653oZYi0VO4vgHaEK&pid=15.1&P=0&w=75&h=75" alt="" className="img-responsive float-left mr-3"/>
          Check out the headlines and see what's trending.
        </p>
        {/* <a href="/">Link</a> */}
      </div>
    </li>
    <li className="list-group-item">
      <div className="">
        <h4>WHO'S ONLINE</h4>
        <p>
          <img src="https://tse4.mm.bing.net/th?id=OIP.yDVWwsoGBF4akjL9Xa-QSwHaD_&pid=15.1&P=0&w=75&h=75" alt="" className="img-responsive float-left mr-3"/>
          Chat with your friends and see who's online!
        </p>
        {/* <a href="/">Link</a> */}
      </div>
    </li>
    <li className="list-group-item">
      <div className="">
        <h4>WHAT'S UP NEXT</h4>
        <p>
          <img src="https://tse1.mm.bing.net/th?id=OIP.wbETZnPGF5LKfo1ZswRCwwHaHa&pid=15.1&P=0&w=75&h=75" alt="" className="img-responsive float-left mr-3"/>
          Be on the lookout for monthly feature updates such as:  
            Chat component typing indicator.
            Chat component clear chat room messages
            Passport reset password feature.
            Article add and delete comments.
            Blog feature.
            Site will allow user page customization.
        </p>
        {/* <a href="/">Link</a> */}
      </div>
    </li>
  </ul>
</div> 

            </div>
            {/* <div className="vl"></div> */}
          </div>

          {/* News Feed */}
          <div id="newsfeed-section" className="box b">
            <h6 className="app-display-4">Headlines
              <a href="/api/articles/scrape"  target="_self" className="btn app-btn-primary app-btn-bg-white app-btn-border-primary right-button" title="Scrape Headlines" role="button">
                <i className="fa fa-search" /> 
              </a>
            </h6>
            <Articles />
          </div>

          {/* Blog */}
          <div id="blog-section" className="box d">
            <h6 className="app-display-4">Blog</h6>
            {/* <div> */}
              <iframe title="blog-area" src ="https://coderdevelopers.blogspot.com/" width="100%" height="100%"> </iframe>
            {/* </div> */}
          </div>

          {/* Chat */}
          <div id="chat-section" className="box c">
            <h6 className="app-display-4">Chat</h6>
            <ChatApp></ChatApp>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home;
