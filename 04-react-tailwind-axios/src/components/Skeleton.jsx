export default function Skeleton(){
    return (
        <div className="overflow-hidden bg-white rounded shadow min-w-96">
            <div className="p-5 animate-pulse">
              <div className="relative">
                <div className="block aspect-w-4 aspect-h-3 h-60 bg-slate-300" />
                <div className="absolute top-4 left-4 h-7 w-48 bg-slate-400 rounded-full" />
              </div>
              <div className="my-6 bg-slate-300 h-6 w-1/2" />

              <p className="my-1 bg-slate-300 h-6" />
              <p className="my-1 bg-slate-300 h-6" />

              <div className="my-6">
                <p className="my-1 bg-slate-300 h-5" />
                <p className="my-1 bg-slate-300 h-5" />
                <p className="my-1 bg-slate-300 h-5 w-1/2" />
              </div>

              <div className="h-10 bg-slate-500 w-full" />
            </div>
          </div>
    )
}