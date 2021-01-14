import React from "react";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import AppNavigation from './AppNavigation';

interface RoutesProps { }

export const Routes: React.FC<RoutesProps> = ({ children }) => {
    return (
        <>
            <NavigationContainer>
                <AppNavigation>
                    {children}
                </AppNavigation>
            </NavigationContainer>
        </>
    );
};