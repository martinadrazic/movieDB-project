import { PropsWithChildren } from "react";
import searchesStyles from "../pages/Searches.module.css";
import { Flex } from "@contentful/f36-components";

interface Props {
  dataType?: "series" | "movie";
}

export function SearchContainer({
  dataType,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Flex
      className={searchesStyles.banner}
      data-type={dataType}
      justifyContent="center"
      alignItems="center"
    >
      <div className={searchesStyles.bannerOverlay} />
      <div className={searchesStyles.container}>{children}</div>
    </Flex>
  );
}
