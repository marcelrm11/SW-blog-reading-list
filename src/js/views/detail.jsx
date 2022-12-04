import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

function Detail() {
  const { store, actions } = useContext(Context);
  const { group, uid } = useParams();
  actions.loadDetail(group, uid);
  let infoLoaded = false;
  let groupArr, element;
  console.log(store);
  const groupObj = store.data[group];
  if (groupObj) {
    groupArr = groupObj.results;
    for (let i = 0; i < groupArr.length; i++) {
      if (groupArr[i].uid === uid) {
        console.log(groupArr[i]);
        element = groupArr[i];
        break;
      }
    }
    infoLoaded = Object.keys(element).length > 3 ? true : false;
  }

  return <div>{infoLoaded ? element.height : "loading"}</div>;
}

export default Detail;
