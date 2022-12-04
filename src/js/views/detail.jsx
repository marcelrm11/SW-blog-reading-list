import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

function Detail() {
  const { store, actions } = useContext(Context);
  const { group, uid } = useParams();
  useEffect(() => {
    if (!infoLoaded) {
      console.log("!infoLoaded");
      actions.loadDetail(group, uid);
    }
  });
  let groupArr, element, infoLoaded;
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
    infoLoaded = element.loaded;
  }

  return <div>{infoLoaded ? element.height : "loading"}</div>;
}

export default Detail;
