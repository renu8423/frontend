import { Link } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout.jsx";
import homepage from "../assets/image/homePageMainImage.png";

function HomePage() {
    return (
        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-5xl font-semibold">
                        Find out best <span className="text-yellow-500 font-bold">Online courses</span>
                    </h1>
                    <p className="text-xl text-gray-200">
                        PW Skills is your one-stop-shop for upscaling. Get maximum value for time and resources you invest,
                        with job-ready courses & high-technology, available at the lowest cost.
                    </p>
                    <div className="space-x-6">
                        <Link to="/courses">
                            <button className="rounded-md py-3 px-5 border-2 border-yellow-300 bg-yellow-300 font-semibold text-lg hover:bg-yellow-600 cursor-pointer transition-all ease-in-out">
                                Explore Courses
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="rounded-md py-3 px-5 border-2 border-yellow-300 text-yellow-300 font-semibold text-lg hover:bg-yellow-600 cursor-pointer transition-all ease-in-out">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center items-center w-1/2">
                    <img src={homepage} alt="HomePageImage" className="max-w-full h-auto" />
                </div>
            </div>
        </HomeLayout>
    );
}

export default HomePage;

// Notes:
// 1. Replaced invalid paths like "*/courses" and "*/contect" with "/courses" and "/contact".
// 2. Ensured buttons have correct Tailwind classes.
// 3. Added "max-w-full h-auto" to the image for proper scaling.
// 4. Double-checked "HomeLayout" as the parent container to ensure alignment issues are not due to its layout.

