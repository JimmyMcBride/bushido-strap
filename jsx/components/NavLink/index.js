import React from "react";

import { NavLink as Lnk } from "react-router-dom";
import { theme } from "../../../styled/theme";

import styled from "styled-components";
import {
  flexWrap,
  columnDirection,
  flexJustify,
  centerAlign,
  flexContent,
  sideways,
  longways,
  boxSize,
  buttonColor,
  buttonBackground,
  btnMarg,
  btnPad,
  textCenter,
} from "../../../styled/maps";

import PropTypes from "prop-types";

const NavLink = props => {
  return (
    <Link
      {...props}
      // path={props.path}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          style: {
            color: isCurrent ? "white" : theme.primary,
            background: isCurrent ? theme.primary : "white",
          },
        };
      }}
    />
  );
};

export default NavLink;

// NavLink.propTypes = {
//   path: PropTypes.string,
// };
