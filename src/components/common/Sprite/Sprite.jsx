import React from "react";
import SVGSprite from "react-svg-sprite";

const Sprite = () => {
  return (
    <SVGSprite
      symbols={[
        {
          name: "camera",
          fill: "currentColor",
          svg: '<svg viewBox="0 0 96 96"><switch><g><path d="M84 19.999H72L64 8H32l-8 12H12C5.37 20 0 25.434 0 32.062V76c0 6.63 5.37 12 12 12h72c6.63 0 12-5.309 12-11.938V32.124c0-6.63-5.37-12.125-12-12.125zm4 56.063C88 78.273 86.243 80 84 80H12c-2.206 0-4-1.794-4-4V32.062C8 29.823 9.794 28 12 28h16.281l8-12h23.578l7.859 12H84c2.168 0 4 1.889 4 4.125v43.937zM48 32c-11.046 0-20 8.955-20 20s8.955 20 20 20c11.046 0 20-8.954 20-20s-8.954-20-20-20zm0 32c-6.617 0-12-5.383-12-12s5.382-12 12-12c6.617 0 12 5.383 12 12s-5.384 12-12 12z"/></g></switch></svg>',
        },
        {
          name: "arrow-right",
          fill: "currentColor",
          svg: '<svg viewBox="0 0 96 96"><path d="m66.666 65.286 11.953-11.953H10v-6.667h68.619L66.67 34.713 71.383 30l17.644 17.643a3.334 3.334 0 0 1-.003 4.713L71.38 70l-4.714-4.714z"/></svg>',
        },
        {
          name: "drag",
          fill: "currentColor",
          svg: '<svg width="23" height="24" viewBox="0 0 23 24" fill="none" ><line x1="1.67685" y1="19.1409" x2="17.736" y2="1.30539" stroke="#979797" stroke-width="2"/><line x1="7.85695" y1="21.3927" x2="18.563" y2="9.5024" stroke="#979797" stroke-width="2"/><line x1="13.6568" y1="23.4409" x2="20.0136" y2="16.381" stroke="#979797" stroke-width="2"/></svg>',
        },
      ]}
    />
  );
};

export default Sprite;
