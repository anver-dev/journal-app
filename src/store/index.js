const { createStore } = require("vuex");
import auth from '../modules/auth/store'
import daybook from '../modules/daybook/store/daybook'

const store = createStore({
    modules: {
        auth,
        daybook
    }
});

export default store;
