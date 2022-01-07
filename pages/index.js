import { useEffect, useState } from 'react';
import axios from 'axios'
import Post from '../components/post';

const apiKey = 'XeLYxbB1FHThsJO2fcYssL3YM9MPRSTwnUozD21a';
const url = `https://api.nasa.gov/planetary/apod?count=10&api_key=${apiKey}`;

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios.get(url);
    setData(result.data);
  }, []);
  
  return (
    <div className="page-container">
      {data.map(curr => <Post postInfo={curr} key={curr.title} />)}
    </div>
  )
}
