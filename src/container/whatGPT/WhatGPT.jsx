import React from 'react'
import { Feature } from '../../component';
import './whatGPT.css';
const WhatGPT = () => {
  return (
    <div className='gpt__whatgpt section__margin' id='wgpt'>
      <div className="gpt__whatgpt-features">
          <Feature title="What is GPT" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ad placeat quidem. Impedit officiis cumque molestias. Facere quidem iusto libero voluptas perspiciatis fuga provident ducimus!"/>
      </div>
      <div className="gpt__whatgpt-heading">
        <h1 className='gradient__text'>
          The Possibilities are beyond your imagination
        </h1>
        <p>Explore The library</p>
      </div>
      <div className="gpt__whatgpt-container">
        <Feature title="ChatBox" text="Impedit officiis cumque molestias. Facere quidem iusto libero voluptas perspiciatis fuga provident ducimus!" />
        <Feature  title="Knowledgebase" text="Impedit officiis cumque molestias. Facere quidem iusto libero voluptas perspiciatis fuga provident ducimus!"/>
        <Feature  title="Education" text="Impedit officiis cumque molestias. Facere quidem iusto libero voluptas perspiciatis fuga provident ducimus!" />
      </div>
    </div>
  )
}

export default WhatGPT