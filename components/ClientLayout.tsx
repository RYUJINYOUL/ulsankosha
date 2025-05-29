"use client"
import { Provider } from "react-redux";
import { store } from '../store'
import React from 'react';

const ClientLayout: React.FC<{ children: React.ReactNode }> =({
    children,
}) => {
    return (
        <Provider store={store}>
            <main className="h-full">{children}</main>
        </Provider>
    );
};

export default ClientLayout;