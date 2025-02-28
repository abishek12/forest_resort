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
