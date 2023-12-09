import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {
  const {logOut} = useContext(AuthContext);
  const handleLogOut = ()=>{
    logOut()
    .then(()=>{
      window.location.reload()
    }).catch((error)=>{
      console.log('error')
    })
  }


  const handleCloseDrawer= () =>{
    const drawerCheckbox = document.getElementById('my-drawer-4');
    if(drawerCheckbox){
      drawerCheckbox.checked = false;
    }
  }


  return (
    <div className="navbar h-20 text-white  bg-green-800">

      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>

          {/* logo of the website click on the logo the website will go to the main page */}
        </div>
            <Link to={"/"}>
            <img
                className="w-[170px] h-[150px] "
                src="../../../picture/logo.png"
                alt=""
            />
            </Link>
        </div>


      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>


      <div className="navbar-end">
        <div>
            <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-ghost"
                >
                {" "}
                Hello,sign in
                <br />
                Account & Lists <IoIosArrowDroprightCircle />
                </label>
            </div>
            <div className="drawer-side ">
                <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}

                {/* sign IN here */}
                <li className="mx-auto">
                    <Link to={'/login'}>
                        <button onClick={handleCloseDrawer} className="btn px-10 btn-sm bg-yellow-500">Sign in</button>
                    </Link>
                </li>

                    {/* register NOw here */}
                    <div className="flex mx-auto mb-3">
                        <p className="pr-1 ">New customer?</p> <Link to={'/signUP'} className="hover:text-yellow-400 hover:underline">Start here</Link>
                    </div>
                    <hr />
                <li>
                    <button onClick={handleLogOut} className="btn btn-xs btn-ghost">Sign out</button>
                </li>
                </ul>
            </div>
            </div>
        </div>
        <button className="btn btn-ghost">
            Returns <br />
            & Orders
        </button>

        <div className="ml-5">
            <Link>< MdOutlineShoppingCart size={30} /></Link>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
