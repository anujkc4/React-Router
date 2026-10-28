import React, { useState, useEffect } from "react";

export default function Github() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/anujkc4")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div className="text-center bg-rose-900 text-amber-300 p-4">
      Github followers:{data.followers}
      {data.avatar_url && (
        <img src={data.avatar_url} alt="profilePic" className="block mx-auto" />
      )}
    </div>
  );
}
