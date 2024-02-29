"use client"
import Link from "next/link"
import { Search } from "@mui/icons-material";
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const [search, setSearch] = useState<string>("");
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const router=useRouter();
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className={`top-0 z-10 stickt flex items-center justify-between py-3 px-10 ${isScrolled && "bg-black-1"}`}>
    <Link href="/">
      <img src="/assets/logo.png" alt="logo" className="logo" />
    </Link>

    <div className="flex gap-8 max-md:hidden">
      <Link href="/" className="text-white text-heading3-bold cursor-pointer hover:text-pink-1">
        Home
      </Link>
      <Link href="/my-list" className="text-white text-heading3-bold cursor-pointer hover:text-pink-1">
        My List
      </Link>
    </div>

    <div className="flex gap-8 items-center">
      <div className="flex justify-between items-center gap-2 px-4 py-2 rounded-xl">
        <input
          placeholder="Search movie..."
          className="w-40 bg-transparent outline-none text-body-medium text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
         <button disabled={search === ""}>
          <Search
            className="size-7 cursor-pointer text-white hover:text-pink-1"
            onClick={()=>router.push(`/search/${search}`)}
          />
         </button>
      </div>

      <img
        src="/assets/profile_icon.jpg"
        className="w-8 h-auto cursor-pointer"
        alt="profile"
        onClick={() => setDropdownMenu(!dropdownMenu)}
      />

      {dropdownMenu && (
        <div className="absolute top-20 p-3 flex flex-col gap-3 right-5 z-20 w-32 bg-white rounded-xl">
          <Link href="/">Home</Link>
          <Link href="/my-list">My List</Link>
          <a className="text-base-bold text-black-1 hover:text-pink-1 cursor-pointer">Log Out</a>
        </div>
      )}
    </div>
  </div>

   
  )
}

export default Navbar
