import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import '../styles/post.css';

export interface Props{
  data: any,
  key: string
}

export default  (props: Props): JSX.Element => {

  return (
    <Link to={`/journey/${props.data.id}`}>
    <div className="overview">
      <div className="img" style={{backgroundImage: `url(${props.data.feature_image})`}}>
      </div>
      <div className="content">
      <div className="title">{props.data.title}</div>
        <div className="info">
          <div className="tags">
            {renderTags(props.data.tags)}
          </div>

        <div className="time">{moment(props.data.updated_at).format('LL')}</div>
          </div>
        </div>
    </div>
    </Link>
  );
};

const renderTags = (tags: any) => {
  return tags.map((tag: any, index: any) => (
    <span key={`tag_${tag.name}_{${index}}`}>{tag.name}</span>
  ));
};