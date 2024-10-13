import React from 'react';
import styles from './draggable-animal.module.css';

const DraggableAnimal = (props) => {

  const [isElementDrag, setElementDrag] = React.useState(false);
  const [cursorPos, setCursorPos] = React.useState({x:0, y:0});
  const [elemPos, setElemPos] = React.useState({});
  const elementRef = React.useRef();

  React.useEffect( () => {
    if (elementRef.current) {
//      console.log('elementRef.current', elementRef.current)
//      elementRef.current.style.transform = `translate(${elemPos.x}px, ${elemPos.y}px)`

        elementRef.current.style.left = `${elemPos.x}px`;
        elementRef.current.style.top = `${elemPos.y}px`;
    }
  }, [elemPos]);


    React.useEffect( () => {
      document.body.addEventListener("mousemove", handleMouseMove);
      document.body.addEventListener("mouseup", handleMouseUp);
      return() => { 
        document.body.removeEventListener("mousemove", handleMouseMove);
        document.body.removeEventListener("mouseup", handleMouseUp);
      }
    }, [] )


  const handleMouseDown = (e) => {
    setElementDrag(true);

    console.log(e)
    console.log( "x=", e.clientX - e.target.getBoundingClientRect().left, "y=", e.clientY - e.target.getBoundingClientRect().top )
    console.log( "e.clientX=", e.clientX, "e.clientY=", e.clientY )

    setCursorPos({
      ...cursorPos,
      x: e.clientX - e.target.getBoundingClientRect().left,
      y: e.clientY - e.target.getBoundingClientRect().top
    });
    
  };

  const handleMouseMove = (e) => {
    if (!isElementDrag) return;
    // Отменим поведение по умолчанию и всплытие
//    e.stopPropagation();
//    e.preventDefault();

        console.log( "x=", e.clientX - cursorPos.x, "y=", e.clientY - cursorPos.y )
        console.log( "e.clientX=", e.clientX, "e.clientY=", e.clientY )
        console.log( "e.pageY=", e.pageY, "e.pageX=" , e.pageX )

    setElemPos({
      ...elemPos,
      x: e.pageX - cursorPos.x ,
      y: e.pageY - cursorPos.y
    });
  }

  const handleMouseUp = () => {
    setElementDrag(false);
  };

  return (
    <div 
      ref={elementRef}
      onMouseDown={handleMouseDown}
      className={styles.animalElement}
    >
      {props.content}
    </div>
  )
};

export default DraggableAnimal;
