import React, { useState } from 'react';
import './App.css';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', category: 'Category 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', category: 'Category 2' },
  ];

  const categories = ['Category 1', 'Category 2'];

  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (categoryFilter === 'All' || book.category.includes(categoryFilter))
    );
  });

  return (
    <div className="App">
      <SearchBar onSearch={setSearchQuery} />
      <CategoryFilter categories={categories} onFilter={setCategoryFilter} />
      <BookList books={filteredBooks} />
    </div>
  );
}

export default App;