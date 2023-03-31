import Link from "next/link";
import React from "react";

import classes from "./button.module.css";

interface buttonType {
  link: string;
  children: JSX.Element | JSX.Element[];
}

export default function Button(props: buttonType) {
  return (
    <Link href={props.link} className={classes.btn}>
      {props.children}
    </Link>
  );
}
