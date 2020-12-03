import React, { useState } from "react";
import ListItem from './Listitem.js';
import "./../styles/App.css";

function App() {
const [items, setItems] = useState([]);
const [newItem, setNewItem] = useState("");
const addItem = () => {
	items.push(newItem);
	setItems([...items]);
    setNewItem("");
}
const newItemChanged = (evt) => {
	setNewItem(evt.target.value);
}
const editHandler = (editedValue,itemIdx) => {
	items[itemIdx] = editedValue;
	setItems([...items])
  }
const deleteHandler = (itemIdx) => {
  items.splice(itemIdx, 1);
  setItems([...items])
}
	return (
	 <div id="main">
	<textarea id="task" onChange={newItemChanged} placeholder="New Item" value={newItem}></textarea>
	<button id="btn" onClick={addItem} 
	disabled={newItem.trim().length === 0}>Add Item</button>
	{items.map((item ,idx) => (
		<ListItem item={item} 
		key={`${item}_${idx}`} 
		idx={idx} 
		editHandler={editHandler} 
		deleteHandler={deleteHandler}/>
		))}
	 </div>
	);

}


export default App;