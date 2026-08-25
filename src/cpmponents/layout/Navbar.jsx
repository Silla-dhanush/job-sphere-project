import "./Navbar.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

    return (
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
      <div className="flex lg:flex-1">
        <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-x-2">
            <span className="text-xl font-bold text-blue-600">JobSphere</span>
        </Link>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <Link to="/jobs" className="text-sm/6 font-semibold text-blue-500">Opportunities</Link>
        <Link to="/preparation" className="text-sm/6 font-semibold text-blue-500">Preparation</Link>
        <Link to="/courses" className="text-sm/6 font-semibold text-blue-500">Courses</Link>
      </div>
      <div className="hidden lg:flex lg:flex-1 gap-4 lg:justify-end">
        <button type="button" onClick = { () => { navigate('/register') }} className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none">Register</button>
        <button type="button" onClick = { () => { navigate('/postJob') }} className="text-white bg-blue-600 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none">Post a Job</button>
      </div>
    </nav>
    );
}

