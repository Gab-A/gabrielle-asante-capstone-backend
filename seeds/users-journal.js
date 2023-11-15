const usersData = require("../seeds/seed-data/users");
const journalsData = require("../seeds/seed-data/journal");

exports.seed = async function (knex) {
  await knex("journal").del();
  await knex("user").del();
  await knex("user").insert(usersData);
  await knex("journal").insert(journalsData);
};
