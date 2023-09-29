
import Banner from "./Banner";
import icon from '../../assets/search.png'
import Progress from "./Progress";
import Best from "./Best";
import Chart from "./Chart";
import Summary from "./Summary";
import { FaAdjust, FaBeer, FaEye, FaSquare } from 'react-icons/fa';


const Header = () => {
    return (
  <>
  <div className="">
  <div className="navbar bg-base-100">
  <div className="navbar-start flex">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <div className="">
     <div className="">
     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
     </div>


  </div>
     
    </div>
    <div className="">
<ul className="btn btn-ghost normal-case text-xl">Welcome Home Admin</ul>
</div>
  </div>
 
  <div className="navbar-end">
  <button className="btn btn-ghost btn-circle ">
     <FaEye className="text-xl"></FaEye>
    </button> <button className="btn btn-ghost btn-circle ">
     <FaAdjust className="text-xl"></FaAdjust>
    </button>

  <button className="btn btn-ghost btn-circle ">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.ibb.co/pQhNLR6/images.jpg" />
        </div>
      </label>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>
  </div>
       <div className="">
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
<Banner></Banner>
<Progress></Progress>

<Chart></Chart>


<Best></Best>
<Summary></Summary>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-violet-200  text-base-content">
      {/* Sidebar content here */}
      <li className="">
      <div className="flex justify-normal">
      <img className="w-24" src={icon} alt="" />
      <p  className=" text-pink-800 font-bold">Fashion Gallary</p>
      </div>
    
      </li>
      <li className="">_______________________________</li>
      <li className="text-xl"><a><FaSquare className="text-pink-800"></FaSquare> Admin Home</a></li>
      <li  className="text-xl"><a><FaSquare className="text-pink-800"></FaSquare>  Manage User</a></li>
      <li  className="text-xl"><a href=""><FaSquare className="text-pink-800"></FaSquare>  Add A New Product</a></li>
      <li className="">_______________________________</li>
      <li className="text-xl"><a><FaSquare className="text-pink-800"></FaSquare> Setting</a></li>
      <li  className="text-xl"><a><FaSquare className="text-pink-800"></FaSquare>  All User</a></li>
      <li  className="text-xl"><a href=""><FaSquare className="text-pink-800"></FaSquare> Production</a></li>
      <li className="">_______________________________</li>
      <li className="text-xl"><a><FaSquare className="text-pink-800"></FaSquare> Progress</a></li>
      <li  className="text-xl"><a><FaSquare className="text-pink-800"></FaSquare> Employee status</a></li>
      <li  className="text-xl"><a href=""><FaSquare className="text-pink-800"></FaSquare>App Management</a></li>
    
    </ul>
  
  </div>
</div>
       </div>
       </>
    );
};

export default Header;