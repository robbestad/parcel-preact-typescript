import {h, render} from 'preact';
import StoreContext from 'storeon/preact/context'
import Main from "./components/main";
import store from "./store/store";

const mountNode = document.getElementById("root")!;

render(
    <StoreContext.Provider value={store}>
        <Main/>
    </StoreContext.Provider>,
    mountNode
);

//// Hot Module Replacement
//if (module.hot) {
//    module.hot.accept();
//}
