import { loadTheme } from "../actions/settings";

let initialState = {
    theme: loadTheme()
}

const settings = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {
                ...state,
                theme: !state.theme
            }
        default:
            return state;
    }
}

export default settings;