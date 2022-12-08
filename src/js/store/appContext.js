import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    //this will be passed as the context value
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions },
          }),
      })
    );
    useEffect(() => {
      // localStorage.clear();
      const categories = ["people", "planets", "vehicles"];
      categories.forEach((category) => {
        if (!state.store.data[category]) {
          state.actions.loadData(category);
        }
      });
    }, []);
    useEffect(() => {
      localStorage.setItem("store", JSON.stringify(state.store));
    }, [state]);

    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
