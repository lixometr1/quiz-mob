module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {
            spacing: {
                '36': '8rem',
                '65px':'65px',
                'quizh':'600px',
            },
            minWidth: {
                '65px':'65px'
            },
            maxHeight:{
                'quizh':'600px',
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
