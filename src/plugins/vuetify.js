// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

const myTheme = {
	dark: false,
	colors: {
		smokyBlack: "#393E46",
		mintCream: "#F0F7EE",
		oxfordBlue: "#102542",
		bittersweet: "#F87060",
		khaki: "#B3A394",
		platinum: "#CDD7D6",
	},
};

export default createVuetify({
	theme: {
		defaultTheme: "myTheme",
		themes: {
			myTheme,
		},
	},
});
