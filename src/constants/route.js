import Main from "../pages/main";
import Post from "../pages/post";
import Shop from "../pages/shop";

export const routes = [
  { path: /^\/$/, element: Main },
  { path: /^\/post\/[\w]+$/, element: Post },
  { path: /^\/shop$/, element: Shop },
];
