import React from "react";
import { User } from "./SearchAuto";

interface Props {
  filteredUsers: User[];
  onClick: (event: React.MouseEvent<HTMLLIElement>) => void;
}

const AutoSuggestion = ({ filteredUsers, onClick }: Props) => {
  return (
    <ul>
      {filteredUsers.map((user, index) => (
        <li key={index} onClick={onClick}>
          {user.firstName}
        </li>
      ))}
    </ul>
  );
};

export default AutoSuggestion;
