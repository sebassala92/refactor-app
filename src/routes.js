import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdOutlineScreenshotMonitor,
  MdOutlinePerson,
  MdPeople,
  MdOutlineSummarize,
  MdMap,
  MdMoney,

  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Panel Principal",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdOutlineScreenshotMonitor} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Usuarios",
    layout: "/admin",
    path: "/users",
    icon: <Icon as={MdOutlinePerson} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Clientes",
    layout: "/admin",
    path: "/clients",
    icon: <Icon as={MdPeople} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Solicitudes De Servicio",
    layout: "/admin",
    path: "/requests",
    icon: <Icon as={MdOutlineSummarize} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Municipios",
    layout: "/admin",
    path: "/cities",
    icon: <Icon as={MdMap} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Ingresos",
    layout: "/admin",
    path: "/earnings",
    icon: <Icon as={MdMoney} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Facturas",
    layout: "/admin",
    path: "/invoices",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Gastos",
    layout: "/admin",
    path: "/expenses",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Tickets",
    layout: "/admin",
    path: "/tickets",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Saldos",
    layout: "/admin",
    path: "/balances",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Configuración Del Sitio",
    layout: "/admin",
    path: "/settings",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  

  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: RTL,
  },
];

export default routes;
