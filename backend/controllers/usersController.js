let DUMMY_USERS = [
  { firstname: "s", surname: "s", username: "s", email: "s", password: "s" },
];

const signup = (req, res, next) => {
  const { firstname, surname, username, email, password } = req.body;

  const newUser = {
    id: Math.random().toString(),
    firstname,
    surname,
    username,
    email,
    password,
  };

  DUMMY_USERS.push(newUser);

  res.status(200).json({ message: "Account Created" });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const finduser = DUMMY_USERS.find((user) => user.email === email);
  if (!finduser) {
    res.json({ message: "User does not exist" });
    return;
  }

  if (finduser.password === password) {
    res.json({ message: "logged in" });
    return; 
  }
  res.json({ message: "Invalid details" });
};

exports.signup = signup;
exports.login = login;
