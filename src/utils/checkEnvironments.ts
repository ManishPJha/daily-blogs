const checkEnvironments = () => {
//   if (typeof window !== "undefined")
//     return `http://localhost:${process.env.PORT ?? 3000}`;
  if (process.env.NODE_ENV === "development")
    return `http://${process.env.LOCAL_BASE_URL}:${process.env.PORT}`;
  if (process.env.NODE_ENV === "production")
    return `https://${process.env.LIVE_BASE_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export default checkEnvironments;
