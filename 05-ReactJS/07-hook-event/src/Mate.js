import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf8" />
        {/*SEO 태그 */}
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content={props.url} />
        {/*<meta property="og:image" content={props.image}/> */}

        {/*웹폰트 적용을 위한 외부 리소스 참조 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />

        {/*Helmet안에서 css적용 */}
        <style type="text/css">{`
            *{
                font-family: 'Montserrat', sans-serif;
            }
            body {
                margin: 0;
                padding: 30px;
            }
        `}</style>
      </Helmet>
    </HelmetProvider>
  );
};

Meta.defaultProps = {
    title: 'React Example',
    description: 'react-hook 예제',
    keywords:'react',
    author: '박세영',
    //image: '기본 이미지 변수 젹용',
    url: window.location.href
}

export default Meta;