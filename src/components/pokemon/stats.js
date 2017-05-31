import React, { Component } from 'react'

const Stats = (props) => {
  return (
    <div>
      {
        props.stats.map((stat, index) => {
          let formattedStat = stat.stat.name.split('-').map(word => {
            return word[0].toUpperCase() + word.slice(1)
          }).join(" ")
          return(
            <div key={index}>
              <div className='progress'>
                <span id="progress">{`${formattedStat}: ${stat.base_stat}%`}</span>
                <div
                  className='progress-bar progress-bar-success'
                  role='progressbar'
                  aria-valuetext="helo"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: `${stat.base_stat}%`}}
                >
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Stats
