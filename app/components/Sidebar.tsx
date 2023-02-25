import Ads from "./Ads"

function Sidebar() {
  return (
    // <div className="text-gray-500 px-5 pt-5 pb-36 text-xs lg:text-sm border-r border-gray-900 h-screen overflow-y-scroll sm:max-w-[12rem] lg:max-w-[15rem] hidden md:block">
    <div className=" bg-white px-5 border-l-2 border-gray-100 w-1/4 h-full ">
      <div className="flex justify-center">
        <Ads/>
      </div>
    </div>
  )
}

export default Sidebar