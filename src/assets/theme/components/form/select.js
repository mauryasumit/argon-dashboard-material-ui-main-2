/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2022 RainBow Tech (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Argon Dashboard 2 MUI base styles
import colors from "assets/theme/base/colors";

// Argon Dashboard 2 MUI helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { transparent } = colors;

const select = {
  styleOverrides: {
    select: {
      display: "grid",
      alignItems: "center",
      padding: `0 ${pxToRem(12)} !important`,

      "& .Mui-selected": {
        backgroundColor: transparent.main,
      },
    },

    selectMenu: {
      background: "none",
      height: "none",
      minHeight: "none",
      overflow: "unset",
    },

    icon: {
      display: "none",
    },
  },
};

export default select;
