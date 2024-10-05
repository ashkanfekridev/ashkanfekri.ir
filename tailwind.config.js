/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector',
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
        "./nuxt.config.ts",
        "./content/**/*.{md}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["dana"],
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}