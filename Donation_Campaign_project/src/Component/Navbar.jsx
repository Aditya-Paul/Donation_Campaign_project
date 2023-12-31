import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="mt-4">
            <nav className="flex justify-between items-center py-6  px-5">

                <div>
                    <img src="https://i.ibb.co/zmXwqyK/Logo.png" alt="" />
                </div>

                <ul className="flex gap-5">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>

                    
                    
                </ul>

            </nav>
        </div>
    );
};

export default Navbar;