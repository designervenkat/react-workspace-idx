import useTheme from '../contexts/theme-context/ThemeContext'
import { Moon, SunMoon } from 'lucide-react'

export default function Toggle() {
    const { themeMode, darkTheme, lightTheme } = useTheme()

    const handleChangeTheme = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkTheme()
        } else lightTheme()
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer my-2">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={handleChangeTheme}
                checked={themeMode === 'dark'}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-900 peer-checked:bg-slate-900 flex">
                <Moon strokeWidth={3} className="w-4 mx-1 text-yellow-400" />
                <SunMoon strokeWidth={3} className="w-4 mx-1 text-white-400" />
            </div>
        </label>
    )
}
