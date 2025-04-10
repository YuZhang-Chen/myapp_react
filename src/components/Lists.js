import { useState } from "react";

const Lists = () => {
    const [shoppingList, setShoppingList] = useState([

    ]);
    const [newItem, setNewItem] = useState('');

    const addItem = () => {
        if (newItem.trim() !== '') {
            setShoppingList([...shoppingList, { name: newItem, quantity: 1 }]);
            setNewItem('');
        }
    };

    const removeItem = (index) => {
        const updatedList = [...shoppingList];
        updatedList.splice(index, 1);
        setShoppingList(updatedList);
    };

    const increaseQuantity = (index) => {
        const updatedList = [...shoppingList];
        updatedList[index].quantity += 1;
        setShoppingList(updatedList);
    };

    const decreaseQuantity = (index) => {
        const updatedList = [...shoppingList];
        if (updatedList[index].quantity > 1) {
            updatedList[index].quantity -= 1;
            setShoppingList(updatedList);
        }
    };

    return (
        <div>
            <h1>購物清單</h1>
            <div style={{ margin: '10px 0' }}>
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="輸入物品名稱"
                />
                <button onClick={addItem}>添加物品</button>
            </div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {shoppingList.map((item, index) => (
                    <li key={index} style={{ margin: '8px 0', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}>
                        <span style={{ marginRight: '10px' }}>{item.name}</span>
                        <span style={{ marginRight: '10px' }}>數量: {item.quantity}</span>
                        <button onClick={() => increaseQuantity(index)}>+</button>
                        <button onClick={() => decreaseQuantity(index)}>-</button>
                        <button onClick={() => removeItem(index)} style={{ marginLeft: '10px' }}>刪除</button>
                    </li>
                ))}
            </ul>
            <div>
                <h2>確認清單</h2>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {shoppingList.map((item, index) => (
                        <li key={index} style={{ margin: '4px 0' }}>
                            {item.name} x {item.quantity}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export { Lists };