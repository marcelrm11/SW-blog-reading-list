import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import CardList from "../component/card-list.jsx";
import { Context } from "../store/appContext";

function Home() {
  const { store, actions } = useContext(Context);
  let myList;
  useEffect(() => {
    try {
      const results = store.data.people.results;
      console.log(results);
      if (results) {
        myList = results.map((item, index) => {
          return <li>{item.name}</li>;
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
  //   console.log(results);

  //   console.log(myList);

  return (
    <div className="text-center mt-5">
      <h1>Hello Marcel!</h1>
      <p>
        <img src="https://picsum.photos/200" />
      </p>
      <ul>{myList}</ul>
      {/* <div>{store.data.results[0].name}</div> */}
      {/* <CardList list={store.data.results} /> */}
    </div>
  );
}

export default Home;
