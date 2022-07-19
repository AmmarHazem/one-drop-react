import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.log("--- ErrorBoundary", error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-boundary d-flex flex-column justify-content-center align-items-center pt-5">
          <h3>Something went wrong</h3>
          <Link to="/">
            <Button type="primary">Back Home</Button>
          </Link>
        </main>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
