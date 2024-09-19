import ToggleSwitch from "./components/ToggleSwitch";
import Card from './components/Card'

export default function App(){
  return(
    <div className="bg-white dark:bg-slate-950 flex flex-col items-center justify-center h-screen mx-auto w-svw gap-y-10">
      <h2 className="text-black dark:text-white">React with tailwind and toggle dark mode</h2>
      <ToggleSwitch />
      <Card/>
    </div>
  )
}