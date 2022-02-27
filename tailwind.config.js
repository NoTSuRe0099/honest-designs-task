module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-text": "#0F1032",
                "btn-primary": "#003459",
            },
        },
    },
    plugins: [
        // ...
        require("@tailwindcss/line-clamp"),
    ],
};
