import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import DetailCard from "../component/detail-card.jsx";
import { Context } from "../store/appContext";

function Detail() {
  const { store, actions } = useContext(Context);
  const { group, uid } = useParams();
  useEffect(() => {
    if (!infoLoaded) {
      actions.loadDetail(group, uid);
    }
  });
  let groupArr, element, infoLoaded, properties;
  // console.log(store);
  const groupObj = store.data[group];
  if (groupObj) {
    groupArr = groupObj.results;
    for (let i = 0; i < groupArr.length; i++) {
      if (groupArr[i].uid === uid) {
        element = groupArr[i];
        break;
      }
    }
    infoLoaded = element.loaded;
    console.log(element);
  }

  return <div>{infoLoaded ? <DetailCard element={element} /> : "loading"}</div>;
}

export default Detail;
