import { useState } from "react";

interface User {
  name: string;
  id: string;
}

interface ListProps {
  users: User[];
  onSelect: (user: User) => void;
}

export default function List({ users, onSelect }: ListProps) {
  const [showAll, setShowAll] = useState(false);

  const displayedUsers = showAll ? users : users.slice(0, 3);

  return (
    <div className="listContainer">
      <ul>
        {displayedUsers.map((user) => (
          <li key={user.id} className="userBox" onClick={() => onSelect(user)}>
            {user.name}
          </li>
        ))}
      </ul>
      <button className="btn" onClick={() => setShowAll(!showAll)}>
        ...
      </button>
    </div>
  );
}
