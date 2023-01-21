import React, { useState, useEffect } from "react";
import { getTwitterTable } from "../../servers/servers";
import { TwitterCard } from "../../Twitter/TwitterCard";

export const TwitterTable = () => {
  const [twitterTable, settwitterTable] = useState([]);

  const initTwitterTableInfo = async () => {
    let response = await getTwitterTable();
    if (response && typeof response === "object") {
      let CampaignsArr = Object.values(response);
      settwitterTable(CampaignsArr);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    initTwitterTableInfo();
  }, []);

  return (
    <>
      <>
        <table className="table table-striped">
          <thead className="table table-striped">
            <tr>
              <th scope="col">associationName</th>
              <th scope="col">hashtag</th>
              <th scope="col">email</th>
              <th scope="col">userName</th>
              <th scope="col">twitterUsername</th>
              <th scope="col">CampaignName</th>
              <th scope="col">userMoney</th>
            </tr>
          </thead>
          <tbody className="table table-striped">
            {twitterTable &&
              twitterTable.map((response) => {
                const {
                  userId,
                  associationName,
                  hashtag,
                  email,
                  userName,
                  twitterUsername,
                  CampaignName,
                  userMoney,
                } = response;
                return (
                  <TwitterCard
                    key={userId}
                    associationName={associationName}
                    hashtag={hashtag}
                    email={email}
                    userName={userName}
                    twitterUsername={twitterUsername}
                    CampaignName={CampaignName}
                    userMoney={userMoney}
                  ></TwitterCard>
                );
              })}
          </tbody>
        </table>
      </>
    </>
  );
};
