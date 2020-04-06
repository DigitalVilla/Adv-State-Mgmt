import React, { Component } from 'react';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';
import './Application.css';

const items = {
    key000: { value: 'Pants', packed: false },
    key001: { value: 'Jacket', packed: false },
    key002: { value: 'iPhone Charger', packed: false },
    key003: { value: 'MacBook', packed: false },
    key004: { value: 'Sleeping Pills', packed: true },
    key005: { value: 'Underwear', packed: false },
    key006: { value: 'Hat', packed: false },
    key007: { value: 'T-Shirts', packed: false },
    key008: { value: 'Belt', packed: false },
    key008: { value: 'Passport', packed: true },
    key009: { value: 'Sandwich', packed: true },
};
class Application extends Component {
    state = { items }
    itemKey = 9

    toggleItem = (itemId) => {
        this.setState((state) => {
            state.items[itemId].packed = !state.items[itemId].packed
            return { state }
        })
    }

    unpackAll = () => {
        this.setState((state) => {
            for (const key in state.items) {
                if (state.items.hasOwnProperty(key)) {
                    state.items[key].packed = false
                }
            }

            return { state }
        })
    }

    removeItem = (itemId) => {
        this.setState((state) => {
            delete state.items[itemId];
            return { state }
        })
    }

    addItem = (value) => {
        let id = this.itemKey++ < 100 ? '0' + this.itemKey : this.itemKey;
        this.setState((state) => {
            state.items[`key${id}`] = { value, packed: false }
            return { state }
        })
    }

    updateItem = (value, itemId) => {
        this.setState((state) => {
            state.items[itemId].value = value
            return { state }
        })
    }

    mapItems = () => {
        const { items } = this.state;
        const unPacked = [];
        const packed = [];

        for (const key in items) {
            if (items.hasOwnProperty(key)) {
                const obj = {
                    id: key,
                    value: items[key].value,
                    packed: items[key].packed,
                }
                if (obj.packed) {
                    packed.push(obj)
                } else {
                    unPacked.push(obj)
                }
            }
        }

        return [unPacked, packed]
    }

    render() {
        const [unPackedItems, packedItems] = this.mapItems();

        return (
            <div className="Application">
                <NewItem onSubmit={this.addItem} />
                <CountDown />
                <Items title="Unpacked Items" items={unPackedItems} onUpdate={this.updateItem} onToggle={this.toggleItem} onRemove={this.removeItem} />
                <Items title="Packed Items" items={packedItems} onUpdate={this.updateItem} onToggle={this.toggleItem} onRemove={this.removeItem} />
                <button className="button full-width" onClick={this.unpackAll}>Mark All As Unpacked</button>
            </div>
        );
    }
}

export default Application;