import React from 'react';
import Data from './components/Data';
import './App.scss';

function App() {

  return (
    <div className="container">
      {
        Data.map(card => {
          return (
            <div className={"card"} key={card.id}>
              <div className={"card__gallery"}>
                <img src={card.img1} alt="" />
                <img src={card.img2} alt="" />
              </div>
              <div className={"card__controls"}>
                <div className={"checkbox"}></div>
                <div className={"elipsis-icon"}></div>
                
              </div>
              <div className={"card__profile"}>
                <a href="/" className={"profile-link"}>
                  <div className={"profile-avatar"}>
                    <img src={card.avatar} alt="" width="60" height="60" />
                  </div>
                  <p className={"profile-name"}>{card.name}</p>
                  <p className={"profile-description"}>{card.descr}</p>
                  <p className={"profile-content"}>{card.content}</p>
                  <hr />
                </a>
              </div>
              <div className={"card__socials"}></div>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
