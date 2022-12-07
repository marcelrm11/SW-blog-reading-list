const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      data: {
        favorites: [],
      },
    },
    actions: {
      loadData: (group) => {
        const store = getStore();
        const actions = getActions();
        fetch(`https://www.swapi.tech/api/${group}`)
          .then((response) => response.json())
          .then((resdata) => {
            const newData = { ...store.data, [group]: resdata };
            setStore({ data: newData });
            return newData;
          })
          .then((data) => {
            let results = data[group].results;
            for (let i = 0; i < results.length; i++) {
              actions.loadDetail(group, results[i].uid);
            }
          })
          .catch((error) => console.log(error));
      },
      loadDetail: (group, id) => {
        fetch(`https://www.swapi.tech/api/${group}/${id}`)
          .then((response) => response.json())
          .then((resdata) => resdata.result.properties)
          .then((properties) => {
            const store = getStore();
            let updatedStore = JSON.parse(JSON.stringify(store)); // shallow copy of an object
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
            }
          })
          .catch((error) => console.log(error));
      },
      addToFavorites: (item) => {
        const store = getStore();
        item.favorite = true;
        const newFavorites = store.data.favorites.concat(item);
        setStore({ data: { ...store.data, favorites: newFavorites } });
      },
      deleteFavorite: (item) => {
        const store = getStore();
        const newFavs = store.data.favorites;
        item.favorite = false;
        for (let fav of newFavs) {
          if (fav.url === item.url) {
            newFavs.splice(newFavs.indexOf(fav), 1);
            setStore({ data: { ...store.data, favorites: newFavs } });
            break;
          }
        }
      },
    },
  };
};

export default getState;
