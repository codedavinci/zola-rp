export const sortUsersByName = arr =>
  arr.sort((a, b) => {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });

export const sortUsersByPriority = arr =>
  arr.sort((a, b) => a.priority - b.priority);

export const normalizeUsersWithId = users =>
  users.reduce((acc, user, i) => {
    acc[i] = { ...user, id: i, doRender: true };
    return acc;
  }, []);

export const getDefaultIds = users =>
  users.reduce((acc, user, i) => {
    acc[i] = user.id;
    return acc;
  }, []);

export const sortByDefault = (users, ids) =>
  ids.reduce((acc, defaultId, i) => {
    const defaultUser = users.find(u => u.id === defaultId);
    acc[i] = { ...defaultUser };
    return acc;
  }, []);

export const safeGet = (args, ret) =>
  args.reduce((acc, val) => (acc && acc[val] ? acc[val] : null), ret);

export const getUniqueCategories = users =>
  users.map(u => u.category).filter((ctg, i, self) => self.indexOf(ctg) >= i);

export const flagUsersByCategories = (users, cat) =>
  users.reduce((acc, user, i) => {
    if (user.category !== cat) {
      acc[i] = { ...user, doRender: false };
      return acc;
    }

    acc[i] = { ...user, doRender: true };

    return acc;
  }, []);

export const defaultUsers = users =>
  users.map(user => ({ ...user, doRender: true }));
