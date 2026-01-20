const { getDB } = require("./db");

const COLLECTION = "travelPlans";

//Create
async function createPlan(plan) {
  const db = getDB();
  const result = await db.collection(COLLECTION).insertOne(plan);
  console.log("Created:", result.insertedId);
}

//Read
async function getAllPlans() {
  const db = getDB();
  const plans = await db.collection(COLLECTION).find().toArray();
  console.log("All Plans:", plans);
}

//Update
async function updatePlan(title, newBudget) {
  const db = getDB();
  const result = await db.collection(COLLECTION).updateOne(
    { title },
    { $set: { budget: newBudget } }
  );
  console.log("Updated Count:", result.modifiedCount);
}

//Delete
async function deletePlan(title) {
  const db = getDB();
  const result = await db.collection(COLLECTION).deleteOne({ title });
  console.log("Deleted Count:", result.deletedCount);
}

module.exports = {
  createPlan,
  getAllPlans,
  updatePlan,
  deletePlan,
};
