import { Component, ErrorInfo, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // TO DO: Add a service log to store logs
    console.log("ERROR ===>", error, "\n", "===> ERROR INFO ===>", errorInfo);
  }

  handleReset = () => {
    this.setState((prev) => ({ ...prev, hasError: false }));
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h3 className="error-title">Ooooooppps...!</h3>
          <p className="error-text">Something must have broken!</p>
          <button type="button" onClick={this.handleReset}>
            Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
