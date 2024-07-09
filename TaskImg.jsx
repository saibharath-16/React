import React, { useState, useEffect } from 'react';
import "./TaskImg.css";

const TaskImg = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(''); 
  const API_KEY = "FLbG2Wo1MKtcroBTX_uXBlyQ2oE3WoqHfVfI7EoVXkI";

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const getData = (page) => {
    myFun(search, page);
  };

  const myFun = async (searchVal, page) => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&per_page=10&query=${searchVal}&client_id=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      const jsonData = await response.json();
      setData(jsonData.results);
      setTotalPages(jsonData.total_pages);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (search) {
      getData(currentPage);
    }
  }, [currentPage, search]);

  return (
    <>
      <h1>Image Search</h1>
      <input
        type="text"
        className='searchBar'
        placeholder='Search Here'
        onChange={handleSearch}
      /><p>{error}</p>
      <div className="photoDisplay">
        {!isLoading&&data.map((curVal) => (
          <img
            key={curVal.id}
            src={curVal.urls.small}
            className="photo"
            onClick={() => handleImageClick(curVal.urls.full)}
          />
        ))}
        {isLoading&&<p>Loading...</p>}
      </div>
      <div className="pagination">
        <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
      </div>

      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>x</span>
            <img src={selectedImage} alt="Selected" className="modal-image" />
           </div> 
           <a href={selectedImage} download className="download-button">Download Full-Size Image</a>
        </div>
      )}
    </>
  );
}

export default TaskImg;
