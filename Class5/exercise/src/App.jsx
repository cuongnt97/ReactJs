import React from "react";
import { useEffect, useState } from "react";

function App() {
  const apiLink =
    "https://free-to-play-games-database.p.rapidapi.com/api/games";
  const reqGet = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cb9a458a06mshde112963846efd9p157915jsnef64db61ee49",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const [games, setGames] = useState([]);

  const [params, setParams] = useState({});

  useEffect(() => {
    const queryParams = new URLSearchParams(params).toString();
    fetch(`${apiLink}?${queryParams}`, reqGet)
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
      })
      .catch((err) => console.log(err));
  }, [params]);

  const rows = games.map((game) => (
    <tr key={game.id}>
      <td>{game.title}</td>
      <td>
        <img src={game.thumbnail} />
      </td>
      <td>{game.game_url}</td>
      <td>{game.genre}</td>
      <td>{game.platform}</td>
      <td>{game.developer}</td>
      <td>{game.publisher}</td>
      <td>{game.release_date}</td>
    </tr>
  ));

  const genres = [...new Set(games.map((game) => game.genre))].map((genre) => (
    <option key={genre} value={genre}>
      {genre}
    </option>
  ));

  const platforms = [...new Set(games.map((game) => game.platform))].map((platform) => (
    <option key={platform} value={platform}>
      {platform}
    </option>
  ));

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("name", name);
    console.log("event", event.target.value);
    setParams((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    }); // Cập nhật params khi người dùng thay đổi giá trị
  };

  return (
    <div className="App">
      <label htmlFor="category">Select genre</label>
      <select name="category" id="genre" onChange={handleInputChange}>
        <option value="">Select one category</option>
        {genres}
      </select>
      <select name="platform" id="platform" onChange={handleInputChange}>
        <option value="">Select a platform</option>
        {platforms}
      </select>
      <table>
        <caption>
          <strong>List of games</strong>
        </caption>
        <thead>
          <tr>
            <th>Title</th>
            <th>Thumbnail</th>
            <th>Link</th>
            <th>Genre</th>
            <th>Platform</th>
            <th>Developer</th>
            <th>Publisher</th>
            <th>Release Date</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default App;
