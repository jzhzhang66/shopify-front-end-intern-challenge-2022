import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../components/post';
import { motion } from 'framer-motion';
import uuid from 'react-uuid';

const apiKey = 'XeLYxbB1FHThsJO2fcYssL3YM9MPRSTwnUozD21a';
const url = `https://api.nasa.gov/planetary/apod?count=25&api_key=${apiKey}`;

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    const result = await axios.get(url);
    setData(result.data);
    setIsLoading(false);
  }, []);

  return (
    <div className="page-container">
      {isLoading ?
        <motion.a className="loading" animate={{ y: [0, 10, 0] }} transition={{ loop: Infinity, duration: 1 }}> loading...</motion.a> :
        <>
          <h1 className="page-header">Spacestagram</h1>
          {data.map(curr => <Post postInfo={curr} key={uuid()} />)}
        </>
      }
    </div>
  )
};
