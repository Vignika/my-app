//race
import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('button clicked')
    }
  return (
    <button onClick={clickHandler}>click</button>
  )
}

export default FunctionClick