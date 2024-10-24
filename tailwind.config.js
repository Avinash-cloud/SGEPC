/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const { addDynamicIconSelectors } = require('@iconify/tailwind');
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons");

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}", // Adjust paths according to your app structure
        "./src/**/*.{js,ts,jsx,tsx}",
        'node_modules/preline/dist/*.js', // Include preline JS if used
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        fontFamily: {
            base: ['"Montserrat"', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: {
                    ...colors.blue,
                    DEFAULT: colors.blue[500],
                },
                default: {
                    ...colors.gray,
                },
                secondary: '#747a80',
                success: '#20b799',
                info: '#3cbade',
                warning: '#efb540',
                danger: '#fa5944',
                light: '#e9edf3',
                dark: '#222a3e',
            },
            spacing: {
                15: '60px',
                18: '72px',
                sidenav: '280px',
                'layout-gap': '16px',
            },
            zIndex: {
                60: '60',
                70: '70',
            },
            minWidth: theme => ({
                ...theme('width'),
            }),
            maxWidth: theme => ({
                ...theme('width'),
            }),
            minHeight: theme => ({
                ...theme('height'),
            }),
            maxHeight: theme => ({
                ...theme('height'),
            }),
        },
    },
    plugins: [
        require('preline/plugin'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.fill-1': {
                    fontVariationSettings: "'FILL' 1",
                },
            });
        }),
        iconsPlugin({
            collections: getIconCollections("all"),
        }),
    ],
};
