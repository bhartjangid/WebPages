import React from 'react'
import { Feature } from '../../component';
import './features.css';

const featuresData = [
  {
    title: 'Improve and distrusts insterly',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo harum voluptate dolore amet architecto blanditiis placeat culpa necessitatibus ab! Reprehenderit numquam quasi nam molestiae!'
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo harum voluptate dolore amet architecto blanditiis placeat culpa necessitatibus ab! Reprehenderit numquam quasi nam molestiae!'
  },
 {
    title: 'Improve and insterly 3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo harum voluptate dolore amet architecto blanditiis placeat culpa necessitatibus ab! Reprehenderit numquam quasi nam molestiae!'
  },
  {
    title: 'Improve and distrusts',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo harum voluptate dolore amet architecto blanditiis placeat culpa necessitatibus ab! Reprehenderit numquam quasi nam molestiae!'
  },
]

const Features = () => {
  return (
    <div className='gpt__features section__padding'>
      <div className="gpt__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future today & Make it Happen.</h1>
        <p>Request Early Access to Get Started.</p>
      </div>
      <div className="gpt__features-container">
        {featuresData.map((item, index) => {
          return <Feature  title={item.title} text={item.text} key={item.title + index}/>
        })}
      </div>
    </div>
  )
}

export default Features