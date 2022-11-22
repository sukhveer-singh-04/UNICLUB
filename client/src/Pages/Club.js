import {Avatar, Link, Navbar, Text, Dropdown, Button} from '@nextui-org/react';
import React, {useContext} from 'react'
import { UniClubLogo } from '../components/UniClubLogo';
import Feed from '../components/Feed';
import UserContext from "../UserContext";

const Club = ({id, displayName}) => {
  const { user } = useContext(UserContext);

  const isPresident = user.isAuth && user.type === 'president' && user.club === id;

  const clubs = [
    {id: 'codingclub', displayName: 'CODING CLUB'},
    {id: 'sportsclub', displayName: 'SPORTS CLUB'},
    {id: 'culturalclub', displayName: 'CULTURAL CLUB'},
    {id: 'personalityclub', displayName: 'PERSONALITY CLUB'},
    {id: 'editorialclub', displayName: 'EDITORIAL CLUB'},
    {id: 'facultyclub', displayName: 'FACULTY CLUB'},
    {id: 'ecell', displayName: 'E-CELL'},
    {id: 'tpcell', displayName: 'T & P CELL'}
  ]

  const ClubsDropDownMenu = () => {
    const dropDownItems = clubs
      .filter(club => club.id !== id)
      .map(club => (
        <Dropdown.Item key={club.id}>
          <Link href={`/${club.id}`}>{club.displayName}</Link>
        </Dropdown.Item>
      )
    )

    return (
      <Dropdown.Menu aria-label="Static Actions">
        {dropDownItems}
      </Dropdown.Menu>
    )
  }

  return (
    <>
      <Navbar isBordered variant={"floating"}>
        <Navbar.Brand>
          <UniClubLogo />
          <Link href="/">
            <Text
              h1
              size={20}
              css={{ textGradient: "45deg, $purple600 -20%, $pink600 100%" }}
              weight="bold"
            >
              UNICLUB
            </Text>
          </Link>
        </Navbar.Brand>
        <Navbar.Content>
          <Dropdown>
            <Dropdown.Button flat>{displayName}</Dropdown.Button>
            <ClubsDropDownMenu />
          </Dropdown>
        </Navbar.Content>

        <Navbar.Content>
          {user.isAuth ? (
            <Navbar.Item>
              <Dropdown placement="bottom-left">
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    size="lg"
                    as="button"
                    color="gradient"
                    src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                  />
                </Dropdown.Trigger>
                <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
                  <Dropdown.Item key="profile" css={{ height: "$18" }}>
                    <Text b color="inherit" css={{ d: "flex" }}>
                      Signed in as
                    </Text>
                    <Text b color="inherit" css={{ d: "flex" }}>
                      {user.name}
                    </Text>
                  </Dropdown.Item>
                  <Dropdown.Item key="settings" withDivider>
                    My Profile
                  </Dropdown.Item>
                  <Dropdown.Item key="logout" color="error" withDivider>
                    Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Item>
          ) : (
            <Navbar.Item>
              <Link href="/presidentlogin">
                <Button className="home__login" auto bordered color="success">
                  Login
                </Button>
              </Link>
            </Navbar.Item>
          )}
        </Navbar.Content>
      </Navbar>
      <Feed clubId={id} isPresident={isPresident} />
    </>
  );
}

export default Club;

