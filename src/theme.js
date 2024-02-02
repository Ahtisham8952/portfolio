import "@fontsource/poppins";
import "@fontsource/raleway";
import "@fontsource/inter";

import "./Fonts";

import { extendTheme } from "@chakra-ui/react";

export const mynewtheme = extendTheme({
  colors: {
    primary: "#258CEC ",
    secondry: "#6943FF",
  },
  components: {
    Tabs: {
      variants: {
        line: {
          tab: {
            color: "#FFFFFF",
            borderbottom: "none",

            _selected: {
              borderColor: "#12BDF3",
              borderbottom: "2px solid",
              color: "#258CEC",
            },
          },
        },
      },
    },
  },

  breakpoints: {
    sm: "480px",
    md: "768px",
    lg: "991px",
    xl: "1280px",
    xxl: "1440px",
    xxxl: "1660px",
  },
  fonts: {
    dinFonts: `"D-DIN", sans-serif`,
    body: `"Poppins", sans-serif;`,
    raleway: `"Raleway", sans-serif;`,
    rajdhaniFont: `"Rajdhani", sans-serif;`,
  },
});
