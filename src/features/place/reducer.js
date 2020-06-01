import produce from 'immer'

const INITIAL_STATE = {}

export default produce ((draft = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            break
    }
    return draft
})