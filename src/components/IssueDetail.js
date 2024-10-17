// src/components/IssueDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchIssueDetail } from '../api'; // Verifique se essa função está definida em api.js

const IssueDetail = () => {
  const { number } = useParams();
  const [issue, setIssue] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getIssueDetail = async () => {
      try {
        const data = await fetchIssueDetail('seu_usuario/seu_repositorio', number); // Insira seu repositório aqui
        setIssue(data);
      } catch (error) {
        console.error('Erro ao buscar detalhes da issue:', error);
      } finally {
        setLoading(false);
      }
    };

    getIssueDetail();
  }, [number]);

  if (loading) return <div>Carregando...</div>;
  if (!issue) return <div>Issue não encontrada.</div>;

  return (
    <div>
      <h1>{issue.title}</h1>
      <p>{issue.body}</p>
      <a href={issue.html_url} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
    </div>
  );
};

export default IssueDetail;
