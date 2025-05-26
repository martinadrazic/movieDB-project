import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { Button, Flex, Heading, Menu } from "@contentful/f36-components";
import { ChevronDownIcon, PersonIcon } from "@contentful/f36-icons";

import { useAuthContext } from "../context/AuthContext.tsx";
import { useListsContext } from "../context/ListsContext.tsx";

export function Navbar() {
  const { favorites } = useListsContext();

  const { currentUser, switchUser } = useAuthContext();

  const users = [{ id: "one", name: "John Doe" }];

  return (
    <nav className={styles.navbar}>
      <Flex
        justifyContent="space-between"
        paddingLeft="spacingL"
        paddingRight="spacingL"
      >
        <Link to="/" className={styles.logo}>
          <Flex gap="spacingM">
            <img className={styles.logoImg} src="/contentful.png" />
            <Heading
              fontSize="fontSize2Xl"
              fontWeight="fontWeightDemiBold"
              marginBottom="none"
              as="h1"
            >
              Contentful MovieDB
            </Heading>
          </Flex>
        </Link>
        <div className={styles.desktopMenu}>
          <Link to="/" className={styles.link}>
            <Button size="small" variant="transparent">
              Home
            </Button>
          </Link>
          <Link to="/movies" className={styles.link}>
            <Button size="small" variant="transparent">
              Movies
            </Button>
          </Link>
          <Link to="/series" className={styles.link}>
            <Button size="small" variant="transparent">
              Series
            </Button>
          </Link>
          <Menu>
            <Menu.Trigger>
              <Button size="small" startIcon={<ChevronDownIcon size="tiny" />}>
                Lists
              </Button>
            </Menu.Trigger>
            <Menu.List>
              <Menu.Item>
                <Link to="/favorites">Favorites ({favorites.length})</Link>
              </Menu.Item>
            </Menu.List>
          </Menu>
        </div>
        <Menu>
          <Menu.Trigger>
            <Button startIcon={<PersonIcon />}>
              {currentUser.name.split(" ").map((word) => word.split("")[0])}
            </Button>
          </Menu.Trigger>
          <Menu.List>
            {users.map((user) => (
              <Menu.Item key={user.id}>
                <div
                  onClick={() => {
                    switchUser(user.id);
                  }}
                >
                  {user.name}
                </div>
              </Menu.Item>
            ))}
          </Menu.List>
        </Menu>
      </Flex>
    </nav>
  );
}
