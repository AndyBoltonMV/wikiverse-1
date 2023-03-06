import React from "react";
import apiURL from "../api";

export const Page = (props) => {
  async function fetchReq() {
    try {
      const res = await fetch(apiURL + "/wiki/" + props.page.slug);
      const data = await res.json();
      props.setArticle(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h3 onClick={fetchReq}>{props.page.title}</h3>
    </>
  );
};
