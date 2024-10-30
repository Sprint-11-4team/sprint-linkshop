import React, { useEffect, useState } from 'react';

const GetMetaImg = ({ shopUrl }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(shopUrl)}`;
    fetch(proxyUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(response.headers);
        return response.text();
      })
      .then((html) => {
        console.log(html);
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const metaImage = doc.querySelector('meta[property="og:image"]');
        console.log(metaImage);
        if (metaImage) {
          setImage(metaImage.content);
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, [shopUrl]); // shopUrl을 의존성 배열에 추가

  useEffect(() => {
    console.log(image); // image가 변경될 때마다 출력
  }, [image]);

  return <div>{image && <img src={image} alt="대표 이미지" />}</div>;
};

export default GetMetaImg;
