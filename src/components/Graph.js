import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Line } from "@ant-design/plots";

const DemoLine = ({ dataSource }) => {
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
  console.log("dataFilter", dataFilter);
  const data = [];
  delete dataFilter.keyword;
  for (let val in dataFilter) {
    data.push({
      year: val,
      value: dataFilter[val],
    });
  }
  // const data = [
  //   {
  //     year: "1991",
  //     value: 3,
  //   },
  //   {
  //     year: "1992",
  //     value: 4,
  //   },
  //   {
  //     year: "1993",
  //     value: 3.5,
  //   },
  //   {
  //     year: "1994",
  //     value: 5,
  //   },
  //   {
  //     year: "1995",
  //     value: 4.9,
  //   },
  //   {
  //     year: "1996",
  //     value: 6,
  //   },
  //   {
  //     year: "1997",
  //     value: 7,
  //   },
  //   {
  //     year: "1998",
  //     value: 9,
  //   },
  //   {
  //     year: "1999",
  //     value: 13,
  //   },
  // ];
  const config = {
    data,
    xField: "year",
    yField: "value",
    label: {},
    point: {
      size: 5,
      shape: "diamond",
      style: {
        fill: "white",
        stroke: "#5B8FF9",
        lineWidth: 2,
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: "#000",
          fill: "red",
        },
      },
    },
    interactions: [
      {
        type: "marker-active",
      },
    ],
  };
  return <Line {...config} />;
};

export default DemoLine;
