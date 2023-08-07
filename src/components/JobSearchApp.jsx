
import React, { useState, useEffect } from "react";
import { getJobs } from "../utils/api";
import JobCard from "./JobCard";
//import ErrorBoundary from "./ErrorBoundary"; 

const JobSearchApp = () => {
  const [form, setForm] = useState({
    jobSearch: '',
    locationSearch: '',
  });
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchData(form.jobSearch, form.locationSearch);
  }, [form.jobSearch, form.locationSearch]);

  const fetchData = async (jobSearch, locationSearch) => {
    try {
      const response = await getJobs(jobSearch, locationSearch, 1, 1);
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching job data:', error);
      setJobs([]);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(form.jobSearch, form.locationSearch);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Job Search:
          <input
            type="text"
            name="jobSearch"
            value={form.jobSearch}
            onChange={handleChange}
          />
        </label>
        <label>
          Location Search:
          <input
            type="text"
            name="locationSearch"
            value={form.locationSearch}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <div>
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <JobCard key={index} title={job.job_title} location={job.location} />
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default JobSearchApp;