import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from "../../util/Yelp";
import React from "react";

// const business = {
//   imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
//   name: "MarginOtto Pizzeria",
//   address: "1010 Paddington Way",
//   city: "Flavortown",
//   state: "NY",
//   zipCode: "10101",
//   category: "Italian",
//   rating: 4.5,
//   reviewCount: 90,
// };

// let businesses = [business, business, business, business, business, business];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { businesses: [] };
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then((businesses) => {
      let temp = [];
      for (let i = 0; i < 10; i++) {
        temp.push(businesses[i]);
      }
      this.setState({ businesses: temp });
    });
  }

  renew() {
    window.open("https://cors-anywhere.herokuapp.com/corsdemo");
  }

  render() {
    return (
      <div className="App">
        <h1 className="renew" onClick={this.renew}>
          ravenous
        </h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
