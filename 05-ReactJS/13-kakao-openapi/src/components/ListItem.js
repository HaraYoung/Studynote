import React, { memo } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

import noimg from "../assets/img/이미지불러오지못했을때쓸이미지.png";

const ListItemContainer = styled.li`
  -webkit-font-smoothing: antialiased;
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
    color: black;
    transition: all 0.1s;
    &:hover {
      background-color: #eeeeee55;
    }
    .thumbnail {
      width: 135px;
      height: 135px;
      display: block;
      margin-right: 20px;
      object-fit: cover;
      flex: none;
    }
    .content {
      flex: 0 1 auto;
      padding: 5px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h3 {
        box-sizing: border-box;
        font-size: 17px;
        font-weight: bold;
        margin: 0;
        margin-bottom: 10px;

        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      p{
        font-size: 14px; 
        margin: 0;
        margin-bottom: 8px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      ul{
          list-style: none;
          padding:0;
          margin:0;
          li{
              display: inline-block;
              font-size:12px;
              margin: 0;
              &:after{
                  content: '|';
                  display: inline-block;
                  color: #555;
                  padding: 0 5px;
              }
              &:last-child::after{
                content: '';
              }
              &.price{
                  font-size: 14px;
                  font-weight: bold;
              }
          }
      }
    }
  }
`;
//title, contents, url, datetime => 공통, 이뒤로는 있을수도 있고 없을수도 있음, authors= 저자=> 배열
const ListItem = memo(({type, item:{title, contents, url, datetime, blogname, cafename, thumbnail, authors, publisher, price, sale_price}, inview}) => {
  return (
  <ListItemContainer>
      <a className="list-item-link" href={url} target='_blank' rel='noreferrer' ref={inview}>
          {(type !== 'web') && (    //이미지를 web이 아닐경우만 노출- 웹검색에는 이미지가 없기때문
              <img className="thumbnail" src={thumbnail || noimg} alt={title}/>
          )}
          <div className="content">
              {/*검색 결과의 제목과 생세 내용은 html태그가 포함되어있기 때문에 dangerouslySetInnerHTML을 사용해 html을 동작시켜출력 */}
              {/*json안에 html태그를 표현할수 없으니 html태그 자체를 인코딩 시킴 ex)<b>A</b> => A\u003c/b\u003e */}
              <h3 dangerouslySetInnerHTML={{__html: title}}/>
              <p dangerouslySetInnerHTML={{__html: contents}}/>
              <ul>
                  {/*하위 정보가 있을경우에만 출력하는 영역 */}
                  {price && <li className="proce">정가: <span>{price}</span></li>}
                  {sale_price && <li className="proce">정가: <span>{sale_price}</span></li>}
                  {authors && <li>{authors.join(',')}</li>} {/*배열이므로 원소를 ,로 구분시키고 한문자열로 묶음*/}
                  {cafename && <li>{cafename}</li>}
                  {blogname && <li>{blogname}</li>}
                  {datetime && <li className="date">{dayjs(datetime).format('YYYY-MM-DD hh:mm')}</li>}
              </ul>
          </div>
        </a>
  </ListItemContainer>
  )
});

//React.memo()를 사용해 함수형 컴포넌트의 리렌더링 성능 최적화
export default React.memo(ListItem);
