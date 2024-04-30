import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Internet from "../pages/Internet/Internet.jsx";
import Layout from "../components/Layout.jsx";
import Landing from "../pages/Landing/Landing.jsx";
import Electricity from "../pages/Electricity/Electricity.jsx";
import GetStarted from "../pages/getStarted/GetStarted.jsx";
import Insurance from "../pages/Insurance/Insurance.jsx";
import ChangeOfAdddress from "../pages/ChangeOfAddress/ChangeOfAdddress.jsx";
import AboutUS from "../pages/AboutUS/AboutUS.jsx";
import HowItWorks from "../pages/HowItWorks/HowItWorks.jsx";
import Blog from "../pages/blog/Blog.jsx";
import BlogTemplate from "../pages/blog/BlogTemplate.jsx";
import BlogCategory from "../pages/blog/BlogCategory.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Landing />} />
      <Route path="/internet" element={<Internet />} />
      <Route path="/electricity" element={<Electricity />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/change-of-address" element={<ChangeOfAdddress />} />
      <Route path="/about-us" element={<AboutUS />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:category/:slug" element={<BlogTemplate />} />
      <Route path="/blog/category/:category" element={<BlogCategory />} />
    </Route>
  )
);
export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
