import React,{ useState} from 'react'
export default function Add_item(){
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    function handleItem(){
        if(newItem.trim() !== ''){
            setItems([...items,{content : newItem,isCompleted : false}]);
            setNewItem('');
        }
    }

    function handleToggleComplete(index){
        const updatedItems = [...items];
        updatedItems[index].isCompleted = !updatedItems[index].isCompleted;
        setItems(updatedItems)
    }
    function Delete(index){
        const updatedItems = [...items];
        updatedItems.splice(index,1);
        setItems(updatedItems);
    }



    const ListItem = items.map((item,index) =>
        <li key = {index}>
            {/*<span style = {{textDecoration: item.isCompleted ? 'line-through' : 'none'}}>*/}
            {/*    {item.content}*/}
            {/*</span>*/}
            <button onClick ={() => handleToggleComplete(index)} style = {{textDecoration: item.isCompleted ? 'line-through' : 'none'}} >
                {item.content}:{item.isCompleted ? 'Hoan thanh' : 'Chua hoan thanh'}
            </button>
            <button onClick={() => Delete(index)}>
                Xóa
            </button>
        </li>
    );
    return(
        <>
            <ul>{ListItem}</ul>
            <input
                type = "text"
                value = {newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={handleItem}>
                Add item
            </button>
        </>
    )
}