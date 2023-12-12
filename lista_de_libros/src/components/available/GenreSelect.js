const GenreSelect = ({ availableList, setGenreSelected }) => {
  const genres = availableList?.map((book) => book.book.genre);
  const uniqueGenres = [...new Set(genres)];
  const handleSelectGenre = (e) => {
    const genreValue = e.target.value;
    setGenreSelected(genreValue);
  };

  return (
    <div>
      <label>Genero</label>
      <select name="genre" id="genre" onChange={(e) => handleSelectGenre(e)}>
        <option value="todos">Todos</option>
        {uniqueGenres?.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreSelect;
