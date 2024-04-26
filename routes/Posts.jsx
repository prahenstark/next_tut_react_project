import { useState } from "react";
import PostsList from "../src/components/PostsList";
import { Outlet } from "react-router-dom";

function Posts() {
  const [modalIstVisible, setModalIsVisible] = useState(true);

  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  console.log("inside loder")
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
