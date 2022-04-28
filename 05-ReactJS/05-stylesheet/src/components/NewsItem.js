import React from "react";
import styled, { css } from "styled-components";

const ListItem = styled.li`
  border-top: 1px solid #eee;
  &:last-child {
    border-bottom: 1px solid #eee;
  }
  .list-item-link {
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px;
    text-decoration: none;
    color: #000;
    transition: all 0.3s;
    &:hover {
      opacity: 0.8;

    }
    .thumbnail {
      width: 150px;
      height: 100px;
      display: block;
      object-fit: cover;
      flex: none;
    }
    .content {
      flex: 0 1 auto;
      padding: 5px 0 5px 20px;
      background-color: ghostwhite;
      h3 {
        background-color: black;
        color: white;
        font-size: 18px;
        font-weight: bold;
        margin: 0;
        padding-bottom: 10px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      p {
        background-color: gainsboro;
        font-size: 14px;
        margin: 0;
        padding-bottom: 8px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          display: inline-block;
          font-size: 12px;
          &:first-child:after {
            content: "|";
            display: inline-block;
            color: #555;
            padding: 0 5px;
          }
        }
      }
    }
  }
`;

const NewsItem = ({
  item: { author, title, description, url, image, datetime }
}) => {
  console.group("NewsItem");
  console.debug(`author:${author}`);
  console.debug(`title:${title}`);
  console.debug(`description:${description}`);
  console.debug(`url:${url}`);
  console.debug(`image:${image}`);
  console.debug(`datetime:${datetime}`);
  console.groupEnd();

  return (
    <div>
      <ListItem>
        <a
          className="list-item-link"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <img className="thumbnail" src={image} />
          <div className="content">
            <h3> {title} </h3>
            <p>{description}</p>
            <ul>
              <li>{author}</li>
              <li>{new Date(datetime).toDateString()}</li>
            </ul>
          </div>
        </a>
      </ListItem>
    </div>
  );
};

export default NewsItem;
