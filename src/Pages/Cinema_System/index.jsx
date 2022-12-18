import { Avatar, Divider, Space, Tabs, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCinema } from "../../redux/actions/listCinemaAction";
import styled from "styled-components";
import InfoCinema from "../../components/InfoCinema";

const { Title } = Typography;
const CinemaSystem = () => {
  const dispatch = useDispatch();
  
  const [active, setActive] = useState("BHDStar");
  const listCinemaSystem = useSelector((state) => state.cinema.listCinema);
  useEffect(() => {
    console.log(listCinemaSystem);
    dispatch(getListCinema());
  }, []);

  return (
    <>
      <StyledContainer>
        <Title level={3} className="title">
          Hệ thống rạp chiếu phim
        </Title>
        <div className="cinema">
          {listCinemaSystem &&
            listCinemaSystem?.content?.map((item, idx) => (
              <div key={idx} className="cinema-all">
                <div
                  className={active === item.maHeThongRap ? "active" : "logo"}
                  onClick={() => setActive(item.maHeThongRap)}
                >
                  {/* {JSON.stringify(active)} */}
                  <Avatar src={item.logo} />
                  <p>{item.tenHeThongRap}</p>
                </div>
              </div>
            ))}
        </div>
        <Divider className="hr" dashed />
        <InfoCinema systemCode={active} />
      </StyledContainer>
    </>
  );
};
const StyledContainer = styled.div`
  .title {
    color: #fff;
    margin-bottom: 30px;
  }
  .cinema {
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    text-align: center;
    .cinema-all {
      cursor: pointer;
      .active {
        .ant-avatar-image {
          border: 3px solid red;
        }
        p {
          color: red;
        }
      }
      .logo {
        .ant-avatar-image {
          border: 3px solid #fff;
          img {
            maw-width: 100%;
          }
        }
      }
    }
  }
  .hr {
    background: #fff !important;
    border-width: 2px 0 0;
  }
`;
export default CinemaSystem;
