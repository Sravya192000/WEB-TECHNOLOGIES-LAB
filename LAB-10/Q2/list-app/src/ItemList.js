import React from "react";

function ItemList({ items, removeItem }) {
  return (
    <div>
      {/* Empty List Handling */}
      {items.length === 0 ? (
        <p>No items available</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.text}
              <button onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemList;