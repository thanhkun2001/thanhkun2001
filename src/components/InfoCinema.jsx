import { Button, Card } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAllInfoCinema } from "../redux/actions/listCinemaAction";

const InfoCinema = ({ systemCode }) => {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.cinema.infoCinema);
  const navigate = useNavigate()
  useEffect(() => {
    const queryString = `?maHeThongRap=${systemCode}`;
    console.log(info);
    dispatch(getAllInfoCinema(queryString));
  }, [systemCode]);
 
  return (
    <Container>
      <Card title="Information" className="container">
        {info &&
          info?.content?.map((item, idx) => (
            <div key={idx}>
              <span></span>
              <Card
                type="inner"
                title={item.tenCumRap}
                extra={<Button onClick={() => navigate(`${item.maCumRap}`)}>More</Button>}
              >
                {item.diaChi}
              </Card>
            </div>
          ))}
      </Card>
    </Container>
  );
};
const Container = styled.div`
  .container {
    width: 70%;
    margin: auto;
  }
`;
export default InfoCinema;
