import { CommonActions } from '@react-navigation/native';

let navigator;

export const setNavigator = (nav) => {
  navigator = nav;  
}

// trigger navigation. Can be used in noncomponent files. actions can change navigator state.
// dispatch - send an action object to update the navigation state
// All NavigationActions return an object that can be sent to the router using navigation.dispatch() method.
export const navigate = (name, params) => {
  navigator.dispatch(
    CommonActions.navigate({
      name,
      params
    })
  )
}
