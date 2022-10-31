const apiKey =
  "1DMekyndSB2Y9yJoWgPENMTuJZvAE1vigCFZyOG7kA2HbG1Q317CpINE7wluRlvgXuEVtfsGFTgtMIzcdVO8qh7VgCDtIYwTw06rX22k1jCDgeYaANjwK-xgFETrYnYx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            console.log(business);
            return {
              id: business.id,
              imgSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zip: business.location.zip_code,
              category: business.categories.title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
  },
};

export default Yelp;
