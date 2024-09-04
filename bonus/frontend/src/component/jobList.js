import React from 'react';
import JobCard from './jobcard';

const jobs = [
  {
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    description: 'Building modern web applications with React and MUI.'
  },
  {
    title: 'Backend Developer',
    company: 'DataSolutions',
    location: 'New York, NY',
    description: 'Working with Node.js and MongoDB to build scalable backend systems.'
  },
  // Add more job objects here...
];

const JobList = () => {
  return (
    <div>
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default JobList;
