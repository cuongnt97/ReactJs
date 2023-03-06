import React from "react";
import PropTypes from 'prop-types';
import "./Box.css";

/**
 * @typedef BoxProps
 * 
 * @property {string} color mau nen cho box
 * @property {() => void} onClick su kien khi click vao box
 */

/**
 * @param {BoxProps} props
 * @returns {ReactNode}
 */
export default function Box({ color, index, onClick }) {
  return (
    <div onClick={onClick} className="box" index={index} style={{ backgroundColor: color }}></div>
  );
}

Box.propTypes = {
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}