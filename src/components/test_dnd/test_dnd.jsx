import React from 'react';
import DraggableAnimal from './draggable-animal';

//import styles from 'test_dnd.module.css';

const listImages = [
    {
        id: 1,
        content: '🦔',
    },
    {
        id: 2,
        content: '🦒',
    },
    {
        id: 3,
        content: '🐜',
    },
]

export default function DndAnimal () {

  const [elements, setElements] = React.useState([]);

  React.useEffect( () => {
    setElements([
      ...listImages
    ])
  }, []);

  return (

  <section>
    {
      elements.map( (element) => <DraggableAnimal key={element.id} content={element.content} /> )
    }
  </section>

  )
}
