import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import EventForm from "./EventForm";
import EvenList from "./EventList";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated"
]);

const MainNavigator = createStackNavigator({
  list: {
    screen: EvenList,
    navigationOptions: () => ({
      title: "Your Events"
    })
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: "Add an Event"
    })
  }
});

const App = createAppContainer(MainNavigator);

export default App;
