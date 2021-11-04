import React from 'react';
import styled from 'styled-components';
import { GrDiamond } from 'react-icons/gr';
import { IoMdMail, IoMdAnalytics } from 'react-icons/io';
import { FaUsb, FaRegUser } from 'react-icons/fa';
import { GiMeepleCircle } from 'react-icons/gi';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { HiSpeakerphone } from 'react-icons/hi';
import { BsStarHalf } from 'react-icons/bs';
import { ImInfo } from 'react-icons/im';

const SideBar = () => {
  const courseNotification = 21;
  const defaultColor = '#555';

  const Container = styled.nav`
    float: left;
    width: 50%;
    max-width: 300px;
    height: 100%;
    color: ${defaultColor};
    background-color: #fff;
    padding: 32px 0;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  `;

  const Subtitle = styled.h4`
    text-transform: uppercase;
    height: 48px;
    line-height: 48px;
    padding: 0 16px;
  `;

  const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-transform: capitalize;
    height: 48px;
    gap: 8px;
    padding: 0 16px;
  `;

  const Separator = styled.div`
    width: 100%;
    border-bottom: solid 0.5px #ccc;
    margin: 8px 0;
  `;

  const ItemName = styled.span`
    flex-grow: 1;
  `;

  const Notifications = styled.p`
    background-color: red;
    padding: 0 2px;
    justify-self: end;
    color: white;
    border-radius: 2px;
  `;

  return (
    <Container>
      <section>
        <Subtitle>Home</Subtitle>
        <Separator />
      </section>
      <section>
        <Subtitle>learning</Subtitle>
        <ul>
          <Item>
            <GrDiamond />
            <ItemName>courses</ItemName>
            <Notifications>{courseNotification}</Notifications>
          </Item>
          <Item>
            <FaUsb />
            <ItemName>learning plans</ItemName>
          </Item>
        </ul>
        <Separator />
      </section>
      <section>
        <Subtitle>manage</Subtitle>
        <ul>
          <Item>
            <FaRegUser />
            <ItemName>Users</ItemName>
          </Item>
          <Item>
            <GiMeepleCircle />
            <ItemName>Skills</ItemName>
          </Item>
          <Item>
            <AiOutlineAreaChart />
            <ItemName>Reports</ItemName>
          </Item>
          <Item>
            <IoMdAnalytics />
            <ItemName>Analytics</ItemName>
          </Item>
          <Item>
            <HiSpeakerphone />
            <ItemName>Announcement</ItemName>
          </Item>
        </ul>
        <Separator />
      </section>
      <section>
        <Subtitle>Configure</Subtitle>
        <ul>
          <Item>
            <BsStarHalf />
            <ItemName>Points</ItemName>
          </Item>
          <Item>
            <GiMeepleCircle />
            <ItemName>reward</ItemName>
          </Item>
          <Item>
            <IoMdMail />
            <ItemName>Email Templates</ItemName>
          </Item>
          <Item>
            <ImInfo />
            <ItemName>Company Info</ItemName>
          </Item>
          <Item>
            <FaRegUser />
            <ItemName>Billing</ItemName>
          </Item>
        </ul>
      </section>
    </Container>
  );
};

export default SideBar;
