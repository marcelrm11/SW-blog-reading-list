const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      data: {},
    },
    actions: {
      // Use getActions to call a function within a fuction
      loadPeople: () => {
        const store = getStore();
        fetch("https://www.swapi.tech/api/people")
          .then((response) => response.json())
          .then((resdata) => {
            const newData = { ...store.data, people: resdata };
            setStore({ data: newData });
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
          })
          .catch((error) => console.log(error));
      },
      loadDetail: (group, id) => {
        const store = getStore();
        console.log("loading detail");
        fetch(`https://www.swapi.tech/api/${group}/${id}`)
          .then((response) => response.json())
          .then((resdata) => resdata.result.properties)
          .then((properties) => {
            const results = store.data[group].results;
            for (let i = 0; i < results.length; i++) {
              if (results[i].uid === id) {
                results[i] = { ...results[i], ...properties };
                // modifying the store without "setStore" to avoid complex object deep merging functions
                console.log("detail loaded");
                console.log(results[i]);
                break;
              }
            }
          })
          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;
