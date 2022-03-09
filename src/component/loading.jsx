export default function Loading() {
  return (
    <div className="absolute bottom-10 animate-pulse rounded-xl z-10 account w-64 h-36 bg-[#0D7377]">
      <div className="relative animate-pulse flex space-x-4 z-20">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-8 bg-blue-450 rounded " />
          <div className="space-y-2">
            <div className="h-4 bg-blue-450 rounded w-3/4" />
            <div className="h-4 rounded w-3/6" />
            <div className="h-4 rounded w-3/6" />
            <div className="flex justify-between">
              <div className="h-4 bg-blue-450 rounded w-1/4" />
              <div className=" rounded-full bg-blue-450 h-12 w-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
