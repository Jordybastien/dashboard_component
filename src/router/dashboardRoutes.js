import React from 'react';
import { Route } from 'react-router-dom';
import MainBoard from '../components/dashboard/mainBoard';
import { AllRoles } from '../utils/constants';

const DashboardRouting = () => {
  return (
    <>
      <Route path="/dashboard" exact component={MainBoard} />
    </>
  );
};

export default DashboardRouting;
