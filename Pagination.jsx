import { useState } from "react"


const Pagination = ({data,itemPerPage}) => {
    const[curPage,setCurPage]=useState(1)
    const totalPages=Math.ceil(data.length/itemPerPage);
    const handleClick=(pageNumber)=>{
        setCurPage(pageNumber)
    }
  
    const displayData = data.slice(
        (curPage - 1) * itemPerPage,
        curPage * itemPerPage
      );
  return (
    <div>
      <ul>
        {displayData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page + 1}
            onClick={() => handleClick(page + 1)}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Pagination
