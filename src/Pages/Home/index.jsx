import { Avatar, Col, Image, Input, Row, Select, Space, Tag, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CODE_FILM } from "../../constants";
import { getListFilm } from "../../redux/actions/listFilAction";
const { Option } = Select;
const Home = () => {
  const dispatch = useDispatch();
  const listFilm = useSelector((state) => state.film.listFilm);
  const [code, setCode] = useState(undefined);
  const [search, setSearch] = useState(undefined);

  const getApi = (code, search) => {
    let url = "";
    if (code && !search) {
      url = "?maNhom=" + code;
    } else if (code && search) {
      url = "?maNhom=" + code + "&tenPhim=" + search;
    } else if (!code && search) {
      url = "?tenPhim=" + search;
    }
    return url;
  };

  useEffect(() => {
    if (code || search) {
      dispatch(getListFilm(getApi(code, search)));
    } else {
      dispatch(getListFilm(`?maNhom=GP01`));
    }
  }, [code, search]);

  const handleChange = (e) => {
    setCode(e);
  };

  return (
    <div className="home">
      <Space size="large" direction="vertical">
        <Space size="small">
          <Input
            value={search}
            placeholder="Search Film"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Select
            allowClear
            defaultValue={CODE_FILM[1]}
            style={{ width: 300 }}
            onChange={handleChange}
            options={CODE_FILM.map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </Space>
        <div>
          <Space size="middle">
            <Row>
              <Col span={24} className="movie-1">
                {listFilm &&
                  listFilm?.content?.map((item) => (
                    <div
                      key={item.maPhim}
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <Image preview={false} className="image" width={300} height={300} src={item.hinhAnh} />
                        <span className="tag">{item.hot === true ?  <Tag color="magenta">Hot</Tag> : ''}</span>
                      {item.dangChieu === false ? "Sap Chieu" : "Dang chieu"}
                      <Tooltip placement="bottom" title={item.biDanh}>
                        <p>{item.tenPhim}</p>
                      </Tooltip>
                    </div>
                  ))}
              </Col>
            </Row>
          </Space>
        </div>
      </Space>
    </div>
  );
};

export default Home;
