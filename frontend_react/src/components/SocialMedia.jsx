import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { BsEnvelopeFill } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsLinkedin />
        </div>
        <div>
            <BsGithub />
        </div>
        <div>
            <BsEnvelopeFill />
        </div>
    </div>
  )
}

export default SocialMedia