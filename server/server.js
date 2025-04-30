const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const { connect } = require("./Database/connect");
const useRouter = require("./router/userRouters");
const useTicket = require("./router/ticketsRouters");
const achatRouter = require("./router/achatRouter");
const routeEvent = require("./router/eventRouter");


// Middleware
app.use(express.json());
app.use("/users", useRouter);
app.use("/tickets", useTicket);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/achats", achatRouter);
app.use("/events", routeEvent);
connect(); // Connexion à la base de données

// Démarrage du serveur
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.error("❌ Erreur lors du démarrage du serveur :", err);
  } else {
    console.log(`🚀 Serveur démarré sur le port ${process.env.PORT}`);
    console.log("✅ MongoDB connecté");
  }
});