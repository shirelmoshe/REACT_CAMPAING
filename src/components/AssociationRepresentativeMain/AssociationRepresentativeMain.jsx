import { useEffect } from "react";
import { useState } from "react";
import { GetRoles } from "../servers/servers";
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";
import { CreatingCampaign } from "./../pages/CreatingCampaign/CreatingCampaign";
import { Campaigns } from "./../pages/campaigns/campaigns";
import { Products } from "./../pages/Products/products";
import { SingUp } from "./../pages/SignUp/SignUp";
import { Home } from "../pages/Home/Home";
import { AssociationRepresentativeUser } from "../pages/AssociationRepresentative/AssociationRepresentative";
import { NavbarAssociationRepresentative } from "../AssociationRepresentativeNavbar/AssociationRepresentativeNavbar";
import { ProductData } from "../productData/ProductInfo";
import { UserContext } from "../context/context";
import { ThemeContext } from "@emotion/react";

export const AssociationRepresentative = () => {
  const { user } = useAuth0();
  const [role, setRole] = useState([]);

  let user_id = user.sub;
  const handleRoles = async () => {
    let roles = await GetRoles(user_id);

    setRole(roles);
  };
  useEffect(() => {
    handleRoles();
  }, []);

  const [product, setProduct] = useState({});
  const [productUp, setProductUp] = useState({});
  return (
    <>
      <UserContext.Provider value={{ productUp, setProductUp }}>
        <ThemeContext.Provider value={{ product, setProduct }}>
          <NavbarAssociationRepresentative />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/creatingCampaign"
              element={<CreatingCampaign />}
            ></Route>
            <Route path="/Campaigns" element={<Campaigns />}></Route>
            <Route path="/SingUp" element={<SingUp />}></Route>
            <Route path="/Products" element={<Products />}></Route>
            <Route
              path={`/Products${product.productId}`}
              element={
                <ProductData
                  CampaignName={product.CampaignName}
                  Product={product.Product}
                  Price={product.Price}
                  productId={product.productId}
                />
              }
            />
            <Route
              path="/AssociationRepresentative"
              element={<AssociationRepresentativeUser user={user_id} />}
            ></Route>
          </Routes>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  );
};
