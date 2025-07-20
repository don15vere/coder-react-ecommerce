import './ItemList.css';
import Item from './Item';
import React from 'react';

function ItemList({ items }) {
  return (
    <div className="item-list">
        {items.map((item) => (
            <Item key={item.id} item={item} />
        ))}
    </div>
  );
}

export default React.memo(ItemList);