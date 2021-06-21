import React, { useState, useEffect } from "react";
import { FcApproval } from "react-icons/fc";

const GithubComponent = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      setLoading(false);
      setUsers(await response.json());
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  const content = loading ? (
    <div className="loadingDiv">
      <h1>Loading...</h1>
    </div>
  ) : (
    <div>
      <h2>List of GitHub Users</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((curElem) => {
            const { avatar_url, id, login } = curElem;
            return (
              <div className="col-10 col-md-4 mt-5" key={id}>
                <div className="card p-2 ml-5 mr-5">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      {" "}
                      <img
                        src={avatar_url}
                        className="rounded"
                        width="155"
                      />{" "}
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textLeft">
                        {login} <FcApproval />{" "}
                      </h4>
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span className="articles">Articles</span>{" "}
                          <span className="number1">38</span>{" "}
                        </div>
                        <div className="d-flex flex-column">
                          <span className="followers">Followers</span>{" "}
                          <span className="number2">980</span>{" "}
                        </div>
                        <div className="d-flex flex-column">
                          <span className="rating">Rating</span>{" "}
                          <span className="number3">8.9</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
  return <div>{content}</div>;
};

export default GithubComponent;
