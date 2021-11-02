import React from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowDown, MdNotifications } from 'react-icons/md';
import codemiIcon from '../images/codemi-394x150.png';
import user from '../images/user-picture.png';

const TopBar = () => {
  const notificationAmounts = 18;

  const Container = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
    width: 100%;
    height: 58px;
    padding: 0 16px;
    background-color: #fff;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.42);
  `;

  const NotifContainer = styled.div`
    position: relative;
    font-size: 32px;
    color: #887;
  `;

  const CodemiLogo = styled.div`
    flex-grow: 1;
    height: 42px;
  `;

  const Image = styled.img`
    height: 100%;
  `;

  const SuperScript = styled.span`
    position: absolute;
    font-size: 9px;
    background-color: red;
    border-radius: 2px;
    color: white;
    top: 0;
    right: 0;
    padding: 4px 2px 2px 2px;
  `;

  const UserContainer = styled.div`
    display: flex;
    gap: 2px;
    align-items: center;
    font-size: 24px;
    color: #887;
  `;

  const UserImage = styled.img`
    height: 48px;
    background-color: #999;
    border-radius: 50%;
  `;

  return (
    <Container>
      <CodemiLogo>
        <Image src={codemiIcon} alt="Codemi" />
      </CodemiLogo>
      <NotifContainer>
        <MdNotifications />
        <SuperScript>{notificationAmounts}</SuperScript>
      </NotifContainer>
      <UserContainer>
        <UserImage src={user} alt="User" />
        <MdKeyboardArrowDown />
      </UserContainer>
    </Container>
  );
};

export default TopBar;
