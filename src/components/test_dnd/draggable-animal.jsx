import React from 'react';
import styles from './draggable-animal.module.css';

const DraggableAnimal = (props) => {

  const [isElementDrag, setElementDrag] = React.useState(false);
  const [cursorPos, setCursorPos] = React.useState({});
  const [elemPos, setElemPos] = React.useState({});
  const elementRef = React.useRef();

  React.useEffect( () => {
    if (elementRef.current) {
//      console.log('elementRef.current', elementRef.current)
      elementRef.current.style.transform = `translate(${elemPos.x}px ${elemPos.y}px)`
    }
  }, [elemPos]);


  const handleMouseDown = (e) => {
    setElementDrag(true);

    setCursorPos({
      ...cursorPos,
      x: e.clientX - e.target.getBoundingClientRect().left,
      y: e.clientY - e.target.getBoundingClientRect().top
    });
  };

  const handleMouseMove = (e) => {
    if (!isElementDrag) return;
    // Отменим поведение по умолчанию и всплытие
    e.stopPropagation();
    e.preventDefault();

    setElemPos({
      ...elemPos,
      x: e.clientX - cursorPos.x,
      y: e.clientY - cursorPos.y
    });
  }

  const handleMouseUp = () => {
    setElementDrag(false);
  };

  return (
    <div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      className={styles.animalElement}
    >
      {props.content}
    </div>
  )
};

export default DraggableAnimal;
