import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie } from "@ant-design/plots";

const DemoPie = ({ dataSource }) => {
  // "20".replace("k","000")
  console.log("dataSource", dataSource);
  const dataFilter = {
    Other: 0,
    facebook: 0,
    instagram: 0,
    keyword: 0,
    reddit: 0,
    twitter: 0,
    youtube: 0,
  };

  dataSource.map((Obj) => {
    for (let val in Obj) {
      const num = String(Obj[val]).replace("K", "000");
      dataFilter[val] = parseInt(dataFilter[val]) + parseInt(num);
    }
    return null;
  });
  console.log("dataFilter111111111", dataFilter);
  delete dataFilter.keyword;
  const data = [];

  for (let val in dataFilter) {
    data.push({
      type: val,
      value: dataFilter[val],
    });
  }
  let total = 0;

  for (let val in dataFilter) {
    total += parseInt(dataFilter[val]);
  }
  console.log("total", total);

  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return (
    <>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Total messgae: {total}
      </h1>
      <Pie {...config} />
    </>
  );
};

export default DemoPie;
