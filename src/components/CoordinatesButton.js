// Code CoordinatesButton Component Here
import React from 'react'


export default class CoordinatesButton extends React.Component{

  render(){
    return(
      <button onClick={this.handleClick}></button>
    )
  }

  handleClick = (e) => {
    const coordinates = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }

}