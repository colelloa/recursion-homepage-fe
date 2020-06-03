import { 
    SHOW_CONTACT, 
} from './constants'


export const showContact = (show) => {
    return {
        type: SHOW_CONTACT,
        show,
    }
}

