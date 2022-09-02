import React, { useEffect, useState } from 'react';

import { getPosts } from '../service/ghost';
import PostOverview from './PostOverview';

import '../styles/project.css';

export default function Journey() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    async function getAllPosts() {
      const posts = await getPosts();
      if (posts) {
        setPosts(posts);
      }
    }

    getAllPosts();
  }, []);

  const renderPosts = () => {
    return posts.map((post: any, index: any) => (
      <PostOverview data={post} key={`post__${index}`} />
    ));
  };

  return (
    <>
      <div className="title">Journey</div>
      <div className="posts">{renderPosts()}</div>
      {/* <div className="building">
          <img src={require("../building.svg")} alt="*" />
          <h2>I am updating my stories for you and will be back shortly.</h2>
        </div> */}
    </>
  );
}
