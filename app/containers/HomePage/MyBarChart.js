/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import VerticalBarGraph from '@chartiful/react-vertical-bar-graph';

const MyBarChart = ({ type, propsData }) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    if (propsData.length) {
      const dailyData = propsData;
      const tempData = [];
      dailyData.forEach((day, i) => {
        if (i < dailyData.length - 1) {
          tempData.push(dailyData[i + 1][type] - day[type]);
        }
      });
      setdata(tempData);
      console.log(tempData);
    }
  }, []);

  const labels = ['', '', '', '', '', '', ''];

  return (
    <VerticalBarGraph
      data={data}
      labels={labels}
      width={300}
      height={150}
      barRadius={3}
      barWidthPercentage={0.5}
      baseConfig={{
        hasXAxisBackgroundLines: false,
        xAxisLabelStyle: {
          position: 'right',
          prefix: '',
        },
      }}
      style={{
        paddingVertical: 10,
      }}
    />
  );
};

export default MyBarChart;
