import { Avatar, Link, Navbar, Text, Dropdown } from "@nextui-org/react";
import React from "react";
import { UniClubLogo } from "../components/UniClubLogo";
import Administration from "../components/Administration";

const CodingClub = () => {
  return (
    <>
      <Navbar isBordered variant={"floating"}>
        <Navbar.Brand>
          <UniClubLogo />
          {/* <Text b color="inherit" hideIn="xs">
            UNICLUB
          </Text> */}
          <Link href="/">
            <Text
              h1
              size={20}
              css={{
                textGradient: "45deg, $purple600 -20%, $pink600 100%",
              }}
              weight="bold"
            >
              UNICLUB
            </Text>
          </Link>
        </Navbar.Brand>

        <Navbar.Content>
          <Navbar.Item>
            {/* If not Logged In then it will show the Login Button which will redirect to the Login Page */}

            {/* <Link href="/presidentlogin">
                <Button auto bordered color="success">
                  Login
                </Button>
              </Link> */}

            {/* If Logged In then the Avatar of the President will be shown in the Navbar, Otherwise it will show the Login Button */}
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
                    zoey@example.com
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="settings" withDivider>
                  My Profile
                </Dropdown.Item>
                {/* <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                <Dropdown.Item key="analytics" withDivider>
                  Analytics
                </Dropdown.Item>
                <Dropdown.Item key="system">System</Dropdown.Item>
                <Dropdown.Item key="configurations">
                  Configurations
                </Dropdown.Item>
                <Dropdown.Item key="help_and_feedback" withDivider>
                  Help & Feedback
                </Dropdown.Item> */}
                <Dropdown.Item key="logout" color="error" withDivider>
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      <Administration />
    </>
  );
};

export default CodingClub;
