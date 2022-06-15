import { Spinner } from "@blueprintjs/core";
import React, { Component, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./constants";
import Footer from "./Footer";
import Header from "./Header";
import {
  GlobalStyles,
  Main,
  ResponsiveContainer,
  SpinnerContainer
} from "./styles";
import { fetchDarkMode, storeDarkMode } from "./utils";

type MainLayoutProps = {
  children?: ReactNode;
};

type MainLayoutState = {
  darkMode: boolean;
  mounted: boolean;
};

class MainLayout extends Component<MainLayoutProps, MainLayoutState> {
  constructor(props: MainLayoutProps) {
    super(props);
    this.state = {
      darkMode: false,
      mounted: false
    };
  }

  componentDidMount(): void {
    const value = fetchDarkMode();
    this.setState({
      darkMode: value,
      mounted: true
    });
  }

  handleDarkModeToggle = (): void => {
    const { darkMode } = this.state;
    const value = !darkMode;
    this.setState({
      darkMode: value
    });
    storeDarkMode(value);
  };

  render() {
    const { children } = this.props;
    const { darkMode, mounted } = this.state;
    const theme = darkMode ? DarkTheme : LightTheme;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {mounted ? (
          <div className={theme.className}>
            <Header
              darkMode={darkMode}
              handleDarkModeToggle={this.handleDarkModeToggle}
            />
            <Main>
              <ResponsiveContainer>{children}</ResponsiveContainer>
            </Main>
            <Footer />
          </div>
        ) : (
          <SpinnerContainer>
            <Spinner intent="primary" size={60} />
          </SpinnerContainer>
        )}
      </ThemeProvider>
    );
  }
}

export default MainLayout;
