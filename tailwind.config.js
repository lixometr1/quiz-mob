module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {
            spacing: {
                '36': '8rem',
                '65px':'65px'
            },
            minWidth: {
                '65px':'65px'
            },
            colors: {
                'primary': '#F7AB0D',
                'secondary': '#E40505',
                'accept': '#1BD741'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
