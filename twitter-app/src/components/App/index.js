import React from "react";
import "./app.css";
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import PostStatusFilter from "../PostStatusFilter";
import PostList from "../PostList";
import PostAddForm from "../PostAddForm";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList />
      <PostAddForm />
    </div>
  );
};

export default App;
