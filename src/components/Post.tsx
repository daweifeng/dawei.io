import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Header from './Header';
import { getOnePost } from '../service/ghost';

export default (props: any) => {
  const [htmlContent, setHtmlContent] = useState('');
  const [title, setTitle] = useState('');
  const [updatedAt, setUpdatedAt] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const post = await getOnePost(props.match.params.id);
      if (!post) {
        return;
      }

      setTitle(post.title as string);
      setHtmlContent(post.html as string);
      setUpdatedAt(moment(post.updated_at).format('LL'));
    };
    fetchData();
  }, [props.match.params.id]);

  return (
    <div className="container project">
      <Header />
      <div className="post-title">{title}</div>
      <div className="updated-at">Updated on {updatedAt}</div>
      <div
        className="post"
        dangerouslySetInnerHTML={createMarkUp(htmlContent)}
      />
    </div>
  );
};

const createMarkUp = (content: string) => {
  return {
    __html: content,
  };
};
