const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      data: {},
      loaded: false,
    },
    actions: {
      // Use getActions to call a function within a fuction
      // exampleFunction: () => {
      //   getActions().changeColor(0, "green");
      // },
      loadPeople: () => {
        const store = getStore();
        fetch("https://www.swapi.tech/api/people")
          .then((response) => response.json())
          .then((resdata) => {
            const newData = { ...store.data, people: resdata };
            setStore({ data: newData });
            // console.log(store.data);
          })
          .catch((error) => console.log(error));
      },
      loadPlanets: () => {
        const store = getStore();
        fetch("https://www.swapi.tech/api/planets")
          .then((response) => response.json())
          .then((resdata) => {
            const newData = { ...store.data, planets: resdata };
            setStore({ data: newData });
            // console.log(store.data);
          })
          .catch((error) => console.log(error));
      },
      loadVehicles: () => {
        const store = getStore();
        fetch("https://www.swapi.tech/api/vehicles")
          .then((response) => response.json())
          .then((resdata) => {
            const newData = { ...store.data, vehicles: resdata };
            setStore({ data: newData });
            // console.log(store);
          })
          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;
