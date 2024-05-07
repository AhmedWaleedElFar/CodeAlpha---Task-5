function CategoryFilter({ categories, onFilter }) {
  return (
    <select className="category-filter" defaultValue="All" onChange={(e) => onFilter(e.target.value)}>
      <option value="All">All</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;