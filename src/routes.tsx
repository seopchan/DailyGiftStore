import OrderManagementPage from "@/pages/seller/OrderManagementPage.tsx";
import ProductManagementPage from "@/pages/seller/ProductManagementPage.tsx";
import ProductRegistrationPage from "@/pages/seller/ProductRegistrationPage.tsx";
import SellerDashboardLayout from "@/pages/seller/SellerDashboardLayout.tsx";
import SellerLoginPage from "@/pages/seller/SellerLoginPage.tsx";
import SellerSignupPage from "@/pages/seller/SellerSignupPage.tsx";
import DashboardLayout from "@/layouts/DashboardLayout.tsx";
import SellerLayout from "@/layouts/SellerLayout.tsx";
import ContactPage from "@/pages/dashboard/ContactPage.tsx";
import OrderHistoryPage from "@/pages/dashboard/OrderHistoryPage.tsx";
import PaymentInfoPage from "@/pages/dashboard/PaymentInfoPage.tsx";
import UserInfoPage from "@/pages/dashboard/UserInfoPage.tsx";
import Layout from "@/layouts/Layout.tsx";
import CheckEmailPage from "@/pages/auth/CheckEmailPage.tsx";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage.tsx";
import NotFoundPage from "@/pages/error/NotFoundPage.tsx";
import PasswordChangedPage from "@/pages/auth/PasswordChangedPage.tsx";
import ProductDetailPage from "@/pages/commerce/ProductDetailPage.tsx";
import ResetPasswordPage from "@/pages/auth/ResetPasswordPage.tsx";
import SearchResultsPage from "@/pages/commerce/SearchResultsPage.tsx";
import SigninPage from "@/pages/auth/SigninPage.tsx";
import SigninSelectionPage from "@/pages/auth/SigninSelectionPage.tsx";
import SignupFormPage from "@/pages/auth/SignupFormPage.tsx";
import SignupSelectionPage from "@/pages/auth/SignupSelectionPage.tsx";
import { RouteObject } from "react-router-dom";
import HomePage from "./pages/commerce/HomePage.tsx";

// noinspection JSXNamespaceValidation
const routes: RouteObject[] = [
  // PUBLIC
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "signup-selection",
        element: <SignupSelectionPage />,
      },
      {
        path: "signin-selection",
        element: <SigninSelectionPage />,
      },
      {
        path: "signin",
        element: <SigninPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "check-email",
        element: <CheckEmailPage />,
      },
      {
        path: "reset-password",
        element: <ResetPasswordPage />,
      },
      {
        path: "password-changed",
        element: <PasswordChangedPage />,
      },
      {
        path: "search-results",
        element: <SearchResultsPage />,
      },
      {
        path: "product-detail/:productId",
        element: <ProductDetailPage />,
      },
    ],
  },
  // DASHBOARD
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "orders",
        element: <OrderHistoryPage />,
      },
      {
        path: "userinfo",
        element: <UserInfoPage />,
      },
      {
        path: "paymentinfo",
        element: <PaymentInfoPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  // SELLER
  {
    path: "seller",
    element: <SellerLayout />,
    children: [
      {
        path: "login",
        element: <SellerLoginPage />,
      },
      {
        path: "signup",
        element: <SellerSignupPage />,
      },
      {
        path: "dashboard",
        element: <SellerDashboardLayout />,
        children: [
          {
            path: "product-management",
            element: <ProductManagementPage />,
          },
          {
            path: "order-management",
            element: <OrderManagementPage />,
          },
        ],
      },
      {
        path: "product-registration",
        element: <ProductRegistrationPage />,
      },
    ],
  },
  // NOT FOUND
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;
