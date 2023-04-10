import {
  ReactFragment,
  ReactPortal,
  ReactElement,
  JSXElementConstructor,
} from "react";
import classes from "./error-alert.module.css";

function ErrorAlert(props: {
  children:
    | string
    | number
    | boolean
    | ReactFragment
    | ReactPortal
    | ReactElement<any, string | JSXElementConstructor<any>>
    | null
    | undefined;
}) {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
