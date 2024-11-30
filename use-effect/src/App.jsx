import "./App.css";

import { useState, useEffect } from "react";

import Details from "./Components/Details.tsx";
import List from "./Components/List.tsx";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setUsersList(data);
      })
      .catch((error) => {
        console.log("Ошибка загрузки списка пользователей", error);
      });
  }, []);

  return (
    <div className="mainContainer">
      <List users={usersList} onSelect={setSelectedUser} />
      <Details info={selectedUser} />
    </div>
  );
}

export default App;
