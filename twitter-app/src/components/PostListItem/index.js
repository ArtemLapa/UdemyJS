import React from "react";
import "./post-list-item.css";

const PostListItem = () => {
  return (
    <li className="app-list-item d-flex justify-content-between">
      <span className="app-list-item-label">List item</span>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn-star btn-sm" type="button">
          <i className="fas fa-star"></i>
        </button>
        <button className="btn-trash btn-sm" type="button">
          <i className="far fa-trash-alt"></i>
        </button>
        <i className="fas fa-heart"></i>
      </div>
    </li>
  );
};

export default PostListItem;
