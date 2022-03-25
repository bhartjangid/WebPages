import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt__header section__padding' id='home'>
      <div className="gpt__header-content">
        <h1 className="gradient__text">Let's Build Something amazing with GPT</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad reiciendis eaque asperiores enim harum hic numquam, quidem cum ullam nam quas ea sunt? Error inventore beatae libero, placeat doloribus suscipit voluptas ullam incidunt itaque.</p>
        <div className="gpt__header-content__input">
          <input type="email" placeholder="Your Email Address"/>
          <button type='button'>GetStarted</button>
        </div>
        <div className="gpt__header-content__people">
          <img src={people} alt="alt" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quas.</p>
        </div>
      </div>
        <div className="gpt__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header