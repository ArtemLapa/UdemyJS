import React from "react";
import "./post-add-form.css";

const PostAddForm = () => {
  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="О чём вы думаете сйчас?"
        className="form-control new-post-label"
      />
      <button type="submit" className="btn btn-outline-secondary">
        Add Post
      </button>
    </form>
  );
};

export default PostAddForm;
