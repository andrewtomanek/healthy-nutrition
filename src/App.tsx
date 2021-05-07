import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AuthProvider } from "./auth/Auth";
import GlobalStyle from "./theme/globalStyle";

const Home = React.lazy(() => {
  return import("./pages/Home");
});

const Cart = React.lazy(() => {
  return import("./pages/Cart");
});

const Login = React.lazy(() => {
  return import("./pages/Login");
});

const SignUp = React.lazy(() => {
  return import("./pages/SignUp");
});

const Navigation = React.lazy(() => {
  return import("./components/navigation/Navigation");
});

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cart" component={Cart} exact />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
