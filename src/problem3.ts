
function formatCoordinate(
 [latitude, longitude, locationName] : readonly [number, number, string]) : string {
    return `Location: ${locationName} (${latitude} ,${longitude})`;

 }

console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));