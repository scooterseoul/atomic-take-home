import React, { useState, useEffect } from "react";
import { ContentRepository } from "./ContentRepository";
import styles from "./Home.module.css";

const Home = () => {
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayedSports, setDisplayedSports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const contentRepository = new ContentRepository();
      try {
        const data = await contentRepository.getFeaturedSports();
        setSports(data);
        setLoading(false);
        shuffleAndDisplay(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const shuffleAndDisplay = (data) => {
    const shuffledSports = [...data].sort(() => Math.random() - 0.5);
    setDisplayedSports(shuffledSports.slice(0, 3));
  };

  const handleRefresh = () => {
    shuffleAndDisplay(sports);
  };

  return (
    <div className={styles.mainContainer}>
      <h1>Atomic take home</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.detailContainer}>
          {displayedSports.map((sport) => (
            <div key={sport.name}>
              <p className={styles.name}>{sport.name}</p>
              <p>Description: {sport.description}</p>
            </div>
          ))}
        </div>
      )}{" "}
      <button onClick={handleRefresh} className={styles.btn}>
        Refresh
      </button>
    </div>
  );
};

export default Home;
