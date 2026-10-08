// In-memory stand-in for the Prisma store.
const jobs = [];

async function save(job) {
  const row = { id: jobs.length + 1, ...job };
  jobs.push(row);
  return row;
}

module.exports = { save, jobs };
