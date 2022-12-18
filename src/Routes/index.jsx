import { ROUTES } from "../constants";
import CinemaSystem from "../Pages/Cinema_System";
import Home from "../Pages/Home";

export const publishRoutes = [
  {
    path:'/',component:Home
  },
  {
    path:ROUTES.CINEMA_SYSTEM,component:CinemaSystem
  },
//   {
//     path:ROUTES.COMMENT_FORM,component:CommentForm
//   },
//   {
//     path:ROUTES.PRIORITY,component:Priority
//   },
//   {
//     path:ROUTES.PRIORITY_DETAIL,component:PriorityDetail
//   },
];
