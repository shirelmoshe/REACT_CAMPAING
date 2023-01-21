import React, { useState } from "react";
import { addCanpaignServers } from "../../servers/servers";

export const CreatingCampaign = (props) => {
  const [userMessage, setUserMessage] = useState({
    associationName: "",
    hashtag: "",
    email: "",
    uri: "",
    CampaignName: "",
  });

  const handleAddMessage = async () => {
    let json = userMessage;
    await addCanpaignServers(json);
    setUserMessage({});
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  };

  return (
    <div className="student-inputs ">
      <div className="input-group mb-3">
        <span className="input-group-text">association Name</span>
        <input
          className="form-control"
          type="text"
          onChange={(o) => {
            setUserMessage({ ...userMessage, associationName: o.target.value });
          }}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">hashtag</span>
        <input
          className="form-control"
          type="text"
          onChange={(o) => {
            setUserMessage({ ...userMessage, hashtag: o.target.value });
          }}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Email</span>
        <input
          className="form-control"
          type="email"
          onChange={(o) => {
            setUserMessage({ ...userMessage, email: o.target.value });
          }}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">uri</span>
        <input
          className="form-control"
          type="text"
          onChange={(o) => {
            setUserMessage({ ...userMessage, uri: o.target.value });
          }}
          maxLength={300}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">CampaignName</span>
        <input
          className="form-control"
          type="text"
          onChange={(o) => {
            setUserMessage({ ...userMessage, CampaignName: o.target.value });
          }}
        />
      </div>
      <button className="btn btn-secondary" onClick={handleAddMessage}>
        Send
      </button>
    </div>
  );
};
