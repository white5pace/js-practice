import React, {Fragment, useContext} from 'react';
import Search from "../components/Search";
import {GithubContext} from "../context/github/GithubContext";
import Card from "../components/Card";


const Home = () => {
  const {loading, users} = useContext(GithubContext)

  return (
    <Fragment>
      <Search/>

      <div className="row">
        {loading
          ? <p className="text-center">Loading...</p>
          : users.map(user => (
              <div className="col-sm-4 mb-4" key={user.id}>
                <Card user={user} />
              </div>
            ))
        }
      </div>
    </Fragment>
  );
};

export default Home;