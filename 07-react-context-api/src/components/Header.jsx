import React from 'react'
import Toggle from './Toggle'

export default function Header() {
    return (
        <div className=" w-[720px] bg-slate-200 dark:bg-slate-700 absolute top-5 transform left-1/2 -translate-x-1/2">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2">
                    <span className="font-bold text-slate-700 dark:text-white">
                        Theme Context API
                    </span>
                </div>
                <div className="hidden lg:block">{/* TODO */}</div>
                <div className="block">
                    <Toggle />
                </div>
            </div>
        </div>
    )
}
