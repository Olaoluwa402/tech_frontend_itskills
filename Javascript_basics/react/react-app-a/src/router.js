import HomeScreen from "./screens/Home/HomeScreen";
import AboutScreen from "./screens/About/AboutScreen";
import NotFoundScreen from "./screens/NotFound/NotFound";
import ContactScreen from "./screens/Contact/ContactScreen";
import PhotosScreen from "./screens/Photos/PhotosScreen";
import SinglePhotoScreen from "./screens/SinglePhotoScreen/SinglePhotoScreen";
import Template from "./components/Template/Template/Template";
import { Route, Routes, Navigate, NavLink } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Router = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Routes>
        <Route
          path="/"
          element={
            <Template>
              <HomeScreen />
            </Template>
          }
        />
        <Route
          path="/about"
          element={
            <Template>
              <AboutScreen />
            </Template>
          }
        />

        <Route
          path="/photos"
          element={
            <Template>
              <PhotosScreen />
            </Template>
          }
        />

        <Route
          path="/photos/:id"
          element={
            <Template>
              <SinglePhotoScreen />
            </Template>
          }
        />

        <Route
          path="/contact"
          element={
            <Template>
              <ContactScreen />
            </Template>
          }
        />
        <Route
          path="/not-found"
          element={
            <Template>
              <NotFoundScreen />
            </Template>
          }
        />

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </>
  );
};

export default Router;
