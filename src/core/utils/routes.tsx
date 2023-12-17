import React from 'react';
import { MdDashboard, MdAccountBox } from "react-icons/md";
import { RoutesType } from '../types/Routes';
import { TbAlertSquareRounded } from "react-icons/tb";

const routes: RoutesType[] = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: '/admin',
    icon: <MdDashboard className="h-6 w-6" />,
  },
  {
    name: 'Account',
    layout: '/admin',
    path: '/admin/account',
    icon: <MdAccountBox className="h-6 w-6" />,
    secondary: true,
  },
  {
    name: 'Alerts',
    layout: '/admin',
    path: '/admin/alerts',
    icon: <TbAlertSquareRounded className="h-6 w-6" />,
  }
];

export default routes;