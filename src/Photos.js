import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PhotoTitle from "./PhotoTitle";

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const [searchStr, setSearchStr] = useState("");
  const [foundWords, setFoundWords] = useState();
  const { id } = useParams();
  const uri = `https://jsonplaceholder.typicode.com/albums/${id}/photos`;

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(uri);
        setPhotos(await resp.json());
      } catch (e) {
        alert(e);
      }
    })();
  }, [uri]);

  useEffect(() => {
    if (searchStr.length < 2) {
      setFoundWords();
      return;
    }
    setFoundWords(extractWords(photos, searchStr));
  }, [searchStr, photos]);

  // TODO useMemo
  const filteredPhotos =
    searchStr === ""
      ? photos
      : photos.filter(({ title }) => title.indexOf(searchStr) >= 0);

  return (
    <div className="row">
      <div className="col-xl-6 col-lg-7 col-md-8">
        <h3>Photos</h3>
        <nav>
          <ol className="breadcrumb bg-transparent">
            <li className="breadcrumb-item">
              <Link to="/albums">&lt; Back to albums</Link>
            </li>
          </ol>
        </nav>
        <div className="form-group">
          <input
            onChange={(e) => setSearchStr(e.target.value)}
            value={searchStr}
            type="text"
            placeholder="search"
            className="form-control"
          />
        </div>
        {filteredPhotos.map((photo) => (
          <div className="card mb-3 bg-light" key={photo.id}>
            <div className="row no-gutters align-items-center">
              <div className="col-sm-3">
                <a href={photo.url} target="_blank" rel="noreferrer">
                  <img
                    src={photo.thumbnailUrl}
                    className="w-auto rounded-left"
                    alt={`thumbnail for ${photo.title}`}
                  />
                </a>
              </div>
              <div className="col-sm-9">
                <div className="card-body">
                  <p className="card-text">
                    <PhotoTitle title={photo.title} highlighted={foundWords} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function extractWords(photos, searchStr) {
  return new Set(
    photos.flatMap(
      ({ title }) =>
        title.match(new RegExp(`\\b(\\w*${searchStr}\\w*)\\b`, "g")) ?? []
    )
  );
}
