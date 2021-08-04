// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask37IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask37Icon(props: Mask37IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"2.152"}
        cy={"2.152"}
        r={"2.152"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Mask37Icon;
/* prettier-ignore-end */
