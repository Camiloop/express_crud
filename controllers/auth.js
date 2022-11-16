import jwt from "jsonwebtoken"
import User from "../models/users.js"
import bcrypt from 'bcryotjs'

// Esta funcion crea un nuevo usuario en nuestra app

export const register = async (req, res) => {
  try {
    const user = await User.create({
      user: req.body.name,
      email: req.body.email,
      password: bcrypt.hashsync(req.body.password, 8)

    });

    res.status(201).json({
      "message": "New user added!",
      "userId": user.id
    })
  } catch (err) {
    console.log*(err)
  }
}

// Esta funcion permite y verifica que los datos de logeo son correctos.

export const login = async (req, res) => { 
  try { 
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    })

    // En caso de que el usuario no sea correcto

    if (!user) {
      return res.status(404).send({
        message: `${req.body.email} is not a valid email.`
      });
    }

    // En caso de que el password no sea correcto

    const isPasswordValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
  
    if (!isPasswordValid) {
      return res.status(401)
        .send({
          message: "Invalid Password." 
        });
    }

    // Creando un token para nuestro usuario

    const token = jwt.sign({
      id: user.id,
      user: user.user,
    }, 'secret-key', { 
      expiresIn: 86400 
    });

    res.status(200)
      .send({
        user: {
          id: user.id,
          email: user.email,
          user: user.user,
        },
        message: "Login successfull",
        accessToken: token,
      });
  } catch (err) {
    console.log(err);
  }
}