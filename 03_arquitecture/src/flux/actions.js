import AppDispatcher from './AppDispatcher'

export const updatePeopleCount = (value) => {
    AppDispatcher.dispatch({ type: 'UPDATE_PEOPLE_COUNT', value })
}

export const updateSliceCount = (value) => {
    AppDispatcher.dispatch({ type: 'UPDATE_SLICE_COUNT', value })
}

export const resetCount = () => {
    AppDispatcher.dispatch({ type: 'RESET_COUNT' })
} 