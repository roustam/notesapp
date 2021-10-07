import React from "react";
import '../car.css'

const Car = () => {
  const carObj = [
    {
      'picUrl': 'https://picsum.photos/200',
      'caption': 'something1',
      'height':0,
    },
    {
      'picUrl': 'https://picsum.photos/200',
      'caption': 'something2',
      'height':0,
    },
    {
      'picUrl': 'https://picsum.photos/200',
      'caption': 'something3',
      'height':0,
    },
    {
      'picUrl': 'https://picsum.photos/200',
      'caption': 'something3',
      'height':0,
    }
  ]
  let cardHeight=0;
  const onClickHandler = () => {
    console.log('test')
  }
  return (
    <div className={'car-container'}>
      {carObj.map((el) => {
        cardHeight += 45
        return (
          <div className={'card slide-1'} style={{'top':cardHeight+'px'}} >
            <span >{el.caption} {cardHeight}</span>
            <img onClick={() => onClickHandler()} src={el.picUrl}/>
          </div>)
      }
      )}
    </div>
  )
}

export default Car