import React, { useState } from 'react';
import './App.css';

//component is just a JavaScript function that lets something be rendered on the screen!
function App() {
  return <div>
      <Folder name="Desktop">
        <Folder name="Music">
          <File name="all_star.mp4"></File>
          <File name="express_file.mp4"></File>
        </Folder>
        <File name="dogs.jpeg"/>
        <File name="cats.png"/>
      </Folder>
      <Folder name="Applications"/>
    </div>

}
//props are an argument/object with key-value pairs
const Folder = (props) => {
  const [ isOpen, setIsOpen ] = useState(true);
  const { name, children } = props;
  const direction = isOpen ? 'down' : 'right';

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return <div>
      <span onClick={handleClick}>
        <i className="blue folder icon"></i>
        <i className={`caret ${direction} icon`}></i>
      </span>
      {name}
      <div style={{ marginLeft: '17px' }}>
        {isOpen ? children : null}
      </div>
    </div>
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp4: 'headphones',
    jpeg: 'file image',
    png: 'file image outline',
  }

  return <div><i className={`${fileIcons[fileExtension]} icon`}></i>
  {name}
  </div>
};

export default App;
