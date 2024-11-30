import { useState, useEffect } from "react";

interface UserDetails {
  avatar: string;
  name: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
}

interface DetailsProp {
  info: {
    id: number;
    name: string;
  };
}

export default function Details({ info }: DetailsProp) {
  const [details, setDetails] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!info) {
      return;
    }

    setDetails(null);
    setLoading(true);

    fetch(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Ошибка загрузки данных пользователя", error);
      });
  }, [info]);

  if (!info) return null;
  if (loading) return <div>Loading...</div>;

  return (
    <>
      {details && (
        <div className="userConteiner">
          <img src={details.avatar} />
          <h2 className="userBox">{details.name}</h2>
          <div className="userBox">City: {details.details.city}</div>
          <div className="userBox">Company: {details.details.company}</div>
          <div className="userBox">Position: {details.details.position}</div>
        </div>
      )}
    </>
  );
}
