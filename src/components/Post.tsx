import React, {useState, useEffect} from "react";
import Header from "./Header";
import {getOnePost} from "../service/ghost";


export default (props: any) => {
  const [htmlContent, setHtmlContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const post = await getOnePost(props.match.params.id);
      
      setTitle(post.title);
      setHtmlContent(post.html);
    };
    fetchData();
  }, [props.match.params.id]);

  return (
    <div className="container project">
      <Header />
      <div className="post-title">
        {title}
      </div>
      <div className="post" dangerouslySetInnerHTML={createMarkUp(htmlContent)} />
    </div>
  );
};

const createMarkUp = (content: string) => {
  return {
    __html: content
  };
};