import React, { FC, useMemo } from "react";
import "./Spinner.scss";

interface SpinnerInt {
  width: number;
}

const Spinner: FC<SpinnerInt> = ({ width }) => {
  const piecesStyle = useMemo(() => {
    return {
      width: width * 0.8,
      height: width * 0.8,
      margin: width * 0.1,
      borderWidth: width * 0.125,
    };
  }, [width]);

  return (
    <div className="lds-ring" style={{ width: width }}>
      <div style={piecesStyle}></div>
      <div style={piecesStyle}></div>
      <div style={piecesStyle}></div>
      <div style={piecesStyle}></div>
    </div>
  );
};

export default Spinner;
