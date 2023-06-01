import React from 'react';
import moment from 'moment';

import '../styles/post.css';
import { Post } from '../service/strapi';

export interface Props {
  data: Post;
  key: string;
}

export default function PostOverview({ data }: Props) {
  return (
    <a href={`/journey/${data.id}`}>
      <div className="overview">
        <div
          className="img"
          style={{
            backgroundImage: `url(https://content.dawei.io${data.attributes.cover.data.attributes.url})`,
          }}
        ></div>
        <div className="content">
          <div className="title">{data.attributes.title}</div>
          <div className="info">
            <div className="tags">{renderTags(data.attributes.tags.data)}</div>

            <div className="time">
              {moment(data.attributes.updatedAt).format('LL')}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

const renderTags = (tags: any) => {
  return tags.map((tag: any, index: any) => (
    <span key={`tag_${tag.name}_{${index}}`}>{tag.name}</span>
  ));
};
