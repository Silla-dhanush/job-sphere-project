import { jobCards } from "../../data/jobCards";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function JobCard() {
  const navigate = useNavigate();
  return (
    <div id="opportunities" className="job-cards-section container mx-auto w-3/4">
        <div className="flex justify-between mt-10 items-center">
            <h2 className="text-2xl font-bold">Latest Job Opportunities</h2>
            <Link to="/jobs" className="flex items-center gap-2 cursor-pointer text-blue-500 hover:text-blue-700">
                <span>View All Jobs</span>
                <GoArrowRight  />
            </Link>
            
        </div>
    <div className="job-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mt-10 p-4">
      {jobCards.slice(0, 3).map((job, index) => (
        <div
          key={index}
          className="job-card flex flex-col gap-2 p-4 border border-gray-300 rounded-lg shadow-md"
        >
          <h3 className="job-role text-lg font-bold">{job.jobRole}</h3>
          <div className="flex items-center gap-2">
            <p>{job.companyName}</p>
            <p className="company-name text-black-50 text-xs max-w-xs p-1">{job.location}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="type bg-blue-50 text-black-50 text-xs rounded max-w-xs p-1">{job.type}</p>
            <p className="work-mode bg-green-50 text-black-50 text-xs rounded max-w-xs p-1">{job.workMode}</p>
            <p className="stipend bg-yellow-50 text-black-50 text-xs rounded max-w-xs p-1">{job.stipend}</p>
          </div>
          <p className="experience text-black-50 text-xs max-w-xs p-1">{job.experienceRequired}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
            <span className="skill bg-blue-50 text-black-50 text-xs rounded max-w-xs p-1">{job.skill1}</span>
            <span className="skill bg-blue-50 text-black-50 text-xs rounded max-w-xs p-1">{job.skill2}</span>
            </div>
            <button onClick = { () => {console.log(job.id); navigate(`/apply/${job.id}`); } } type="button" className="text-white bg-blue-400 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none">Apply Now</button>
          </div>
            

        </div>
      ))}
    </div>
    </div>
    
  );
}
