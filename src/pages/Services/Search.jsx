
// eslint-disable-next-line react/prop-types
const Search = ({ setSearchText , searchText }) => {
  
  const handleInputChange = (e) => {
    setSearchText(e.target.value);

  };


  return (
    <div className="flex items-center justify-center p-4">
      <input
        type="text"
        className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search..."
        value={searchText}
        onChange={handleInputChange}
      />
      <button
        className="px-4 py-2 text-white bg-blue-500 border border-blue-500 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
