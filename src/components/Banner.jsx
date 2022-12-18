import React, { useEffect, useState } from "react";
import { Carousel, Image } from "antd";
import API from "../services/API";
import styled from "styled-components";
const Banner = ({isShow}) => {
  const [listImg, setListImg] = useState([]);
  const fetchApi = async () => {
    const result = await API.banner.getBanner();
    setListImg(result.content);
    return result;
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      {isShow ? (
        <Carousel autoplay={true}>
          {listImg &&
            listImg?.map((item,idx) => (
              <Image width="1519px" key={idx} height="600px" src={item.hinhAnh} />
            ))}
        </Carousel>
      ) : (
        ""
      )}
    </>
  );
};

export default Banner;
