let jsonLocationArr: number[] = [
  16.7824103, 96.1856351, 16.7823806, 96.1859689, 16.7823626, 96.1862297,
  16.7821437, 96.1868721, 16.7817934, 96.1875255, 16.7816204, 96.1878296,
  16.7813063, 96.1884081, 16.7810123, 96.1889236, 16.7808493, 96.1892101,
  16.7806009, 96.1896689, 16.7803297, 96.1901978, 16.7801638, 96.1904923,
  16.7798268, 96.191109, 16.7794896, 96.1917454, 16.7793289, 96.1920639,
];

let latLngArray: [number, number][] = [];

for (let i = 0; i < jsonLocationArr.length - 1; i++) {
  latLngArray.push([jsonLocationArr[i], jsonLocationArr[i + 1]]);
}

let totalDistance = 0;

function haversine(lat1: number, lon1: number, lat2: number, lon2: number) {
  // Converts latitude and longitude from degrees to radians
  const toRadians = (angle) => (angle * Math.PI) / 180;

  // Haversine formula
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
}

console.log(new Date().getMilliseconds());

for (let i = 0; i < latLngArray.length - 1; i++) {
  const [lat1, lon1] = latLngArray[i];
  const [lat2, lon2] = latLngArray[i + 1];
  totalDistance += haversine(lat1, lon1, lat2, lon2);
}

console.log(new Date().getMilliseconds());
console.log(`Total distance: ${totalDistance.toFixed(2)} kilometers`);
// d function ka tot chat gyi kuu pay dr hehe