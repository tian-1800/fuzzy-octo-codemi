/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import WidgetHistogram from './WidgetHistogram';
import MyBarChart from './MyBarChart';

export default function HomePage() {
  const nDaysAgo = n => {
    const day = new Date(Date.now() - n * 864e5)
      .toLocaleDateString('en-US')
      .replace(/\//g, '-');
    return day;
  };
  const dailyApiUrl = [];
  for (let i = 2; i < 2 + 8; i += 1) {
    dailyApiUrl.push(`https://covid19.mathdro.id/api/daily/${nDaysAgo(i)}`);
  }

  const [dailyData, setDailyData] = useState(false);
  const [latestDay, setLatestDay] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      const answer = await Promise.all([
        fetch(dailyApiUrl[7]),
        fetch(dailyApiUrl[6]),
        fetch(dailyApiUrl[5]),
        fetch(dailyApiUrl[4]),
        fetch(dailyApiUrl[3]),
        fetch(dailyApiUrl[2]),
        fetch(dailyApiUrl[1]),
        fetch(dailyApiUrl[0]),
      ]);

      let tempData = await Promise.all(answer.map(ans => ans.json()));

      let latest = tempData.slice(6, 8);
      latest = latest.map(day =>
        day.filter(el => el.countryRegion === 'India'),
      );
      setLatestDay(latest);

      tempData = tempData.map(day => {
        const filteredDay = day.filter(
          element => element.countryRegion === 'India',
        );
        const confirmed = filteredDay.reduce(
          (acc, el) => acc + parseInt(el.confirmed, 10),
          0,
        );
        const deaths = filteredDay.reduce(
          (acc, el) => acc + parseInt(el.deaths, 10),
          0,
        );
        return { confirmed, deaths };
      });

      setDailyData(tempData);
      setLoading(false);
    };

    fetchAll();
  }, []);

  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `;

  const Title = styled.div`
    flex-basis: 80%;
    flex-grow: 1;
    font-size: 24px;
    padding: 16px 0;
  `;

  return (
    <Container>
      <Title>Covid Case In India ({nDaysAgo(2)})</Title>
      {!loading && (
        <>
          <WidgetHistogram type="confirmed" latestDay={latestDay}>
            <MyBarChart type="confirmed" propsData={dailyData} />
          </WidgetHistogram>
          <WidgetHistogram type="deaths" latestDay={latestDay}>
            <MyBarChart type="deaths" propsData={dailyData} />
          </WidgetHistogram>
        </>
      )}
    </Container>
  );
}
