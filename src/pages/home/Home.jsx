import { useEffect, useState } from "react";

import "./home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/footer";
import Post from "../../components/Posts/Posts";
import Carousel from "../../components/Popularp/Popular";
import Sidebar from "../../components/sidebar/Sidebar";
import { useLocation } from "react-router-dom";

import { axiosInstance } from "../../config";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [pposts, setPposts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchposts = async () => {
      const res = await axiosInstance.get("/posts" + search);
      const pp = await axiosInstance.get("/posts");
      setPosts(res.data);
      setPposts(pp.data);
    
    }
    fetchposts().catch(error => {
      console.log(error.response)});
  ;
    console.log("post is fetched")
  }, [search])

  return (
    <div style={{ backgroundColor: "#95cde2" }}>
      <Header />
      <Sidebar />
      <div className="home">
        <Post posts={posts} key={posts.id} />
      </div>
      <div className="trendingdiv">
        <h2 className="trending">Trending</h2>
        <Carousel posts={pposts} key={posts.id} />
      </div>
      <Footer />
    </div>
  );
}
