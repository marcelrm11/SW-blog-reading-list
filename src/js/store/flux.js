const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      data: {},
    },
    actions: {
      // Use getActions to call a function within a fuction
      loadPeople: () => {
        const store = getStore();
        const actions = getActions();
        console.log("loading people");
        fetch("https://www.swapi.tech/api/people")
          .then((response) => response.json())
          .then((resdata) => {
            const newData = { ...store.data, people: resdata };
            setStore({ data: newData });
            console.log("people loaded");
            return newData;
          })
          .then((data) => {
            let results = data.people.results;
            for (let i = 0; i < results.length; i++) {
              actions.loadDetail("people", results[i].uid);
            }
          })
          .catch((error) => console.log(error))
          .finally(() => console.log(store));
      },
      loadPlanets: () => {
        console.log("loading planets");
        const store = getStore();
        fetch("https://www.swapi.tech/api/planets")
          .then((response) => response.json())
          .then((resdata) => {
            const newData = { ...store.data, planets: resdata };
            setStore({ data: newData });
            console.log("planets loaded");
          })
          .catch((error) => console.log(error));
      },
      loadVehicles: () => {
        const store = getStore();
        console.log("loading vehicles");
        fetch("https://www.swapi.tech/api/vehicles")
          .then((response) => response.json())
          .then((resdata) => {
            const newData = { ...store.data, vehicles: resdata };
            setStore({ data: newData });
            console.log("vehicles loaded");
          })
          .catch((error) => console.log(error));
      },
      loadDetail: (group, id) => {
        console.log("loading detail");
        fetch(`https://www.swapi.tech/api/${group}/${id}`)
          .then((response) => response.json())
          .then((resdata) => resdata.result.properties)
          .then((properties) => {
            const store = getStore();
            let updatedStore = JSON.parse(JSON.stringify(store));
            if (updatedStore.data[group]) {
              const results = updatedStore.data[group].results;
              for (let i = 0; i < results.length; i++) {
                if (results[i].uid === id) {
                  results[i] = { ...results[i], ...properties, loaded: true };
                  break;
                }
              }
              setStore({ data: updatedStore.data });
              console.log(`detail loaded: ${group}/${id}`);
            }
          })
          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;
