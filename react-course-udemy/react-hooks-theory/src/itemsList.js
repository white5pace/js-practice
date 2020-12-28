import React, {useState, useEffect} from 'react';

const ItemsList = ({getItems}) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    console.log('render')
    const newItems = getItems(42)
    setItems(newItems)
  }, [getItems])
  return (
    <ul>
      { items.map(i => <li key={i}>{i}</li>) }
    </ul>
  );
};

export default ItemsList;