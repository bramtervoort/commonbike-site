import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import Radium, { StyleRoot } from 'radium';
import R from 'ramda';

// Import components
import CommonBikeLogo from '../CommonBikeLogo/CommonBikeLogo.jsx'
import RaisedButton from '../RaisedButton/RaisedButton.jsx';

class Landing extends Component {

  constructor(props) {
    super(props);

    this.state = { activeSlide: 0 }
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.base).style.display = 'flex';
  }

  login() { FlowRouter.go('login') }

  render() {
    return (
      <div style={s.base} ref="base">

        <CommonBikeLogo style={s.logo} />

        <StyleRoot>
          <p style={s.introText}>
            Welkom bij het nieuwe fiets-deel-systeem van Nederland. Wij maken bike sharing leuk en gemakkelijk. Ons doel: overal en altijd een fiets voor iedereen.
          </p>
        </StyleRoot>

        <div style={s.bottomWrapper}>
          <p>
            <a style={s.smallText} href="/join">euhm, maar hoe werkt dat dan?</a>
          </p>

          <RaisedButton onClick={this.login}>
            Meld je aan voor de pilot
          </RaisedButton>
        </div>

      </div>
    );
  }
}

var s = {
  base: {
    fontSize: 'default',
    lineHeight: 'default',
    padding: '40px 20px 0 20px',
    background: '#00d0a2',
    margin: '0 auto',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '568px',
  },
  logo: {
    height: '100px'
  },
  introText: {
    maxWidth: '320px',
    padding: '20px',
    margin: '0 auto',
    fontWeight: '500',
    fontSize: '1.45em',
    lineHeight: '1.3em',
    '@media (min-width: 700px)': {
      maxWidth: '500px'
    }
  },
  smallText: {
    color: '#fff',
    fontSize: '0.8em',
    fontWeight: '500',
  }
}

export default createContainer((props) => {
  return {
    currentUser: Meteor.user()
  };
}, Radium(Landing));
