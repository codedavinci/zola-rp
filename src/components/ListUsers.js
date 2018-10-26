import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import Details from "./Details";

const ListUsers = ({ users }) => (
  <div className="grid-wrapper">
    {users.map(user => {
      return (
        user.doRender && (
          <Card key={user.id}>
            <Details {...user} />
          </Card>
        )
      );
    })}
  </div>
);

ListUsers.propTypes = {
  users: PropTypes.array.isRequired
};

export default ListUsers;
