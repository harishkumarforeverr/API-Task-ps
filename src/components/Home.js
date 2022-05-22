import React, { useEffect, useState } from "react";
import "./Home.scss";
import { Table } from "antd";
import DemoPie from "./PieChart";
import DemoLine from "./Graph";
import axios from "axios";

const columns = [
  {
    title: "keyword",
    dataIndex: "keyword",
    key: "keyword",
    render: (val, data, i) => {
      console.log("index", data);
      return (
        <div>
          <h3 className="tableColum">
            {" "}
            Keyword {parseInt(i + 1)}
            <br />
            {data.keyword} Members
          </h3>
        </div>
      );
    },
  },
  {
    title: "Facebook",
    dataIndex: "facebook",
    key: "facebook",
    render: (val, data, i) => {
      console.log("index", data);
      return (
        <div>
          <h3 className="tableColum6">{val}</h3>
        </div>
      );
    },
  },
  {
    title: "Twitter",
    dataIndex: "twitter",
    key: "twitter",
    render: (val, data, i) => {
      console.log("index", data);
      return (
        <div>
          <h3 className="tableColum1">{val}</h3>
        </div>
      );
    },
  },
  {
    title: "Youtube",
    dataIndex: "youtube",
    key: "youtube",
    render: (val, data, i) => {
      console.log("index", data);
      return (
        <div>
          <h3 className="tableColum2">{val}</h3>
        </div>
      );
    },
  },
  {
    title: "Instragram",
    dataIndex: "instagram",
    key: "instagram",
    render: (val, data, i) => {
      console.log("index", data);
      return (
        <div>
          <h3 className="tableColum3">{val}</h3>
        </div>
      );
    },
  },
  {
    title: "Reddit",
    dataIndex: "reddit",
    key: "reddit",
    render: (val, data, i) => {
      console.log("index", data);
      return (
        <div>
          <h3 className="tableColum4">{val}</h3>
        </div>
      );
    },
  },
  {
    title: "Other",
    dataIndex: "Other",
    key: "Other",
    render: (val, data, i) => {
      console.log("index", data);
      return (
        <div>
          <h3 className="tableColum5">{val}</h3>
        </div>
      );
    },
  },
];

const Home = () => {
  const [dataSource, setdataSource] = useState([]);
  useEffect(() => {
    axios("https://card-admin.dev.intuaition.net/chart/data").then((res) => {
      const outputData = [];
      const ResData = res.data.data;
      const keyword1 = ResData.filter((data) => {
        return data.keyword === "keyword1";
      });
      const keyword2 = ResData.filter((data) => {
        return data.keyword === "keyword2";
      });
      const keyword3 = ResData.filter((data) => {
        return data.keyword === "keyword3";
      });
      const keyword4 = ResData.filter((data) => {
        return data.keyword === "keyword4";
      });
      const keyword5 = ResData.filter((data) => {
        return data.keyword === "keyword5";
      });
      const keyword1Sum = keyword1.reduce((prev, curr) => {
        return parseInt(prev) + parseInt(curr.value);
      }, 0);
      const keyword2Sum = keyword2.reduce((prev, curr) => {
        return parseInt(prev) + parseInt(curr.value);
      }, 0);
      const keyword3Sum = keyword3.reduce((prev, curr) => {
        return parseInt(prev) + parseInt(curr.value);
      }, 0);
      const keyword4Sum = keyword4.reduce((prev, curr) => {
        return parseInt(prev) + parseInt(curr.value);
      }, 0);
      const keyword5Sum = keyword5.reduce((prev, curr) => {
        return parseInt(prev) + parseInt(curr.value);
      }, 0);
      const valuesIncludes = [
        "facebook",
        "twitter",
        "youtube",
        "instagram",
        "reddit",
      ];
      const key1Obj = {
        Other: 0,
        keyword:
          keyword1Sum > 1000 ? parseInt(keyword1Sum / 1000) + "K" : keyword1Sum,
      };
      keyword1.map((val) => {
        if (valuesIncludes.includes(val.source)) {
          key1Obj[val.source] =
            parseInt(val.value) > 1000
              ? parseInt(val.value / 1000) + "K"
              : val.value;
        } else {
          key1Obj.Other = parseInt(key1Obj.Other) + parseInt(val.value);
        }
        return null;
      });

      const key2Obj = {
        Other: 0,
        keyword:
          keyword1Sum > 1000 ? parseInt(keyword2Sum / 1000) + "K" : keyword2Sum,
      };
      keyword2.map((val) => {
        if (valuesIncludes.includes(val.source)) {
          key2Obj[val.source] =
            parseInt(val.value) > 1000
              ? parseInt(val.value / 1000) + "K"
              : val.value;
        } else {
          key2Obj.Other = parseInt(key2Obj.Other) + parseInt(val.value);
        }
        return null;
      });

      const key3Obj = {
        Other: 0,
        keyword:
          keyword3Sum > 1000 ? parseInt(keyword3Sum / 1000) + "K" : keyword3Sum,
      };
      keyword3.map((val) => {
        if (valuesIncludes.includes(val.source)) {
          key3Obj[val.source] =
            parseInt(val.value) > 1000
              ? parseInt(val.value / 1000) + "K"
              : val.value;
        } else {
          key3Obj.Other = parseInt(key3Obj.Other) + parseInt(val.value);
        }
        return null;
      });

      const key4Obj = {
        Other: 0,
        // keyword: keyword4Sum,
        keyword:
          keyword4Sum > 1000 ? parseInt(keyword4Sum / 1000) + "K" : keyword4Sum,
      };
      keyword4.map((val) => {
        if (valuesIncludes.includes(val.source)) {
          key4Obj[val.source] =
            parseInt(val.value) > 1000
              ? parseInt(val.value / 1000) + "K"
              : val.value;
        } else {
          key4Obj.Other = parseInt(key4Obj.Other) + parseInt(val.value);
        }
        return null;
      });

      const key5Obj = {
        Other: 0,
        keyword:
          keyword5Sum > 1000 ? parseInt(keyword5Sum / 1000) + "K" : keyword5Sum,
      };
      keyword5.map((val) => {
        if (valuesIncludes.includes(val.source)) {
          key5Obj[val.source] =
            parseInt(val.value) > 1000
              ? parseInt(val.value / 1000) + "K"
              : val.value;
        } else {
          key5Obj.Other = parseInt(key5Obj.Other) + parseInt(val.value);
        }
        return null;
      });

      key1Obj.Other =
        parseInt(key1Obj.Other) > 1000
          ? parseInt(key1Obj.Other / 1000) + "K"
          : key1Obj.Other;
      key2Obj.Other =
        parseInt(key2Obj.Other) > 1000
          ? parseInt(key2Obj.Other / 1000) + "K"
          : key2Obj.Other;
      key3Obj.Other =
        parseInt(key3Obj.Other) > 1000
          ? parseInt(key3Obj.Other / 1000) + "K"
          : key3Obj.Other;
      key4Obj.Other =
        parseInt(key4Obj.Other) > 1000
          ? parseInt(key4Obj.Other / 1000) + "K"
          : key4Obj.Other;
      key5Obj.Other =
        parseInt(key5Obj.Other) > 1000
          ? parseInt(key5Obj.Other / 1000) + "K"
          : key5Obj.Other;

      outputData.push(key1Obj, key2Obj, key3Obj, key4Obj, key5Obj);
      console.log(outputData);
      setdataSource(outputData);
    });
  }, []);
  return (
    <div className="home">
      <Table pagination={false} dataSource={dataSource} columns={columns} />;
      <div>
        <div>
          <DemoPie dataSource={dataSource} />
        </div>
        <div>
          <DemoLine dataSource={dataSource} />
        </div>
      </div>
    </div>
  );
};
export default Home;
