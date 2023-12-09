import { useState } from 'react';

function DarkMode() {

    let mode = localStorage.getItem('dark') === 'true';

    if (mode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }
    
    const [enabled, setEnabled] = useState(false);
    const changeTheme = () => {
        setEnabled(!enabled);

        mode = !mode;

        if (mode){
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('dark', mode);
    };

    return { changeTheme, enabled };
}

export default DarkMode;