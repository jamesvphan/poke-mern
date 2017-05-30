import React, { Component } from 'react'

const Stats = (props) => {
  return (
    <div>
      {
        props.stats.map((stat, index) => {
          return <p key={index}>{stat.stat.name}</p>
        })
      }
    </div>
  )
}

export default Stats
