import { Link } from "react-router-dom";

export const CardProducts = ({ btnLink, productObject, changeSetfunction }) => {
  let { CompanyName, Product, Email, Price, CampaignName, productId } =
    productObject;

  //const deleteProduct = async (id) => {
  //  await deleteProductAsync(id);
  // };

  return (
    <>
      <div className="card product-container">
        <div className="card-body">
          <h2 className="card-title">{Product}</h2>
          <h5>Campaign Name: {CampaignName}</h5>
          <h5>Unit Price: {Price}</h5>
          <h5>Company Name: {CompanyName}</h5>
          <h5>Email: {Email}</h5>

          <Link
            to={`/Products${productId}`}
            onClick={() => btnLink(productObject)}
          >
            <button className="btn btn-primary">Buy</button>
          </Link>
        </div>
      </div>
    </>
  );
};
