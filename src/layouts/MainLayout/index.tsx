import React, { Component, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./constants";
import Footer from "./Footer";
import Header from "./Header";
import { Main, ResponsiveContainer } from "./styles";
import { fetchDarkMode, storeDarkMode } from "./utils";

type MainLayoutProps = {
  children?: ReactNode;
};

type MainLayoutState = {
  darkMode: boolean;
};

class MainLayout extends Component<MainLayoutProps, MainLayoutState> {
  constructor(props: MainLayoutProps) {
    super(props);
    this.state = {
      darkMode: false
    };
  }

  componentDidMount(): void {
    const { darkMode } = this.state;
    const value = fetchDarkMode();
    if (value !== darkMode) {
      this.setState({ darkMode: value });
    }
  }

  handleDarkModeToggle = (): void => {
    const { darkMode } = this.state;
    const value = !darkMode;
    this.setState({ darkMode: value });
    storeDarkMode(value);
  };

  render() {
    const { children } = this.props;
    const { darkMode } = this.state;
    const theme = darkMode ? DarkTheme : LightTheme;
    return (
      <ThemeProvider theme={theme}>
        <div className={theme.blueprintjsClass}>
          <Header
            darkMode={darkMode}
            handleDarkModeToggle={this.handleDarkModeToggle}
          />
          <Main>
            <ResponsiveContainer>{children}</ResponsiveContainer>
          </Main>
          <Footer />
          <style global jsx>{`
            .position-fixed {
              position: fixed !important;
            }
          `}</style>
        </div>
      </ThemeProvider>
    );
  }
}

export default MainLayout;
