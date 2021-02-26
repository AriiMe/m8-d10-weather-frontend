/** @format */

import React, { FC } from "react";
import { WeatherData, dailyStructure } from "../store/types";
import { Container, Row, Col, Table } from "react-bootstrap";
interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(1);
  const celsiusFeels = (data.main.feels_like - 273.15).toFixed(1);

  return (
    <Container>
      <div className="clol">
        {" "}
        <p className="heading mt-2 ml-2">
          <p className="title clolText ml-2">
            {celsius}
            <sup>&#8451;</sup>
          </p>
        </p>
      </div>
      <div id="info"><p className="heading info text mt-2">
          <p className="title infoText"> {data.weather[0].description}</p>
        </p></div>
      <div id="imagelol">
      
        <img
          className="mt-5"
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          alt=""
          style={{ width: "200px" }}
        />
      </div>
      <div id="countryName">
        {" "}
        <p className="heading mt-2">
          <p className="title countryText">{data.name}</p>
        </p>
      </div>
      

      <Row>
        <Col id="table" className="title has-text-centered">
          <Table striped bordered hover id="table1">
            <thead>
              <tr>
                <th style={{ color: "white" }}>
                  {data.name} - {data.sys.country}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    className="mt-5"
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                    alt=""
                    style={{ width: "150px" }}
                  />
                  <br></br>
                  {data.weather[0].description}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <p className="heading mt-5">
                    <p className="title">
                      {celsius}
                      <sup>&#8451;</sup>
                    </p>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="heading mt-5">
                    feels like:
                    <p className="title">
                      {celsiusFeels}
                      <sup>&#8451;</sup>
                    </p>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="heading mt-5">why would you even use this?</p>
                  <p className="title">
                    {fahrenheit}
                    <sup>&#8457;</sup>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="heading mt-5">humidity</p>
                  <p className="title">{data.main.humidity}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="heading mt-5">wind</p>
                  <p className="title">{data.wind.speed} m/s</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="heading mt-5">pressure</p>
                  <p className="title">{data.main.pressure}</p>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default Weather;
