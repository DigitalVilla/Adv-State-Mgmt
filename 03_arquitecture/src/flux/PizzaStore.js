import AppDispatcher from './AppDispatcher'
import EventEmitter from 'events'

const initialState = {
    peopleCount: 10,
    sliceCount: 2,
};
class PizzaStore extends EventEmitter {
    constructor() {
        super()
        this.store = { ...initialState }

        AppDispatcher.register((action) => {
            switch (action.type) {
                case 'UPDATE_PEOPLE_COUNT':
                    this.store.peopleCount = action.value
                    this.emit('change')
                    break;
                case 'UPDATE_SLICE_COUNT':
                    this.store.sliceCount = action.value
                    this.emit('change')
                    break;
                case 'RESET_COUNT':
                    this.store = { ...initialState }
                    this.emit('change')
                    break;
            }
        })
    }

    getState() {
        return this.store
    }
}

export default new PizzaStore()