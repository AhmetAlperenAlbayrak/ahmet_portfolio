import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { BsEnvelopeFill } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://www.linkedin.com/in/ahmetalperenalbayrak/" target="_blank" rel='noreferrer' style={{paddingTop:'0.2rem'}}><BsLinkedin /></a>
        </div>
        <div>
            <a href="https://github.com/AhmetAlperenAlbayrak" target="_blank" rel='noreferrer' style={{paddingTop:'0.2rem'}} ><BsGithub /></a>
        </div>
        <div>
            <a href="mailto:ahmet.albayrak@cloudtalk.io" target="_blank" rel='noreferrer' style={{paddingTop:'0.2rem'}} ><BsEnvelopeFill /></a>
        </div>
    </div>
  )
}

export default SocialMedia