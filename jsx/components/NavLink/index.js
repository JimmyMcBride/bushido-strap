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
  boxSize,
  buttonColor,
  buttonBackground,
  btnMarg,
  btnPad,
  textCenter,
} from "../../../styled/maps";

import PropTypes from "prop-types";

const NavLink = (props) => {
  return (
    <Link
      {...props}
      // path={props.path}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          style: {
            color: isCurrent ? "white" : theme.colors.primary,
            background: isCurrent ? theme.colors.primary : "white",
          },
        };
      }}
    />
  );
};

const Link = styled(Lnk)`
  display: flex;
  flex-wrap: ${flexWrap};
  flex-direction: ${(props) =>
    props.direction ? props.direction : columnDirection};
  justify-content: ${(props) => (props.justify ? props.justify : flexJustify)};
  align-items: ${(props) => (props.align ? props.align : centerAlign)};
  align-content: ${(props) => (props.content ? props.content : flexContent)};
  color: ${(props) => (props.color ? props.color : buttonColor)};
  background: ${(props) => (props.bg ? props.bg : buttonBackground)};
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) => (props.radius ? props.radius : "0.5rem")};
  width: ${(props) => (props.w ? props.w : sideways)};
  height: ${(props) => (props.h ? props.h : "auto")};
  margin: ${(props) => (props.m ? props.m : btnMarg)};
  padding: ${(props) => (props.p ? props.p : btnPad)};
  opacity: ${(props) => (props.opacity ? props.opacity : "none")};
  box-sizing: ${(props) => (props.box_size ? props.box_size : boxSize)};
  text-align: ${textCenter};
`;

export default NavLink;

NavLink.propTypes = {
  path: PropTypes.string,
};
