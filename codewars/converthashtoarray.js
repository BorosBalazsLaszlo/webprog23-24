function convertHashToArray(hash) {
  return Object.entries(hash);
}

const hash = {name: 'Jeremy', age: 24, role: 'Software Engineer'};
const result = convertHashToArray(hash);
