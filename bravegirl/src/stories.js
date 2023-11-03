import React, { Component } from 'react';
import trialpic from './assets/images/trialpic.jpg';
import Stories from './storiesui';

class Story extends Component {
  render () {
    return (
      <div className='container-fluid d-flex justify-content-center'>
        <div className='row'>
          <div className='col-md-4'>
            <Stories imgsrc={trialpic} title='title1' />
          </div>
          <div className='col-md-4'>
            <Stories imgsrc={trialpic} title='title2' />
          </div>
          <div className='col-md-4'>
            <Stories imgsrc={trialpic} title='title3' />
          </div>
        </div>
      </div>
    );
  }
}

export default Story;
