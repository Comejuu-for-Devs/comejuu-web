export const getDate = (str: string) => {
  const date = new Date(str);
  const day = date.getDate();
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
  const monthName = date.toLocaleDateString("en-US", { month: "short" });
  const year = date.getFullYear();
  return {
    day,
    dayName,
    monthName,
    year,
  };
};
