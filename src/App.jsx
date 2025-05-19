import "./App.css";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import Sidebar from "./componenets/Sidebar";
import CreatePost from "./componenets/CreatePost";
import PostList from "./componenets/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
    <div className="app-container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className="content">
        <Header />
        {selectedTab === "Home" ? <PostList /> : <CreatePost />}

        <Footer />
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
