import AppDispatcher from './AppDispatcher'
let itemKey = 9

export const addItem = (value) => {
    let id = itemKey++ < 100 ? '0' + itemKey : itemKey;
    AppDispatcher.dispatch({
        type: 'ADD_ITEM',
        item: { id: `item${id}`, value, packed: false }
    })
}

export const updateItem = (item, value) => {
    AppDispatcher.dispatch({
        type: 'UPDATE_ITEM',
        item: { ...item, value }
    })
}

export const toggleItem = (item) => {
    AppDispatcher.dispatch({
        type: 'TOGGLE_ITEM',
        item: { ...item, packed: !item.packed }
    })
}

export const removeItem = (item) => {
    AppDispatcher.dispatch({
        type: 'REMOVE_ITEM',
        item
    })
}

export const unpackAll = () => {
    AppDispatcher.dispatch({
        type: 'UNPACK_ALL_ITEMS'
    })
}
