import axios from "axios";

export class AuthService {
  constructor() {
    this.service = axios.create({ baseURL: "https://ambarinos-card-game.herokuapp.com/auth", withCredentials: true });
  }

  signUp = ({ user, password }) =>
    this.service
      .post("signup", { username: user, password })
      .then(res => res.data)
      .catch(err => console.log({ err }));

  login = ({ user, password }) =>
    this.service
      .post("login", { username: user, password })
      .then(res => res.data)
      .catch(err => console.log({ err }));

  getLoggedUser = () =>
    this.service
      .get("/loggedin")
      .then(res => res.data)
      .catch(err => console.log({ err }));

  logout = () =>
    this.service
      .post("/logout")
      .then(res => res.data)
      .catch(err => console.log({ err }));
}
