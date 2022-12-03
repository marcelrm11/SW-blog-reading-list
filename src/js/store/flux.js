const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      data: {},
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
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
            console.log(store);
          })
          .catch((error) => console.log(error));
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
