import { useEffect } from "react";
import { NextPage } from "next";
import Router from "next/router";
import { Flex, Alert } from "@chakra-ui/core";

const ResourcesIndexPage: NextPage = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname === "/resources") {
      Router.push("/");
    }
  });
  return (
    <Flex direction="column" justify="center" align="center" minHeight="100vh">
      <Alert status="info">Redirecting you to the resources page.</Alert>
    </Flex>
  );
};

export default ResourcesIndexPage;
