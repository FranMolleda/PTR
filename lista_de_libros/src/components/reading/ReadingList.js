import BookCard from "../bookCard/BookCard";

const ReadingList = ({ readingList, SetReadingList }) => {
  const handleDelete = (book) => {
    const filterList = readingList.filter(
      (bookSelected) => bookSelected !== book
    );
    SetReadingList((prevList) => filterList);
  };

  return (
    <div>
      <ul>
        {readingList.map((book) => (
          <li key={book.title}>
            <BookCard book={book} />
            <button onClick={() => handleDelete(book)}>
              Eliminar libro de la lista
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadingList;
