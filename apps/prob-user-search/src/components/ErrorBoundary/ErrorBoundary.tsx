import { Component } from 'react';
import ErrorFallback from 'components/ErrorFallback/ErrorFallback';

interface ComponentProp {
  children: any;
}

interface ComponentState {
  error: any;
  errorInfo: any;
}

class ErrorBoundary extends Component<ComponentProp, ComponentState> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return <ErrorFallback error={this.state.error} errorInfo={this.state.errorInfo} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
