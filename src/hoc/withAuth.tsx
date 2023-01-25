import React from "react";

const WithAuth = (App: any) => {
  return class WrapWithAuth extends React.Component<typeof App> {
    constructor(props: any) {
      super(props);
    }

    render() {
      return <App {...this.props} />;
    }
  };
};

export default WithAuth;
