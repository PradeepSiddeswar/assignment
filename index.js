function findRoute(graph, start, end, visited=[], path=[start]) {
  visited.push(start);

  if (start === end) {
    return path;
  }

  for (let i = 0; i < graph[start].length; i++) {
    const city = graph[start][i];
    if (!visited.includes(city)) {
      const newPath = [...path, city];
      const result = findRoute(graph, city, end, visited, newPath);
      if (result !== null) {
        return result;
      }
    }
  }

  return null;
}

const graph = {
  Kiev: ["Prague"],
  Prague: ["Kiev", "Zurich", "Berlin"],
  Zurich: ["Prague", "Amsterdam"],
  Amsterdam: ["Zurich", "Barcelona"],
  Barcelona: ["Amsterdam", "Berlin"],
  Berlin: ["Barcelona", "Kiev"],
  Paris: ["Skopje"],
  Skopje: ["Paris"]
};

const route = findRoute(graph, "Kiev", null);
console.log(route);
