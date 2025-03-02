export function dateTimeFormat(createdAt) {
  if (!createdAt) {
    return "Invalid Date";
  }

  const date = new Date(
    typeof createdAt === "number" ? createdAt : createdAt.trim()
  );

  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export const convertDateTimeSlot = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

