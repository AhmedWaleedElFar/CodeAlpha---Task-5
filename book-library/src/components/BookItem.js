function BookItem({ book }) {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.category}</p>
    </div>
  );
}

export default BookItem;