import React from "react";
import { Cards, Chart, CountryPicker } from "./Components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import Header from "./Components/Header";


class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div>
      <div>   <Header /> </div>
      <div className={styles.container}>
        <br />
        <text>
          <b>Novel Coronavirus Case Statistics</b>
        </text>
        <br />
        <text>
          <i>(Choose to display Global or Country Data from below)</i>
        </text>
        <br />
        <br />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} country={country} />
        <Chart data={data} country={country} />
        
      </div>
      </div>
    );
  }
}

export default App;