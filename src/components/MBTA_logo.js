import React, { Component } from 'react';

export default class MBTALogo extends Component {
  constructor(props){
    super(props);
    this.state = {
      line: props.line || null,
      logoColor: "#000"
    }
  }

  componentWillReceiveProps(nextProps){
    let lineColors = {
      Red: '#C80000',
      Orange: '#FE6700',
      Green: '#11773C',
      'Green-B': '#11773C',
      'Green-C': '#11773C',
      'Green-D': '#11773C',
      'Green-E': '#11773C',
      Blue: '#00009C',
      Silver: '#8D8787',
      Rail: '#B60EA0',
      Boats: '#0066FF'
    }
    this.setState({line: nextProps.line, logoColor: lineColors[nextProps.line]})
  }

  render () {
    console.log(this.state.logoColor)
    return(
      <React.Fragment>
        <svg viewBox="500 0 1000 1000" width="100vw" height="100vw">
          <svg className = "logo" xmlns="http://www.w3.org/2000/svg" version="1.0"  >
            <circle cx="250" cy="250" r="239" stroke={`${this.state.logoColor}`} strokeWidth="22" fill="#fff"/>
            <path d="M92,138.5h316v79.5h-118.25v194h-79.5v-194h-118.25z" fill= {`${this.state.logoColor}`}/>
          </svg>
        </svg>
      </React.Fragment>
    )
  }
}
