import React from "react";
import { GithubProfile } from "./GithubInterface";
import "./App.css";

interface Props {
  github: GithubProfile;
}

const GithubBox = ({ github }: Props) => {
  return (
    <div className="github-box">
      <a href={github.url}>{github.username}</a>
      <img src={github.img} alt="Profile Picture"></img>
      <p>User joined on {github.date_joined}</p>
      <p> Public Repos: {github.repos}</p>
      <p> Followers: {github.followers}</p>
      <p> Following: {github.following}</p>
    </div>
  );
};

export default GithubBox;
