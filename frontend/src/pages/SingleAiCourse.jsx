import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const SingleAiPage = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/ai/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch course details');
        }
        const data = await response.json();
        setCourse(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <SingleAiCourse course={course} />;
};

export default SingleAiPage;
