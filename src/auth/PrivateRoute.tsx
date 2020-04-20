import React, { useContext} from "react";
import { Route, Redirect,RouteComponentProps } from "react-router-dom";
import { AuthContext } from "./Auth";

interface PropsFromState {
    component: React.ElementType
}

type AllProps = PropsFromState & RouteComponentProps;

const PrivateRoute : React.FC<AllProps> = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};


export default PrivateRoute