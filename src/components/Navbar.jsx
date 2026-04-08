import { NavLink, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { pathname } = useLocation(); //idhar apan ne useLocation lagaya kyuki home pe se isActive hat nahi raha tha kyu ki home pe path apan ne "" blank route laga rakhi thi and uska parent bhi blank hai matlab /dashboard pe <MainLayout> bhi render ho raha hai ar turant <Home> ye wala bhi render ho raha hai ar /dashboard badal bhi nii raha hai 
  const { setLoginUser } = useAuth();

  return (
    <div className="flex flex-col h-screen w-64 px-4 py-8 justify-between border-r border-gray-500 bg-white">
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl font-bold">Logo</h1>
        <div className="flex flex-col gap-5 text-xl">
          <NavLink
            className={({ isActive }) =>
              isActive && pathname === "/dashboard"
                ? "text-red-600 font-semibold"
                : "text-gray-700 hover:text-red-500 transition-colors"
            }
            to="/dashboard"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-600 font-semibold" : "text-gray-700 hover:text-red-500 transition-colors"
            }
            to="/dashboard/about/9"
          >
            About
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-600 font-semibold" : "text-gray-700 hover:text-red-500 transition-colors"
            }
            to="/dashboard/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("Logged user-->");
          setLoginUser(null); //idhar humne navigate nahi kiya hai fir bhi wo auth pe chala jayega kyuki jo protected route hai wo wapas se ek baar rerender hoga kyu rerender hoga kyuki humne setLoginUser(null) ye kiya hai ye poore app ko rerender karega ar ye jab app rerender hoga tab tumhare dono protected route rerender honge ar wo dekh lenge kisme kya nahi hai ar according to there logics wo yaha pe aa jayega 
        }}
        className="bg-black text-white py-3 text-xl cursor-pointer rounded-xl hover:bg-gray-800 transition-all active:scale-95"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;


  //NavBar ke andar NavLink tabhi kaam karega jab BrouserRouter Wrap hoga