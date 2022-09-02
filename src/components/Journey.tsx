import React, { useEffect, useState } from 'react';

import PostOverview from './PostOverview';

import '../styles/project.css';
import { findAllPosts } from '../service/strapi';

export default function Journey() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    async function getAllPosts() {
      const { data } = await findAllPosts();
      if (data) {
        setPosts(data);
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
