import { Search, UserRound, } from "lucide-react"

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center px-5 py-4 border-b border-[#E0E2EA]">
      <div className="flex justify-between items-center bg-[#f1f2f76e] rounded-sm px-2 w-[625px] h-8">
        <input
          type="search"
          className="w-full h-8 rounded-sm px-3 bg-transparent border-none outline-none placeholder:text-gray-500 text-sm"
          placeholder="Search"
        />
        <Search className="cursor-pointer" color="gray" size={16} />
      </div>

      <div className="flex gap-3 items-center">
        {/* <Bell color="#B0C3CC" /> */}
        <div className="text-end">
          <h1 className="text-[#1F384C] text-sm leading-4 font-medium">
            João Tambue
          </h1>
          <p className="text-[#1F384C] text-xs leading-3">joaotambue@gmail.com</p>
        </div>
        
        <div className="w-8 h-8 rounded-full bg-[#FFE6CC] flex justify-center items-center">
          <UserRound size={20} color="gray" />
        </div>
      </div>
    </div>
  )
}
