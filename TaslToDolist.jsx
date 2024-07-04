import { useState } from "react";
import "./TodoStyling.css"

const TaskToDolist = () => {
  const [items, setItems] = useState([]);

  function onRemoveItem(itemToRemove) {
    const newItems = items.filter((item) => item !== itemToRemove);
    setItems(newItems);
  }

  function onToggleCompleted(itemToToggle) {
    const newItems = items.map((item) => 
      item === itemToToggle ? { ...item, completed: !item.completed } : item
    );
    setItems(newItems);
  }

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItem = { text: input.value, completed: false };
    setItems([...items, newItem]);
    form.reset();
  }

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="item"
          placeholder="Add a new item"
        />
        <button>Add</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <Item 
            onRemoveItem={onRemoveItem} 
            onToggleCompleted={onToggleCompleted} 
            key={item.text + index} 
            item={item} 
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onRemoveItem, onToggleCompleted }) {
  return (
    <li style={{ textDecoration: item.completed ? "line-through" : "none" }}>
      {item.text}<br/>
      <button className="delete" onClick={() => onRemoveItem(item)}>
        Delete
      </button>
      <button className="completed" onClick={() => onToggleCompleted(item)}>
        {item.completed ? "Undo" : "Completed"}
      </button>
    </li>
  );
}

export default TaskToDolist;
