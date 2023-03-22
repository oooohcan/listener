import React from "react";

import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import SiderMenu from "../components/SiderMenu";
import SiderTitle from "../components/SiderTitle";
import PlayController from "../components/PlayController";
import MainBar from "../components/MainBar";

const { Header, Footer, Sider, Content } = Layout;

export default function Main() {
  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Sider
        width={"12rem"}
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          backgroundColor: "rgba(249, 250, 251)",
          zIndex: "10",
          height: "100%",
        }}
        breakpoint={"lg"}
        collapsedWidth={0}
      >
        <SiderTitle />
        <SiderMenu />
      </Sider>
      <Layout style={{ marginLeft: "12rem", backgroundColor: "white" }}>
        <Header
          style={{
            width: "68rem",
            position: "fixed",
            top: "0",
            left: "12rem",
            backgroundColor: "white",
            zIndex: "10",
            padding: "0.75rem",
          }}
        >
          <MainBar />
        </Header>
        <Content
          style={{
            marginTop: "4rem",
            marginBottom: "4rem",
            backgroundColor: "white",
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            backgroundColor: "white",
            position: "fixed",
            bottom: "0",
            left: "12rem",
            zIndex: "10",
            height: "4rem",
            width: "68rem",
            padding: "0.75rem",
          }}
        >
          <PlayController />
        </Footer>
      </Layout>
    </Layout>
  );
}
