import React, { Component } from "react";
import GoogleAnalytics from "react-ga";
import { RouteComponentProps } from "react-router-dom";

GoogleAnalytics.initialize("UA-128591856-1");

const withTracker = (WrappedComponent: React.ComponentType, options = {}) => {
  const trackPage = (page: string) => {
    GoogleAnalytics.set({
      page,
      ...options
    });
    GoogleAnalytics.pageview(page);
  };

  // eslint-disable-next-line
  const HOC = class extends Component<RouteComponentProps> {
    componentDidMount() {
      // eslint-disable-next-line
      const page = this.props.location.pathname + this.props.location.search;
      trackPage(page);
    }

    componentDidUpdate(prevProps: RouteComponentProps) {
      const currentPage =
        prevProps.location.pathname + prevProps.location.search;
      const nextPage =
        this.props.location.pathname + this.props.location.search;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};

export default withTracker;
