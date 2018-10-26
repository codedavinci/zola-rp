import React, { Component } from "react";

import ListUsers from "./ListUsers";
import FilterCategory from "./FilterCategory";
import Sorting from "./Sorting";

import {
  sortUsersByName,
  sortUsersByPriority,
  sortByDefault,
  flagUsersByCategories,
  getUniqueCategories,
  defaultUsers,
  normalizeUsersWithId,
  getDefaultIds,
  safeGet
} from "../utils ";
import API from "../data.json";

import "./App.css";

const MAPPED_SORTS = {
  az: sortUsersByName,
  priority: sortUsersByPriority,
  default: sortByDefault
};

class App extends Component {
  state = {
    users: [],
    defaultIds: [],
    categories: [],
    categoryChecked: ""
  };

  componentDidMount() {
    const users = normalizeUsersWithId(API.data);
    const defaultIds = getDefaultIds(users);
    const categories = getUniqueCategories(users);

    this.setState({ users, defaultIds, categories });
  }

  handleFilter = e => {
    const { users } = this.state;
    const cat = safeGet(["target", "value"], e);
    let usersFiltered = flagUsersByCategories(users, cat);

    this.setState({ categoryChecked: cat, users: usersFiltered });
  };

  handleSorting = e => {
    const { users, defaultIds } = this.state;
    this.setState({ categoryChecked: "" });

    let defaultUsersList = defaultUsers(users);

    let param = safeGet(["target", "value"], e);

    if (param === "default") {
      let defaultUsers = MAPPED_SORTS[param](defaultUsersList, defaultIds);
      return this.setState({ users: defaultUsers });
    }

    let sorted = MAPPED_SORTS[param](defaultUsersList);

    this.setState({ users: sorted });
  };

  render() {
    const { users, categories, categoryChecked } = this.state;

    return (
      <div className="App">
        <div className="filters">
          <Sorting handleSorting={this.handleSorting} />
          <FilterCategory
            categories={categories}
            categoryChecked={categoryChecked}
            handleFilter={this.handleFilter}
          />
        </div>
        <div className="grid">
          <ListUsers users={users} />
        </div>
      </div>
    );
  }
}

export default App;
