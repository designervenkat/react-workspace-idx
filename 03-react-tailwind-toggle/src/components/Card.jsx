export default function Card(){
    return (
        <div className="w-96 rounded-sm bg-slate-200 dark:bg-slate-800 shadow-sm transition-colors duration-700">

            <img src="https://images.unsplash.com/photo-1605784401368-5af1d9d6c4dc?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="laptop" className="h-[200]px w-full rounded-t-xl object-cover" />

            <div className="p-4">

                <h1 className="inline-flex items-center text-base font-semibold text-slate-900 dark:text-slate-200">
                    Macbook Pro
                </h1>

                <p className="mt-3 text-sm text-slate-500 dark:text-slate-200">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>

                <div className="mt-4 w-72">
                    <span className="mb-2 mr-2 inline-block rounded-full bg-white dark:bg-slate-600 px-3 py-1 text-[10px] font-semibold text-gray-900 dark:text-gray-300">
                        #Macbook
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-white dark:bg-slate-600 px-3 py-1 text-[10px] font-semibold text-gray-900 dark:text-gray-300">
                        #Apple
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-white dark:bg-slate-600 px-3 py-1 text-[10px] font-semibold text-gray-900 dark:text-gray-300">
                        #Laptop
                    </span>
                </div>

                <button type="button"
                    className="mt-4 w-full rounded-sm bg-slate-800 dark:bg-slate-950 hover:dark:bg-indigo-500 h-12 transition-colors duration-500">
                        Add to Cart
                </button>

            </div>

        </div>
    )
}