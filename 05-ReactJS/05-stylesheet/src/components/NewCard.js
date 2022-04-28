import React from "react";
import styled from "styled-components";
import NewsData from "../NewsData";

const CardContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 30px;
  .card-item {
    width: 320px;
    flex: none;
    border: 1px solid gainsboro;
    margin: 10px 5px;
    .list-item-link {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: #000;
      transition: all 0.3s;
      &:hover {
        opacity: 0.8;
      }
      .thumbnail {
        width: 100%;
        height: 150px;
        display: block;
        object-fit: cover;
        flex: none;
        border: 1px solid black;
      }
      .content {
        flex: 0 1 auto;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        padding: 10px 15px;
        background-color: gainsboro;
        h3 {
          background-color: black;
          color: white;
          box-sizing: border-box;
          font-size: 18px;
          font-weight: bold;
          margin: 0;
          margin-bottom: 10px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        p {
          background-color: ghostwhite;
          font-size: 14px;
          margin: 0;
          margin-bottom: 8px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
          li {
            display: inline-block;
            font-size: 12px;
            &:first-child:after {
              content: "|";
              display: inline-block;
              color: #555;
              padding: 3px 5px;
            }
          }
        }
      }
    }
  }
`;

const NewsList = () => {
  console.clear();

  return (
    <div>
      <CardContainer>
        {NewsData.map((v, i) => {
          const { author, title, description, url, image, datetime } = v;
          return (
            <li className="card-item" key={i}>
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
            </li>
          );
        })}
      </CardContainer>
    </div>
  );
};

export default NewsList;
