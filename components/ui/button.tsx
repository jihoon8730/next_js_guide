import Link from "next/link";
import React, { MouseEventHandler } from "react";

import classes from "./button.module.css";

interface buttonType {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  link: string;
  children: JSX.Element | JSX.Element[];
}

export default function Button(props: buttonType) {
  if (props.link) {
    return (
      <Link href={props.link} className={classes.btn}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
