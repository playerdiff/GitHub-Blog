import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchIssues } from '../api';

const IssuePage = () => {
  const { issueNumber } = useParams();
  const [issue, setIssue] = useState(null);
  const repo = 'username/repo'; // Altere para o seu repositório

  useEffect(() => {
    const getIssue = async () => {
      const issues = await fetchIssues(repo);
      const foundIssue = issues.find(issue => issue.number === parseInt(issueNumber));
      setIssue(foundIssue);
    };
    getIssue();
  }, [issueNumber, repo]);

  if (!issue) return <div>Loading...</div>;

  return (
    <div>
      <h1>{issue.title}</h1>
      <p>{issue.body}</p>
      <p>Created at: {new Date(issue.created_at).toLocaleDateString()}</p>
    </div>
  );
};

export default IssuePage;
