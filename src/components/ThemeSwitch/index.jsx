import './index.css'
import { useContext } from "react";
import { Context } from '../../Context.js'


export default function ThemeSwitch() {
    const { setTheme } = useContext(Context);

    const handleSwitch = (e) => {
        const { checked } = e.target
        if (checked) {
            setTheme('dark-theme')
        } else setTheme('light-theme')
    }

    return (
        <div>
        <label className="switch">
            <input type="checkbox" onChange={handleSwitch} />
            <span className="slider"></span>
        </label>
        </div>
    )
}
