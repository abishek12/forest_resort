export const generateTimeSlots = (start = "09:00", end = "23:00") => {
  const slots = [];
  let current = new Date(`1970-01-01T${start}:00`);
  const endTime = new Date(`1970-01-01T${end}:00`);

  while (current < endTime) {
    const next = new Date(current.getTime() + 60 * 60 * 1000);
    if (next <= endTime) {
      slots.push({
        start: current.toTimeString().slice(0, 5),
        end: next.toTimeString().slice(0, 5),
      });
    }
    current = next;
  }

  return slots;
};
