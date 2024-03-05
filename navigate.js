import React from "react";
import Info from "./components/Info";
import Main from "./components/Main";
import Edit from "./components/Edit";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Main'
                    component={Main}
                    options={{
                        title: 'Main',
                        headerStyle: {

                        },
                        headerTitleStyle: {
                            fontSize: 20,
                            fontWeight: 700,
                            color: "#613323",
                        }
                    }}
                />
                <Stack.Screen
                    name='Info'
                    component={Info}
                    options={{
                        title: 'Info',
                        headerTitleStyle: {
                            fontSize: 20,
                            fontWeight: 700,
                            color: "#613323",
                        }
                    }}
                />
                <Stack.Screen
                    name='Edit'
                    component={Edit}
                    options={{
                        title: 'Edit',
                        headerTitleStyle: {
                            fontSize: 20,
                            fontWeight: 700,
                            color: "#613323",
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

