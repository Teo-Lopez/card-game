const express = require("express");
const authRoutes = express.Router();
const passport = require("passport");
const bcrypt = require("bcrypt");

const User = require("../models/User.model");

authRoutes.post("/signup", (req, res, next) => {
  const { username, password, email, perfil } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "Proporcione un nombre y contraseña" });
    return;
  }

  if (password.length < 6) {
    res.status(400).json({ message: "La contraseña necesita como mínimo 6 caracteres" });
    return;
  }

  User.findOne({ username }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: "Nombre de usuario no es correcto" });
      return;
    }

    if (foundUser) {
      res.status(400).json({ message: "Usuario ya existente. Elija otro" });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const aNewUser = new User({
      username: username,
      password: hashPass,
      email: email,
      perfil: "usuario",
      pass: password
    });

    aNewUser.save(err => {
      if (err) {
        res.status(400).json({ message: "Saving user to database went wrong." });
        return;
      }

      req.login(aNewUser, err => {
        if (err) {
          res.status(500).json({ message: "Login after signup went bad." });
          return;
        }

        res.status(200).json(aNewUser);
      });
    });
  });
});

authRoutes.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: "Something went wrong authenticating user" });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    // save user in session
    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "Session save went bad." });
        return;
      }

      // We are now logged in (that's why we can also send req.user)
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

authRoutes.post("/logout", (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: "Log out success!" });
});

authRoutes.get("/loggedin", (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    console.log("sending user", req.user);
    res.status(200).json(req.user);
    return;
  } else {
    res.status(403).json({ message: "Unauthorized" });
  }
});

module.exports = authRoutes;
