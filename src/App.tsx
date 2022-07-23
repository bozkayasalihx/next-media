import ApplicationNavigator from "@/Navigators/Application";
import { persistor, store } from "@/Store";
import React from "react";
import { Text, View } from "react-native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import "./Translations";

const Loader: React.FC<{}> = () => {
    return (
        <View>
            <Text>loading ...</Text>
        </View>
    );
};

const App = () => (
    <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
            <ApplicationNavigator />
        </PersistGate>
    </Provider>
);

export default App;
