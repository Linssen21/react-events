import React from 'react'

const HomePage = (props) => {
  // get the props history
  return (
    <div>
          <div className="ui inverted vertical masthead center aligned segment">
            <div className="ui text container">
              <h1 className="ui inverted stackable header">
                <img
                  className="ui image massive"
                  src="/assets/images/logo.png"
                  alt="logo"
                />
                <div className="content">React Events</div>
              </h1>
              <h2>Do whatever you want to do</h2>
              <div onClick={() => props.history.push('/events')} className="ui huge white inverted button">
                Get Started
                <i className="right arrow icon" />
              </div>
            </div>
          </div>
        </div>
  )
}

export default HomePage
