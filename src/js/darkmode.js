import { useState, useEffect } from 'react';

function DarkMode() {
    
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        
        // Load theme preference from local storage on component mount
        const theme = localStorage.getItem('dark') === 'true';

        // Set the initial theme based on the preference
        if (theme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Set the initial state based on the preference
        setEnabled(theme);
        }, []); 

        const changeTheme = () => {

            const newTheme = !enabled;

            setEnabled(newTheme);

            if (newTheme) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }

            localStorage.setItem('dark', newTheme);
        };

    return { changeTheme, enabled };
}

export default DarkMode;