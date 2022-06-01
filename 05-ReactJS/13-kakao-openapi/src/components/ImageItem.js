import React, { memo } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

import noimg from "../assets/img/이미지불러오지못했을때쓸이미지.png";

const ListItemContainer = styled.li`
  box-sizing: border-box;
  width: 20%;
  flex: none;
  padding: 10px;

  //미디어 쿼리- ()안의 해상도 구간에 만족할때 {}안의 속성들이 적용됨
  @media (max-width: 1280px) {
    width: 25%;
  }
  @media (max-width: 960px) {
    width: 33.3%;
  }
  @media (max-width: 720px) {
    width: 50%;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
  .list-item-link {
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: black;
    transition: all 0.1s;
    &:hover {
      background-color: #eeeeee55;
    }
    .thumbnail {
      width: 100%;
      height: 360px;
      display: block;
      object-fit: cover;
      object-position: center top;
      flex: none;

      //가로폭이 달라진다면 세로폭도 맞춰 바뀌어야함
      @media (max-width: 1280px) {
        height: 360px;
      }
      @media (max-width: 960px) {
        height: 340px;
      }
      @media (max-width: 720px) {
        height: 320px;
      }
      @media (max-width: 640px) {
        height: 100%;
      }
    }
    .content {
      flex: none;
      width: 100%;
      box-sizing: border-box;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 10px 15px;
      h3 {
        box-sizing: border-box;
        font-size: 10px;
        height: 20px;
        line-height: 20px;
        font-weight: bold;
        margin: 10px 0;

        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          font-size: 12px;
        }
      }
    }
  }
`;

/*KakaoSearch에서 list: <ImageItem item={v}/> => v는 json객체 1개
v를 item이라는 이름으로 받음-> item을 비구조문법으로 쪼갬
이미지의 출처가 다음이나 네이버인 경우 원본이미지의 접근을 막기때문에 thumbnail_url을 사용 */
const ImageItem = memo(
  ({
    item: {
      doc_url,      //클릭했을때 넘어갈 url
      image_url,    //원본 이미지 url
      thumbnail_url,    //축소판 이미지 url
      display_sitename,
      collection,
      width,
      height,
      datetime,
    },
    inview
  }) => {
    return (
      <ListItemContainer>
        <a
          className="list-item-link"
          href={doc_url}
          target="_blank"
          rel="noreferrer"
          ref={inview}
        >
          <img
            className="thumbnail"
            src={thumbnail_url || noimg}  /*주소값 자체가 빈문자열이거나 이미지 url자체가 정의가 안되어있다면 => 경로 문자열이 없을경우 */
            onError={(e) => {   /*주소는 있으니 실제 파일이 존재하지 않은 경우(이미지 로딩에 에러가 발생함-액박)=> 이미지에 대한 404 Not Found Error */
              e.target.src = noimg;
            }}
            alt={display_sitename}
          />
          <div className="content">
            <h3>{display_sitename}</h3>
            <ul>
              <li>{collection}</li>
              <li>
                이미지 크기: {width} x {height}
              </li>
              <li>{dayjs(datetime).format("YYYY-MM-DD hh:mm")}</li>
            </ul>
          </div>
        </a>
      </ListItemContainer>
    );
  }
);

export default ImageItem;
