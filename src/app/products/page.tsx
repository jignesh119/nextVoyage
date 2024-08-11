import React from "react";

interface IProductListProps {}

const ProductList: React.FC<IProductListProps> = ({}) => {
  return (
    <div>
      <ul>
        <li>product 1</li>
        <li>product 2</li>
        <li>product 3</li>
      </ul>
    </div>
  );
};
export default ProductList;
