import EventEmitter from 'events'
import AppDispatcher from './AppDispatcher'

const defaultItems = {
    item000: { id:"item000", value: 'Pants', packed: false },
    item001: { id:"item001", value: 'Jacket', packed: false },
    item002: { id:"item002", value: 'iPhone Charger', packed: false },
    item003: { id:"item003", value: 'MacBook', packed: false },
    item004: { id:"item004", value: 'Sleeping Pills', packed: true },
    item005: { id:"item005", value: 'Underwear', packed: false },
    item006: { id:"item006", value: 'Hat', packed: false },
    item007: { id:"item007", value: 'T-Shirts', packed: false },
    item008: { id:"item008", value: 'Belt', packed: false },
    item008: { id:"item008", value: 'Passport', packed: true },
    item009: { id:"item009", value: 'Sandwich', packed: true },
};

class ItemStore extends EventEmitter {
    constructor() {
        super()
        this.store = defaultItems

        AppDispatcher.register((action) => {
            switch (action.type) {
                case 'ADD_ITEM':
                case 'UPDATE_ITEM':
                case 'TOGGLE_ITEM':
                    this.updateItem(action.item)
                    break;
                case 'REMOVE_ITEM':
                    this.removeItem(action.item)
                    break;
                case 'UNPACK_ALL_ITEMS':
                    this.unpackAll()
                    break;
            }
        })
    }

    updateItem = (item) => {
        this.store[item.id] = item
        this.emit('change')
    }

    removeItem = (item) => {
        delete this.store[item.id];
        this.emit('delete')
    }

    unpackAll = () => {
        for (const key in this.store) {
            if (this.store.hasOwnProperty(key)) {
                this.store[key].packed = false
            }
        }
        this.emit('change')
    }

    getStore() {
        return this.store
    }
}

export default new ItemStore()