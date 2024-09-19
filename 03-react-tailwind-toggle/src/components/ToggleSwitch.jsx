import {useEffect, useState} from "react"
import { Moon, SunMoon } from 'lucide-react';
export default function ToggleSwitch(){
    
    const [isDarkMode, setIsDarkMode] = useState(false)


    useEffect(() => {
        const htmlEl = document.documentElement
        if(isDarkMode) {
            htmlEl.classList.add("dark")
        } else {
            htmlEl.classList.remove("dark")
        }
    }, [isDarkMode])



    return (
        <div className="p-4 w-48 bg-slate-300 dark:bg-slate-800 rounded shadow-sm">
            <label className="flex items-center cursor-pointer" >
                <div className="relative">
                    <input type="checkbox"
                    className="sr-only"
                    checked={isDarkMode}
                    onChange={() => setIsDarkMode(!isDarkMode)} />

                    <div 
                    className="bg-slate-800 w-14 h-8 rounded-full flex items-center justify-between px-2">

                        <Moon className="w-4" />
                        <SunMoon className="w-4 text-yellow-500" />
                    </div>

                    <div className={`absolute left-0 top-0 bg-white w-8 h-8 rounded-full transition ${
                        isDarkMode ? "transform translate-x-full bg-gray-800" : ""
                    }`}/>
                    
                </div>
                <div className="ml-3 text-slate-700 dark:text-gray-300">
                    {isDarkMode ? "Dark Mode" : "Light Mode"}
                </div>
            </label>

        </div>
    )
}