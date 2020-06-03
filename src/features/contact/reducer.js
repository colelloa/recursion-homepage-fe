import { 
    SHOW_CONTACT, 
} from './constants'

import produce from 'immer'

const INITIAL_STATE = {showDrawer: false}

export default produce ((draft = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_CONTACT:
            const { show } = action
            draft.showDrawer = show

        default:
            break
    }
    return draft
})