import React from 'react'

import { client } from '../lib/client';
import { BestSeller } from '../components'

const BestSellers = ({ bestsellers }) => (
  <div className="products-container">
    {bestsellers?.map((bestseller) => <BestSeller key={bestseller._id} bestseller={bestseller} />)}
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "bestseller"]';
  const bestsellers = await client.fetch(query);

  return {
    props: { bestsellers }
  }
}
  
export default BestSellers