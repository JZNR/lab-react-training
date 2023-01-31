import { useState } from 'react';

function ClickablePicture(props) {

  const [img, setImg] = useState(true);

  const toggleImg = () => {
    setImg(!img);
  };

  return (
    <div>
      <img onClick={toggleImg} src= {img ? props.img : props.imgClicked}/>
    </div>
  );
}

export default ClickablePicture;