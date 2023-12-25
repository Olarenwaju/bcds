/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
      fontFamily: {
        primary: "Poppins",
      }
    },
	},
	plugins: [require("tailwindcss"), require("autoprefixer"), require("daisyui")],
};

