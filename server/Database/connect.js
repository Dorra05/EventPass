require("dotenv").config(); 
const mongoose = require("mongoose");

// Fonction de connexion à la base de données MongoDB
const connect = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    // {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
    .then(() => console.log("✅ Connexion à la base de données réussie"))
    .catch((err) => console.error(err));
    // console.error("❌ Échec de la connexion à la base de données :", err.message);
    // process.exit(1); // Arrête le processus si la connexion échoue
};
module.exports = { connect };
