import { Flex, Heading, Text } from "@contentful/f36-components";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <Flex
      as="footer"
      alignItems="center"
      justifyContent="space-between"
      padding="spacingXl"
      flexDirection="column"
      className={styles.footer}
    >
      <Flex className={styles.innerFooter} flexDirection="column">
        <Flex justifyContent="space-between" fullWidth flexWrap="wrap">
          <Flex flexDirection="column" marginBottom="spacingM">
            <Heading as="h3" marginBottom="spacingXs" fontColor="colorWhite">
              Contentful MovieDB
            </Heading>
            <Text as="p" fontColor="gray300">
              Your ultimate movie database powered by Contentful
            </Text>
          </Flex>

          <Flex flexDirection="column" marginBottom="spacingM">
            <Text as="h4" marginBottom="spacingXs" fontColor="colorWhite">
              Explore Contentful
            </Text>
            <Link
              to="https://www.contentful.com/products/platform/"
              target="_blank"
              color="gray300"
            >
              Platform
            </Link>
            <Link
              to="https://www.contentful.com/products/ecosystem/"
              target="_blank"
              color="gray300"
            >
              Ecosystem
            </Link>
            <Link
              to="https://www.contentful.com/developers/"
              target="_blank"
              color="gray300"
            >
              Developer Portal
            </Link>
          </Flex>
        </Flex>

        <Flex justifyContent="center" paddingTop="spacingM">
          <Text fontColor="gray300">
            &copy; {new Date().getFullYear()} Contentful. All rights reserved.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
