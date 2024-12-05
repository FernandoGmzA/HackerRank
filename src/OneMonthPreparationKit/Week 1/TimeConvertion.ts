function timeConversion(s: string): string {
  // Write your code here
  const term = s.substring(8);
  let hour = parseInt(s.substring(0, 2));
  const minutes = s.substring(3, 5);
  const seconds = s.substring(6, 8);

  if (term === "PM" && hour !== 12) {
    console.log(term);
    hour += 12;
  } else if (term === "AM" && hour === 12) {
    hour = 0;
  }

  const formattedHour = hour.toString().padStart(2, "0");

  console.log(`${formattedHour}:${minutes}:${seconds}`);
  return `${formattedHour}:${minutes}:${seconds}`;
}

export default timeConversion;
