// src/api.js
export const fetchProfile = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar perfil');
  }
  return response.json();
};

// Não se esqueça de exportar outras funções que você já tem
export const fetchIssues = async (repo) => {
  const response = await fetch(`https://api.github.com/repos/${repo}/issues`);
  if (!response.ok) {
    throw new Error('Erro ao buscar issues');
  }
  return response.json();
};

export const fetchIssueDetail = async (repo, issueNumber) => {
  const response = await fetch(`https://api.github.com/repos/${repo}/issues/${issueNumber}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar detalhes da issue');
  }
  return response.json();
};
