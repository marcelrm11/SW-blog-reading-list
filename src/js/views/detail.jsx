import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import DetailCard from "../component/detail-card.jsx";
import { Context } from "../store/appContext";
import Spinner from "react-bootstrap/Spinner";

function Detail() {
  const { store, actions } = useContext(Context);
  const { group, uid } = useParams();
  useEffect(() => {
    if (!infoLoaded) {
      actions.loadDetail(group, uid);
    }
  });
  let groupArr, element, infoLoaded;
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
  }

  return (
    <div className="container py-3">
      {infoLoaded ? (
        <DetailCard element={element} group={group} />
      ) : (
        <Spinner animation="border" variant="light" />
      )}
    </div>
  );
}

export default Detail;
