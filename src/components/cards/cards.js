import React from "react";
import Youtube from "react-youtube";

import "./cards.css";

// IMG imports
import itLoggerImg from "../../assets/itlogger.JPG";
import contactKeeperImg from "../../assets/contactKeeper.JPG";
import githubFinderImg from "../../assets/githubFinder.JPG";
import netflixImg from "../../assets/netflix.JPG";
import pythonBlackjackImg from "../../assets/pythonBlackjack.JPG";
import urlShortnerImg from "../../assets/urlShortner.JPG";
import weatherImg from "../../assets/weather.JPG";
import rpsIMG from "../../assets/rockpaperscissors.JPG";
import ytPlaylists from "../../assets/ytplaylists.JPG";
import socialmedia from "../../assets/socialMedia.JPG";
import weddingImage from "../../assets/Cynthia_Wedding.png";
import cnnImage from "../../assets/CNN_Problem_Statement.png";

// icon assets
import firebase from "../../assets/firebase.png";
import openCVImg from "../../assets/OpenCV_logo.png";
import kerasLogo from "../../assets/keras_logo.png";

const cardITLogger = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="row justify-content-center">
      <div className="col-auto mb-3">
          <div className="card border border-dark">
            <img
              alt="convolutional-neural-network"
              className="card-img-top"
              src={cnnImage}
            />
            <div className="card-body">
              <h2 className="card-title">Car Damage Classification using a Convolutional Neural Network</h2>
              <p className="card-text">
                In 8 weeks, 2 other students and I learned about Convolutional Neural Networks and successfully implemented
                the model in Keras for car damage classification.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#cnn-modal"
              >
                View More
              </button>
              <br/>
                <img
                  style={{
                    width: "34px",
                    height: "32px",
                    margin: "14px",
                    marginBottom: "0",
                    display: "inline",
                    padding: "0",
                  }}
                  src={openCVImg}
                  alt="openCV Logo"
                />
                  <img
                  style={{
                    width: "52px",
                    height: "24px",
                    margin: "14px",
                    marginBottom: "0",
                    display: "inline",
                    padding: "0",
                  }}
                  src={kerasLogo}
                  alt="keras Logo"
                />
              </div>
            </div>
          </div>
        <div className="col-auto mb-3">
          <div className="card border border-dark">
            <img
              alt="yt-playlist-app"
              className="card-img-top"
              src={ytPlaylists}
            />
            <div className="card-body">
              <h2 className="card-title">YouTube Unlisted Playlist Maker</h2>
              <p className="card-text">
                A full-stack React app to create YouTube playlists. Made so I
                could autoplay music in the background as I code.
                <br />
                Uses firebase for backend.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#yt-playlist-app-modal"
              >
                View More
              </button>
              <div className="row justify-content-center icons">
                <i className="fab fa-html5 fa-2x" />
                <i className="fab fa-css3-alt fa-2x" />
                <i className="fab fa-js-square fa-2x" />
                <i className="fab fa-react fa-2x" />
                <img
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "14px",
                    marginBottom: "0",
                    display: "block",
                    padding: "0",
                  }}
                  src={firebase}
                  alt="Firebase"
                />
              </div>
            </div>
          </div>
        </div>
        <div className='col-auto mb-3'>
          <div className='card border border-dark'>
            <img
              alt='wedding-app'
              className='card-img-top'
              src={weddingImage}
            />
            <div className='card-body'>
              <h2 className='card-title'>Wedding Photo App</h2>
              <p className='card-text'>
                This full-stack React App was used to collect wedding images
                from guests.
                <br />
                All images were stored in Firebase Storage and accessed using
                Firebase datastore.
              </p>
              <button
                type='button'
                className='btn btn-primary'
                data-toggle='modal'
                data-target='#wedding-image-app-modal'
              >
                View More
              </button>
              <div className='row justify-content-center icons'>
                <i className='fab fa-html5 fa-2x' />
                <i className='fab fa-css3-alt fa-2x' />
                <i className='fab fa-js-square fa-2x' />
                <i className='fab fa-react fa-2x' />
                <img
                  style={{
                    width: '24px',
                    height: '24px',
                    margin: '14px',
                    marginBottom: '0',
                    display: 'block',
                    padding: '0'
                  }}
                  src={firebase}
                  alt='Firebase'
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-auto mb-3">
          <div className="card border border-dark">
            <img
              alt="social-media-app"
              className="card-img-top"
              src={socialmedia}
            />
            <div className="card-body">
              <h2 className="card-title">Social Media React App</h2>
              <p className="card-text">
                A full-stack React social media app that is a clone of Facebook
                and Twitter.
                <br />
                Uses firebase for backend.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#social-media-app-modal"
              >
                View More
              </button>
              <div className="row justify-content-center icons">
                <i className="fab fa-html5 fa-2x" />
                <i className="fab fa-css3-alt fa-2x" />
                <i className="fab fa-js-square fa-2x" />
                <i className="fab fa-react fa-2x" />
                <img
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "14px",
                    marginBottom: "0",
                    display: "block",
                    padding: "0",
                  }}
                  src={firebase}
                  alt="Firebase"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-auto mb-3">
          <div className="card border border-dark">
            <img alt="it-logger" className="card-img-top" src={itLoggerImg} />
            <div className="card-body">
              <h2 className="card-title">IT Logger</h2>
              <p className="card-text">
                A full-stack React app to track IT department tasks and issues.
                <br />
                Uses mongoDB for database.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#it-logger-modal"
              >
                View More
              </button>
              <div className="row justify-content-center icons">
                <i className="fab fa-html5 fa-2x" />
                <i className="fab fa-css3-alt fa-2x" />
                <i className="fab fa-js-square fa-2x" />
                <i className="fab fa-node fa-2x" />
                <i className="fab fa-react fa-2x" />
                <img
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "14px",
                    marginBottom: "0",
                    display: "block",
                    padding: "0",
                  }}
                  src="https://s2.qwant.com/thumbr/0x0/6/a/8cd45a7849284a42d27044019e5525600a45f8b2a99b49e00e17b61ebfde75/logo.png?u=https%3A%2F%2Fraw.githubusercontent.com%2Freactjs%2Fredux%2Fmaster%2Flogo%2Flogo.png&q=0&b=1&p=0&a=1"
                  alt="Redux"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-auto mb-3">
          <div className="card border border-dark">
            <img
              alt="python-blackjack"
              className="card-img-top"
              src={pythonBlackjackImg}
            />
            <div className="card-body">
              <h2 className="card-title">BlackJack Python</h2>
              <p className="card-text">
                A BlackJack game coded using Python.
                <br />
                <br />
                Play on your Browser and just hit Run to start!
              </p>
              <a
                className="bjlink"
                href="https://replit.com/@Neveon/TealFrozenFormat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-primary">
                  Play on your Browser
                </button>
              </a>

              <a
                className="bjlink"
                href="https://github.com/Neveon/blackjack-python"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info">
                  See the Github Code
                </button>
              </a>
              <div className="row justify-content-center icons">
                <i className="fab fa-python fa-2x" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-auto mb-3">
          <div className="card border border-dark">
            <img
              alt="contact-keeper"
              className="card-img-top"
              src={contactKeeperImg}
            />
            <div className="card-body">
              <h2 className="card-title">Contact Keeper</h2>
              <p className="card-text">
                Create an account and store your contacts.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#contact-keeper-modal"
              >
                View More
              </button>
              <div className="row justify-content-center icons">
                <i className="fab fa-html5 fa-2x" />
                <i className="fab fa-css3-alt fa-2x" />
                <i className="fab fa-js-square fa-2x" />
                <i className="fab fa-node fa-2x" />
                <i className="fab fa-react fa-2x" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-auto mb-3">
          <div className="card border border-dark">
            <img alt="weather-app" className="card-img-top" src={weatherImg} />
            <div className="card-body">
              <h2 className="card-title">React Weather App</h2>
              <p className="card-text">
                Clone this repo and type in the city and country to receive the
                weather using an openweathermap API key.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#weather-app-modal"
              >
                View More
              </button>
              <div className="row justify-content-center icons">
                <i className="fab fa-html5 fa-2x" />
                <i className="fab fa-css3-alt fa-2x" />
                <i className="fab fa-js-square fa-2x" />
                <i className="fab fa-react fa-2x" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-auto mb-3">
          <div className="card border border-dark">
            <img
              alt="github-finder"
              className="card-img-top"
              src={githubFinderImg}
            />
            <div className="card-body">
              <h2 className="card-title">Github Finder</h2>
              <p className="card-text">
                A React app to search Github accounts by username and bio.
                <br />
                This app uses the Context API along with the useContext and
                useReducer hooks for state management.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#github-finder-modal"
              >
                View More
              </button>
              <div className="row justify-content-center icons">
                <i className="fab fa-html5 fa-2x" />
                <i className="fab fa-css3-alt fa-2x" />
                <i className="fab fa-js-square fa-2x" />
                <i className="fab fa-react fa-2x" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-auto mb-3">
          <div className="card border border-dark">
            <img alt="weather-app" className="card-img-top" src={rpsIMG} />
            <div className="card-body">
              <h2 className="card-title">Rock, Papers, Scissors React App</h2>
              <p className="card-text">
                Play Rock, Paper, Scissors against a Computer.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#rps-app-modal"
              >
                View More
              </button>
              <div className="row justify-content-center icons">
                <i className="fab fa-html5 fa-2x" />
                <i className="fab fa-css3-alt fa-2x" />
                <i className="fab fa-js-square fa-2x" />
                <i className="fab fa-react fa-2x" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-auto mb-3">
          <div className="card border border-dark">
            <img
              alt="netflix-landing-page"
              className="card-img-top"
              src={netflixImg}
            />
            <div className="card-body">
              <h2 className="card-title">Netflix Landing Page</h2>
              <p className="card-text">
                A Netflix clone using vanilla HTML, CSS, and JavaScript
              </p>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#netflix-modal"
              >
                View More
              </button>
              <div className="row justify-content-center icons">
                <i className="fab fa-html5 fa-2x" />
                <i className="fab fa-css3-alt fa-2x" />
                <i className="fab fa-js-square fa-2x" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-auto mb-3">
          <div className="card border border-dark">
            <img
              alt="url-shortner"
              className="card-img-top"
              src={urlShortnerImg}
            />
            <div className="card-body">
              <h2 className="card-title">URL Shortner Microservice</h2>
              <p className="card-text">
                &#8226;Enter a URL including <b>'https://www.'</b> (eg.
                https://www.github.com)
                <br />
                &#8226;Use the shortened URL to redirect (eg.
                [this_project_url]/api/shorturl/6903 redirects to
                https://www.youtube.com)
              </p>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#short-url-modal"
              >
                View More
              </button>
              <div className="row justify-content-center icons">
                <i className="fab fa-html5 fa-2x" />
                <i className="fab fa-css3-alt fa-2x" />
                <i className="fab fa-js-square fa-2x" />
                <i className="fab fa-node fa-2x" />
                <i className="fab fa-react fa-2x" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CNN Modal */}
            <div
        className="modal fade"
        id="cnn-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="cnn-modalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="cnn-modalTitle">
              Car Damage Classification using a Convolutional Neural Network
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center">
                <Youtube videoId={"fpTlkbKW6kQ"} className={"react-youtube"} />
              </div>
              <p>
                Mentored by Dr. Bhrigu Celly of California State University - Dominguez Hills (CSUDH),
                2 students and I worked together spending 20 hours every week learning about AI/ML
                and completing the Deep Learning Specialization by DeepLearning.AI.
                <br/><br/>
                In 8 weeks we successfully delivered a model, trained from a few hundred car images found off 
                search engines, that could classify if a car is damaged in the photo.
              </p>
            </div>
            <div className="modal-footer">
              <a
                href="https://github.com/Neveon/Car-Damage-CNN-Classification/blob/main/model.py"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info">
                  Github Code
                </button>
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* YT Playlist Modal */}
      <div
        className="modal fade"
        id="yt-playlist-app-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="yt-playlist-app-modalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="yt-playlist-app-modalTitle">
                YouTube Playlist Maker
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center">
                <Youtube videoId={"NRj21sCitvE"} className={"react-youtube"} />
              </div>

              <p>
                <b>0:00-0:26</b> Signing Up
              </p>
              <p>
                <b>0:27-0:51</b> Exploring another user's John Mayer Playlist
              </p>
              <p>
                <b>0:52-1:43</b> Creating a Playlist
              </p>
              <p>
                <b>1:44-2:17</b> Adding Video to Playlist
              </p>
              <p>
                <b>2:18-2:28</b> Removing Video from Playlist
              </p>
              <p>
                <b>2:29-2:45</b> Removing Playlist
              </p>
              <p>
                <b>2:45-2:49</b> Logging Out
              </p>
              <p>
                <b>2:49-3:38</b> Exploring Playlists while Logged Out
              </p>
            </div>
            <div className="modal-footer">
              <a
                href="https://playlist-16862.web.app/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-primary">
                  See it Online!
                </button>
              </a>
              <a
                href="https://github.com/Neveon/youtube-playlists"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info">
                  Github Code
                </button>
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Wedding Photo App Modal */}
      <div
        className="modal fade"
        id="wedding-image-app-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="wedding-image-app-modalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="wedding-image-app-modalTitle">
                Wedding Photo Upload App
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center">
                <Youtube videoId={"lm1X_zgGS_U"} className={"react-youtube"} />
              </div>
              <p>
                <b>Showcasing Site and Images Uploaded</b>
              </p>
              <p>
                This application was made to store images for free using
                Firebase.
              </p>
              <p>
                The largest challenge of this application was dealing with the
                data cap of loading all the images multiple times across
                multiple devices. 
                Another challenge was having the application automatically orient mobile pictures.
              </p>
            </div>
            <div className="modal-footer">
            <a
                href="https://john2019cynthia.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-primary">
                  See it Online!
                </button>
              </a>
              <a
                href="https://github.com/Neveon/wedding-image-gallery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info">
                  Github Code
                </button>
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Social Media App Modal */}
      <div
        className="modal fade"
        id="social-media-app-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="social-media-app-modalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="social-media-app-modalTitle">
                Social Media App Clone
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center">
                <Youtube videoId={"Bh1w6gEfr7U"} className={"react-youtube"} />
              </div>
              <p>
                <b>0:00-0:21</b> Signup
              </p>
              <p>
                <b>0:22-0:57</b> Edit Bio and showcasing other functions
              </p>
              <p>
                <b>0:58-1:35</b> Adding Post and commenting
              </p>
              <p>
                <b>1:36-1:58</b> Liking posts and seeing comments
              </p>
              <p>
                <b>1:59-2:24</b> Checking each profile
              </p>
              <p>
                <b>2:25-2:35</b> Deleting post and logging out
              </p>
            </div>
            <div className="modal-footer">
              <a
                href="https://social-media-4c489.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-primary">
                  See it Online!
                </button>
              </a>
              <a
                href="https://github.com/Neveon/firebase-frontend-socialmedia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info">
                  Github Code
                </button>
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* IT Logger Modal */}
      <div
        className="modal fade"
        id="it-logger-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="it-logger-modalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="it-logger-modalTitle">
                IT-Logger
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center">
                <Youtube videoId={"asSdnmP3pAM"} className={"react-youtube"} />
              </div>
              <p>
                <b>0:00-0:24</b> Search Function
              </p>
              <p>
                <b>0:25-0:42</b> Adding Technicians
              </p>
              <p>
                <b>0:44-0:56</b> Adding Logs
              </p>
              <p>
                <b>0:57-1:18</b> Edit IT Logs
              </p>
            </div>
            <div className="modal-footer">
              <a
                href="https://stormy-basin-17252.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-primary">
                  See it Online!
                </button>
              </a>
              <a
                href="https://github.com/Neveon/it-logger-with-database"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info">
                  Github Code
                </button>
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Keeper Modal */}
      <div
        className="modal fade"
        id="contact-keeper-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="contact-keeper-modalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="contact-keeper-modalTitle">
                Contact Keeper
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center">
                <Youtube videoId={"DmrjqEflAsw"} className={"react-youtube"} />
              </div>
              <p>
                <b>0:00-0:16</b> Invalid Login Credentials
              </p>
              <p>
                <b>0:17-0:41</b> Registering an Account
              </p>
              <p>
                <b>0:42-1:16</b> Adding Personal and Professional Contacts
              </p>
              <p>
                <b>1:17-1:25</b> Updating Contact
              </p>
              <p>
                <b>1:27-1:32</b> Contact Filtering
              </p>
              <p>
                <b>1:33-1:40</b> Deleting Contact and Logging Out
              </p>
            </div>
            <div className="modal-footer">
              <a
                href="https://immense-lake-47944.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-primary">
                  See it Online!
                </button>
              </a>
              <a
                href="https://github.com/Neveon/contact-keeper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info">
                  Github Code
                </button>
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Github Finder Modal */}
      <div
        className="modal fade"
        id="github-finder-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="github-finder-modalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="github-finder-modalTitle">
                Find Github Users
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center">
                <Youtube videoId={"7volNhu1yUM"} className={"react-youtube"} />
              </div>
              <p>
                <b>0:00-0:05</b> Searching my Personal Github Account (Neveon)
              </p>
              <p>
                <b>0:06-0:08</b> About Page
              </p>
              <p>
                <b>0:09-0:27</b> Profile Details
              </p>
              <p>
                <b>0:28-0:30</b> Clearing Searched Users
              </p>
              <p>
                <b>0:31-0:48</b> Search Functionality includes User's Bio as
                well
              </p>
            </div>
            <div className="modal-footer">
              <a
                href="https://githubfinder-nev.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-primary">
                  See it Online!
                </button>
              </a>
              <a
                href="https://github.com/Neveon/github-finder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info">
                  Github Code
                </button>
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* URL Shortner Modal */}
      <div
        className="modal fade"
        id="short-url-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="short-url-modalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="short-url-modalTitle">
                URL Shortner Microservice
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center">
                <Youtube videoId={"2GQaZ8h5-Lw"} className={"react-youtube"} />
              </div>
              <p>
                <b>0:00-0:27</b> Invalid URLs
              </p>
              <p>
                <b>0:28-0:36</b> Entering Valid URL
              </p>
              <p>
                <b>0:37-0:52</b> Using shortURL to redirect to Github
              </p>
            </div>
            <div className="modal-footer">
              <a
                href="https://neveon-url-short.glitch.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-primary">
                  See it Online!
                </button>
              </a>
              <a
                href="https://github.com/Neveon/url-shortner-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info">
                  Github Code
                </button>
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Rock, Papers, Scissors React App Modal */}
      <div
        className="modal fade"
        id="rps-app-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="rps-app-modalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="rps-app-modalTitle">
                Rock, Papers, Scissors React App
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center">
                <Youtube videoId={"UHM1nLUxtVQ"} className={"react-youtube"} />
              </div>
            </div>
            <div className="modal-footer">
              <a
                href="https://codepen.io/neveon/full/jdwyBJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-primary">
                  See it Online
                </button>
              </a>
              <a
                href="https://codepen.io/neveon/pen/jdwyBJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info">
                  See the Code
                </button>
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Weather App Modal */}
      <div
        className="modal fade"
        id="weather-app-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="weather-app-modalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="weather-app-modalTitle">
                Weather App
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center">
                <Youtube videoId={"EFfQAeiGMCU"} className={"react-youtube"} />
              </div>
              <p>
                <b>0:00-0:02</b> Loading Screen
              </p>
              <p>
                <b>0:03-0:12</b> Getting New York, US Weather
              </p>
              <p>
                <b>0:13-0:19</b> Getting Houston, US Weather
              </p>
              <p>
                <b>0:20-0:35</b> Attempting to Get Weather without Entered
                Fields
              </p>
            </div>
            <div className="modal-footer">
              <a
                href="https://github.com/Neveon/weather-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info">
                  Github Code
                </button>
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* NETFLIX Landing Page Modal */}
      <div
        className="modal fade"
        id="netflix-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="netflix-modalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="netflix-modalTitle">
                Netflix Landing Page
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center">
                <Youtube videoId={"47croETzFIQ"} className={"react-youtube"} />
              </div>
            </div>
            <div className="modal-footer">
              <a
                href="https://codepen.io/neveon/full/GaOXpQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-primary">
                  See it Online!
                </button>
              </a>
              <a
                href="https://codepen.io/neveon/pen/GaOXpQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info">
                  See the Code!
                </button>
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cardITLogger;
