import React, { useState } from "react";
import { GithubProfile } from "./GithubInterface";
import GithubBox from "./GithubBox";

const GithubFinder = () => {
  const [githubProfileString, setGithubProfileString] = useState("");
  const [githubProfile, setGithubProfile] = useState<GithubProfile | null>();

  const [loading, setLoading] = useState(false);

  async function handleGithub(): Promise<void> {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${githubProfileString}`
      );
      if (!response.ok) {
        setGithubProfile(null);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const profile: GithubProfile = {
        img: data.avatar_url,
        date_joined: new Date(data.created_at).toLocaleDateString("en-US", {
          weekday: "long", // "Monday"
          year: "numeric", // "2022"
          month: "long", // "November"
          day: "numeric", // "22"
        }),
        username: githubProfileString,
        url: "https://github.com/" + githubProfileString,
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
      };
      setGithubProfile(profile);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching total:", error);
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading Data! Please wait</div>;
  }

  return (
    <>
      <div className="container">
        <div className="search">
          <input
            type="text"
            placeholder="Enter github profile"
            onChange={(e) => setGithubProfileString(e.target.value)}
          ></input>
          <button onClick={handleGithub}>Search</button>
        </div>
        <div className="body">
          {githubProfile ? (
            <GithubBox github={githubProfile} />
          ) : (
            <div className="error-div">Sorry, the account not founded</div>
          )}
        </div>
      </div>
    </>
  );
};

export default GithubFinder;
