export const loadTheme = () => {
    try {
        const json = localStorage.getItem("theme");
        return JSON.parse(json);
    } catch(err) {
        console.log(err);
    }
}

export const saveTheme = (state) => {
    try {
        const json = JSON.stringify(state);
        localStorage.setItem("theme", json);
    } catch (err) {
        //Ignore write errors.
    }
}

export const toggleAppTheme = () => {
    return {
        type: 'TOGGLE_THEME'
    }
}