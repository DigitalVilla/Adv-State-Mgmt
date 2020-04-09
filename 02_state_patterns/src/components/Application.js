import React, { Component } from 'react';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';
import './Application.css';
import ItemsStore from '../flux/ItemStore'
import { unpackAll } from '../flux/actions'

class Application extends Component {
    state = {items:ItemsStore.getStore()}

    componentDidMount() {
        ItemsStore.on('change', this.updateState)
        ItemsStore.on('delete', this.resetState)
    }

    componentWillUnmount() {
        ItemsStore.off('change', this.updateState)
        ItemsStore.off('delete', this.resetState)
    }

    updateState = () => {
        this.setState(()=>({items:ItemsStore.getStore()}))
    }

    resetState = () => {
        this.setState(()=>({items: null}), this.updateState)
    }

    shouldComponentUpdate(prevProps, prevState) {
        return prevState.items 
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
                <NewItem />
                <CountDown />
                <Items title="Unpacked Items" items={unPackedItems}/>
                <Items title="Packed Items" items={packedItems}/>
                <button className="button full-width" onClick={unpackAll}>
                    Mark All As Unpacked
                </button>
            </div>
        );
    }
}

export default Application;