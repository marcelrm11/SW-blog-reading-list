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
        // console.log("loading people");
        fetch("https://www.swapi.tech/api/people")
          .then((response) => response.json())
          .then((resdata) => {
            const newData = { ...store.data, people: resdata };
            setStore({ data: newData });
            // console.log("people loaded");
            return newData;
          })
          .then((data) => {
            // make function (repeats in planets and vehicles)
            let results = data.people.results;
            for (let i = 0; i < results.length; i++) {
              // actions.loadDetail("people", results[i].uid);
              actions.loadDetail("people", results[i].uid);
            }
          })
          .catch((error) => console.log(error));
      },
      loadPlanets: () => {
        console.log("loading planets");
        const store = getStore();
        const actions = getActions();
        fetch("https://www.swapi.tech/api/planets")
          .then((response) => response.json())
          .then((resdata) => {
            const newData = { ...store.data, planets: resdata };
            setStore({ data: newData });
            // console.log("planets loaded");
            return newData;
          })
          .then((data) => {
            let results = data.planets.results;
            for (let i = 0; i < results.length; i++) {
              actions.loadDetail("planets", results[i].uid);
            }
          })
          .catch((error) => console.log(error));
      },
      loadVehicles: () => {
        const store = getStore();
        const actions = getActions();
        // console.log("loading vehicles");
        fetch("https://www.swapi.tech/api/vehicles")
          .then((response) => response.json())
          .then((resdata) => {
            const newData = { ...store.data, vehicles: resdata };
            setStore({ data: newData });
            // console.log("vehicles loaded");
            return newData;
          })
          .then((data) => {
            let results = data.vehicles.results;
            for (let i = 0; i < results.length; i++) {
              actions.loadDetail("vehicles", results[i].uid);
            }
          })
          .catch((error) => console.log(error))
          .finally(() => console.log(store));
      },
      loadDetail: (group, id) => {
        // console.log("loading detail");
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
                  results[i] = {
                    ...results[i],
                    ...properties,
                    loaded: true,
                    imgURL: `https://starwars-visualguide.com/assets/img/${
                      group === "people" ? "characters" : group
                    }/${id}.jpg`,
                  };
                  break;
                }
              }
              setStore({ data: updatedStore.data });
              // console.log(`detail loaded: ${group}/${id}`);
            }
          })
          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;
