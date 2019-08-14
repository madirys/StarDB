import React, { Component } from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = View => {
  return class extends Component {
    state = {
      data: null,
      hasError: false
    };

    updateList() {
      this.props.getData().then(data => {
        this.setState({
          data
        });
      });
    }

    componentDidMount() {
      this.updateList();
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.updateList();
      }
    }

    componentDidCatch() {
      this.setState({ hasError: true });
    }

    render() {
      const { data, hasError } = this.state;

      if (!data) {
        return <Spinner />;
      } else if (hasError) {
        return <ErrorIndicator />;
      }
      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
