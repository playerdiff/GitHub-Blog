// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import { fetchProfile } from '../api';

const Profile = ({ username }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const data = await fetchProfile(username);
        setProfile(data);
      } catch (error) {
        console.error(error);
      }
    };

    getProfile();
  }, [username]);

  if (!profile) return <div>Carregando...</div>;

  return (
    <div>
      <img src={profile.avatar_url} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>Seguidores: {profile.followers}</p>
      <p>{profile.bio}</p>
      {/* Adicione mais informações conforme necessário */}
    </div>
  );
};

export default Profile;
