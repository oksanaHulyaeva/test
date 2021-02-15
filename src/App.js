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
              <div className={"card__controls"}>
                <div className={"checkbox"}></div>
                <div className={"elipsis-icon"}></div> 
              </div>
              <div className={"card__gallery"}>
                <div className={"gallery-handler"}></div>
                <img src={card.img1} alt="" />
                <img src={card.img2} alt="" />
              </div>

              <div className={"card__profile"}>
                <a href="/" className={"profile-link"}>
                  <div className={"profile-avatar"}>
                    <img src={card.avatar} alt=""/>
                  </div>
                  <p className={"profile-name"}>{card.name}</p>
                  <p className={"profile-description"}>{card.descr}</p>
                  <p className={"profile-content"}>{card.content}</p>
                  <hr />
                </a>
              </div>
              <div className={"card__socials"}>
                {
                  card.socials.map(social => {
                    return (
                      <div className={'social_item'} key={social.id}>
                        <div className={`${social.name}-icon social-icon`}></div>
                        <p>{social.followers}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
