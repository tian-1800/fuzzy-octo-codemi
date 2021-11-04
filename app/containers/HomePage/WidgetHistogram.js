import React from 'react';
import styled from 'styled-components';

const WidgetHistogram = ({ latestDay, type, children }) => {
  const tempData = [...latestDay];
  const data = [];
  tempData[0].forEach((province, i) => {
    data.push({
      state: province.provinceState,
      amount: parseInt(tempData[1][i][type], 10) - parseInt(province[type], 10),
    });
  });

  const total =
    tempData[1].reduce((acc, el) => acc + parseInt(el[type], 10), 0) -
    tempData[0].reduce((acc, el) => acc + parseInt(el[type], 10), 0);

  const Container = styled.nav`
    max-width: 1000px;
    height: 600px;
    color: #fff;
    background-color: #6240ee;
    padding: 24px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.42);
  `;

  const Title = styled.h3`
    font-size: 20px;
    text-transform: capitalize;
  `;

  const BigText = styled.p`
    font-size: 48px;
  `;

  const Subtitle = styled.div`
    color: #ddd;
  `;

  const Separator = styled.div`
    width: 100%;
    border-bottom: solid 0.5px #ccc;
    margin: 4px 0 16px;
  `;

  const FlexContainer = styled.div`
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
  `;

  return (
    <Container>
      <Title>Latest Daily {type}</Title>
      <BigText>{total}</BigText>
      <Subtitle>Daily {type} last 7 days</Subtitle>

      {children}

      <Subtitle>
        <FlexContainer>
          <span>Provinces</span>
          <span>Latest Daily Case</span>
        </FlexContainer>
      </Subtitle>
      <Separator />

      {data.slice(0, 7).map(province => (
        <>
          <FlexContainer>
            <span>{province.state}</span>
            <span>{province.amount}</span>
          </FlexContainer>
          <Separator />
        </>
      ))}
    </Container>
  );
};

export default WidgetHistogram;
