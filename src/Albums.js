import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./useAuth";

export default function Albums() {
  const [albums, setAlbums] = useState([]);
  const {
    user: { id }
  } = useAuth();
  const uri = `https://jsonplaceholder.typicode.com/albums?userId=${id}`;

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(uri);
        setAlbums(await resp.json());
      } catch(e) { alert(e); }
    })();
  }, [uri]);

  return (
    <>
      <h3>Albums</h3>
      <ul>
        {albums.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/albums/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
