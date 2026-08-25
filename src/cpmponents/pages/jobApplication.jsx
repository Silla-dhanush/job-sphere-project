import { FaPersonDotsFromLine } from "react-icons/fa6";
import { IoLinkSharp } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import { TbListDetailsFilled } from "react-icons/tb";
import { jobCards } from "../../data/jobCards";
import { useParams } from "react-router-dom";

export default function JobApplication() {

    const { id } = useParams();
    const job = jobCards.find((job) => job.id === parseInt(id));

    return (
        <div className="job-application-page flex container mx-auto p-4">
            <div className="job-details w-1/3 p-4">
                <div className="job-cards-container gap-4 justify-center p-6">

                    <div
                        key={job.id}
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
                            
                        </div>


                    </div>

                </div>
            </div>
            <div className="job-application container p-4 border border-gray-300 rounded-lg shadow-md w-3/6">
                <div className="flex items-center gap-2 mb-4">
                    <h1 className="text-lg font-semibold">Job Application Details</h1>
                </div>
                {/* personal information */}
                <div className="personal-info p-4 border border-gray-300 rounded-lg shadow-md">
                    <div className="flex items-center gap-2 mb-4">
                        <FaPersonDotsFromLine className="text-xl text-blue-500" />
                        <h1 className="text-lg font-semibold">Personal Information</h1>
                    </div>
                    <form className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input className="w-full border rounded p-2" type="text" name="fullName" placeholder="Enter your full name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input className="w-full border rounded p-2" type="email" name="email" placeholder="Enter your email" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input className="w-full border rounded p-2" type="text" name="phone" placeholder="Enter your phone number" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Address</label>
                            <input className="w-full border rounded p-2" type="text" name="address" placeholder="Enter your address" />
                        </div>
                    </form>
                </div>
                {/* professional links */}
                <div className="professional-links p-4 border border-gray-300 rounded-lg shadow-md mt-4">
                    <div className="flex items-center gap-2 mb-4">
                        <IoLinkSharp className="text-xl text-blue-500" />
                        <h1 className="text-lg font-semibold">Professional Links</h1>
                    </div>
                    <form className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
                            <input className="w-full border rounded p-2" type="text" name="linkedin" placeholder="Enter your LinkedIn profile URL" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">GitHub</label>
                            <input className="w-full border rounded p-2" type="text" name="github" placeholder="Enter your GitHub profile URL" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Portfolio</label>
                            <input className="w-full border rounded p-2" type="text" name="portfolio" placeholder="Enter your portfolio URL" />
                        </div>
                    </form>
                </div>
                {/* resume upload */}
                <div className="resume-upload p-4 border border-gray-300 rounded-lg shadow-md mt-4">
                    <div className="flex items-center gap-2 mb-4">
                        <FaCloudUploadAlt className="text-xl text-blue-500" />
                        <h1 className="text-lg font-semibold">Resume Upload</h1>
                    </div>
                    <form className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Upload Resume</label>
                            <input className="w-full border rounded p-2" type="file" name="resume" accept=".pdf,.doc,.docx" />
                        </div>
                    </form>
                </div>
                {/* Experience Details */}
                <div className="experience-details p-4 border border-gray-300 rounded-lg shadow-md mt-4">
                    <div className="flex items-center gap-2 mb-4">
                        <TbListDetailsFilled className="text-xl text-blue-500" />
                        <h1 className="text-lg font-semibold">Experience Details</h1>
                    </div>
                    <form className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Company Name</label>
                            <input className="w-full border rounded p-2" type="text" name="companyName" placeholder="Enter your previous company name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Position</label>
                            <input className="w-full border rounded p-2" type="text" name="position" placeholder="Enter your previous position" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Duration</label>
                            <input className="w-full border rounded p-2" type="text" name="duration" placeholder="Enter your experience duration" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Experience</label>
                            <input className="w-full border rounded p-2" type="text" name="experience" placeholder="Enter your experience details" />
                        </div>
                    </form>
                </div>
                {/* Submit Button */}
                <div className="submit-button flex justify-end mt-4">
                    <button type="submit" className="text-white bg-blue-400 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none">Submit Apllication</button>
                </div>
            </div>
        </div>
    )
}