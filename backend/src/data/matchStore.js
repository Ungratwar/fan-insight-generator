
let matches = [];

const addMatch = (match) => {
  matches.push({
    ...match,
    id: Date.now(),
    createdAt: new Date(),
  });
};

const getAllMatches = () => matches;

module.exports = {
  addMatch,
  getAllMatches,
};