import { AiFillCloseCircle } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { Link, useNavigation } from 'react-router-dom';
import Footer from "../Footer.jsx";
import { useDispatch, useSelector } from "react-redux";

function HomeLayout({ children }) {
    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';
    }

    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = '0';
    }

    const isLoggedin = useSelector((state) => state?.auth?.isLoggedin);
    const role = useSelector((state) => state?.auth?.role);

    function handelLayout(e) {
        e.preventDefault();
        console.log("Layout handled");
    }

    return (
        <div className="min-h-[90vh]   bg-slate-900">
            <div className="drawer absolute left-0 z-50 w-full">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer">
                        <FiMenu onClick={changeWidth} size={"32px"} className="font-bold text-white m-4" />
                    </label>
                </div>
                <div className="drawer-side w-0">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-48 sm:w-80 bg-base-200  text-base-content relative h-full">
                        <li className="w-fit absolute right-2 z-50">
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>
                        <li>
                            <Link to="/"> Home </Link>
                        </li>
                        {isLoggedin && role === "ADMIN" && (
                            <li>
                                <Link to="/admin/dashbord">Admin Dashboard</Link>
                            </li>
                        )}
                        <li>
                            <Link to="/about"> About us </Link>
                        </li>
                        {!isLoggedin && (
                            <li className="absolute bottom-4 w-[90%]">
                                <div className="w-full flex items-center justify-center">
                                    <Link to="/Login" className="btn btn-primary px-4 py-1 font-semibold rounded-md w-[40%] text-center">
                                        Login
                                    </Link>
                                    <Link to="/Signup" className="btn btn-secondary px-4 py-1 font-semibold rounded-md w-[40%] text-center">
                                        Signup
                                    </Link>
                                </div>
                            </li>
                        )}
                        {isLoggedin && (
                            <li className="absolute bottom-4 w-[80%]">
                                <div className="w-full flex items-center justify-center">
                                    <Link to="/user/profile" className="btn btn-primary px-4 py-1 font-semibold rounded-md w-[40%] text-center">
                                        Profile
                                    </Link>
                                    <button onClick={handelLayout} className="btn btn-secondary px-4 bg-slate-500 py-1 font-semibold rounded-md w-[40%]">
                                        Logout
                                    </button>
                                </div>
                            </li>
                        )}
                        <li>
                            <Link to="/contact"> Contact us </Link>
                        </li>
                        <li>
                            <Link to="/courses"> All courses </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {children}
            <Footer />
        </div>
    );
}

export default HomeLayout;
