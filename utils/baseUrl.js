const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://hills-furniture-outlet.vercel.app"
    : "http://localhost:3000";

export default baseUrl;
