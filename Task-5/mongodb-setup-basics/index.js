const { connectDB } = require("./db");
const {
  createPlan,
  getAllPlans,
  updatePlan,
  deletePlan,
} = require("./crud");

async function run() {
  await connectDB();

  await createPlan({
    title: "Friends Outing",
    destination: "Kerala",
    budget: 25000,
  }
);

  await getAllPlans();

  await updatePlan("Friends Outing", 30000);

  await getAllPlans();

  await deletePlan("Friends Outing");

  await getAllPlans();

  process.exit(0);
}

run();
