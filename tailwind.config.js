/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
        container: {
            screens: {
                'sm' : '640px',
                'md' : '768px',
                'lg' : '1024px',
                'xl' : '1280px',
                '2xl' : '1400px',
            },
        },
        fontFamily: {
            'sans': ['Poppins'],
        },
        extend: {
            colors: {
                'black': '#1A1D21',
                'darkwhite': '#F6F6F6',
                'blue': '#60A5FA',
                'light-red': '#F87171',
                'midnight': '#1C232D',
                'subtxt-light': '#475569',
                'subtxt-dark': '#94A3B8',
                'outline' : '#DBDBDB',
                'label' : '#838383'
            },
            keyframes: {
                animate: {
                    '0%' : { 
                        'border-radius' : '60% 40% 30% 70% / 60% 30% 70% 40%',  
                    },
                    '50%' : {
                        'border-radius' : '40% 60% 70% 40% / 50% 60% 30% 60%',
                    },
                    '100%' : {
                        'border-radius' : '60% 40% 30% 70% / 60% 30% 70% 40%',
                    },
                },
            },
            animation: {
                animate: 'animate 3s ease-in-out infinite',
            },
        },
    },
  plugins: [],
}

