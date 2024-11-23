let users = [
  { id: 1, name: `Muhammad Rizky Akbar`, address: "Bandung", phone: 12345 },
];

// @desc   Get all users
// @route  GET /api/users/
export const getUsers = (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(users.slice(0, limit));
  }

  res.status(200).json(users);
};

// @desc   Get single user
// @route  GET /api/users/:id
export const getUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    const error = new Error(`User with id ${id} does not exist!`);
    error.status = 404;
    return next(error);
  }

  res.status(200).json(user);
};

// @desc   Create new user
// @route  POST /api/users/
export const createUser = (req, res, next) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
  };

  if (!newUser.name && !newUser.address && !newUser.phone) {
    const error = new Error("Please include name, address, and phone number! ");
    error.status = 400;
    return next(error);
  }

  users.push(newUser);
  res.status(200).json(users);
};

// @desc   Update user
// @route  PUT /api/users/:id
export const updateUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    const error = new Error(`User with id ${id} does not exist!`);
    error.status = 404;
    return next(error);
  }

  user.name = req.body.name || user.name;
  user.address = req.body.address || user.address;
  user.phone = req.body.phone || user.phone;
  res.status(200).json(users);
};

// @desc   Delete user
// @route  DELETE /api/users/:id
export const deleteUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    const error = new Error(`User with id ${id} does not exist!`);
    error.status = 404;
    return next(error);
  }

  users = users.filter((user) => user.id !== id);
  res.status(200).json(users);
};
