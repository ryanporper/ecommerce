import React from 'react';

import { client } from '../lib/client';
import { Product, Feature, HeroBanner } from '../components';

const Home = ({ products, features, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Featured Items</h2>
      <p>You have to pick one of these up!</p>
    </div>

    {/* featured items */}
    <div className="products-container">
      {features?.map((feature) => <Feature key={feature._id} feature={feature} />)}
    </div>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const featureQuery = '*[_type == "feature"]';
  const features = await client.fetch(featureQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, features, bannerData }
  }
}

export default Home;
