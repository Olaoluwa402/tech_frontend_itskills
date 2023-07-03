import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SinglePhotoScreen = () => {
  const [photo, setPhoto] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    ///make api call using axios
  }, []);

  const testPhoto = {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  };

  return (
    <div>
      <h2>{testPhoto.title}</h2>
      <img src={testPhoto.url} alt="photo" />
    </div>
  );
};

export default SinglePhotoScreen;
