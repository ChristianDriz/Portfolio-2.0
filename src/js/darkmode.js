import { useState, useEffect } from 'react';

function DarkMode() {
    // Get the initial theme from localStorage or default to 'system'
    const initialTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system';
    const [theme, setTheme] = useState(initialTheme);
    
    // Media query to check if the system prefers dark mode
    const darkTheme = window.matchMedia('(prefers-color-scheme: dark)');
    // true = moon, false = sun
    const [icon, setIcon] = useState(false);

    useEffect(() => {
        
        // Function to update the 'dark' class based on localStorage and system matchMedia
        function windowMatch () {
            if (localStorage.theme === 'dark' || darkTheme.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }

        switch (theme) {
            // If the theme is 'dark', set the icon to true (moon) and add 'dark' class to the document
            case 'dark':
                setIcon(true);
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                break;
            
            // If the theme is 'light', set the icon to false (sun) and remove 'dark' class from the document
            case 'light':
                setIcon(false);
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                break;

            // Default case for 'system' theme
            default:
                setIcon(darkTheme.matches);
                localStorage.removeItem('theme');
                windowMatch();
                break;
        }

        // Event listener for changes in the system's matchMedia (e.g., when dark mode is toggled)
        darkTheme.addEventListener('change', (e) => {
            if (!('theme' in localStorage)) {
                // If there is no manual theme set in localStorage, update the icon and 'dark' class based on matchMedia
                if (e.matches) {
                    setIcon(true);
                    document.documentElement.classList.add('dark');
                } else {
                    setIcon(false);
                    document.documentElement.classList.remove('dark');
                }
            }
        });
        
    }, [theme, darkTheme, darkTheme.matches]);

    return { theme, setTheme, icon };
}

export default DarkMode;



// import { useState } from 'react';

// function DarkMode() {

//     let mode = localStorage.getItem('dark') === 'true';

//     if (mode) {
//         document.documentElement.classList.add('dark');
//     } else {
//         document.documentElement.classList.remove('dark')
//     }
    
//     const [enabled, setEnabled] = useState(false);
//     const changeTheme = () => {
//         setEnabled(!enabled);

//         mode = !mode;

//         if (mode){
//             document.documentElement.classList.add('dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//         }
//         localStorage.setItem('dark', mode);
//     };

//     return { changeTheme, enabled };
// }

// export default DarkMode;



