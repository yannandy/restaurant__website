import React from 'react';

import {images} from '../../constants'
import { SubHeading } from '../../components';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];
const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direction)=>{
    const {current} = scrollRef;
    if(direction==='left'){
      current.scrollLeft -=300;
    }else{
      current.scrollLeft +=300;
    }
  }
  return(
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram"/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color: '#aaa', marginTop:'2rem'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cupiditate sunt sequi.</p>
        <button type='button' className='custom__button'>View More</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((galleryImage)=>(
            <div className='app__gallery-images_card flex__center'>
              <img src={galleryImage} alt="gallery Image" />
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrow'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>scroll('right')}/>

        </div>
      </div>
    </div>
    );
}

export default Gallery;
