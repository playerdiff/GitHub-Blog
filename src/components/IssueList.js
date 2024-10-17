import React from 'react';
import styles from './IssueList.module.css';

const IssueList = ({ issues }) => {
  return (
    <div className={styles.issueListContainer}>
      {issues.map(issue => (
        <div key={issue.id} className={styles.issueCard}>
          <div className={styles.issueContent}>
            <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
              <h3 className={styles.issueTitle}>{issue.title}</h3>
            </a>
            <p className={styles.issueDescription}>
              {issue.body ? issue.body.substring(0, 150) + '...' : 'No description provided.'}
            </p>
          </div>
          <div className={styles.issueFooter}>
            <span className={styles.issueDate}>
              Criado em: {new Date(issue.created_at).toLocaleDateString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IssueList;
