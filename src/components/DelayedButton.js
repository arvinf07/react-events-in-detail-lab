// Code DelayedButton Component Here

import React from 'react'


export default class DelayedButton extends React.Component{

  render(){
    return(
      <button onClick={(e) => this.delay(e)}></button>
    )
  }

  delay = (e) => {
    e.persist()
    window.setTimeout(() => {
      return this.props.onDelayedClick(e)
    }, this.props.delay)
  }
  
}