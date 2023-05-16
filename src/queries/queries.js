import gql from "graphql-tag";

export const data = gql`
  query {
    shop_goods {
      id
      images
      title
      price
      rating
      description
    }
  }
`;
