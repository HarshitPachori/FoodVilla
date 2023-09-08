export function filterData(searchTxt, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchTxt.toLowerCase())
  );
  return filteredData;
}
