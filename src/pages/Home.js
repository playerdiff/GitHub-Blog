import React, { useEffect, useState } from 'react';
import Profile from '../components/Profile';
import IssueList from '../components/IssueList'; // Importando o componente IssueList
import styles from './Home.module.css';

const Home = () => {
  const username = 'playerdiff'; // Substitua pelo seu nome de usuário do GitHub
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        // Aqui você pode buscar as issues de um repositório específico
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await response.json();

        const issuesPromises = repos.map(repo =>
          fetch(`https://api.github.com/repos/${repo.full_name}/issues`)
        );

        // Aguarda todas as promessas de busca de issues
        const issuesResponses = await Promise.all(issuesPromises);
        const allIssues = await Promise.all(issuesResponses.map(res => res.json()));

        // Achata a lista de issues e filtra apenas as válidas
        const flattenedIssues = allIssues.flat().filter(issue => issue.title); // Verifica se a issue tem título
        setIssues(flattenedIssues);
      } catch (error) {
        console.error('Erro ao buscar issues:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, [username]);

  if (loading) return <div>Carregando...</div>;

  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.welcome}>Bem-vindo ao GitHub Blog</h2>
      <p className={styles.description}>
        Aqui você pode visualizar as issues dos repositórios que você segue.
      </p>
      <Profile username={username} />
      <div className={styles.issuesSection}>
        <h3>Issues dos Repositórios:</h3>
        <IssueList issues={issues} /> {/* Passando as issues como prop */}
      </div>
    </div>
  );
};

export default Home;
