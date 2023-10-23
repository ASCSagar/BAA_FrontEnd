import React from "react";

export default function IsLoading() {
  return (
    <>
      {/* <i className="fa-solid fa-loader"></i>     */}
      <div className="middleEle">
        <div className="spinner-grow text-info " role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* <h3>Loading.....</h3> */}
    </>
  );
}
