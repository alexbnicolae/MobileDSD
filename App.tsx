import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useMemo } from 'react';
import AllExpenses from './screens/all-expeneses/all-expeneses';
import ManageExpense from './screens/manage-expense/manage-expense';
import RecentExpenses from './screens/recent-expenses/recent-expenses';
import { theme } from './theme/colors';
import { Ionicons } from '@expo/vector-icons'
import IconButton from './components/icon-button/icon-button.component';
import ExpensesContextProvider from './store/expenses-context';

export type AppParamList = {
  ManageExpense: {
    expenseId: string
  };
}

export default function App() {

  const Stack = useMemo(
    () => {
      return createNativeStackNavigator();
    },
    []
  ) 
  const BottomTabs = useMemo (
    () => createBottomTabNavigator(),
    []
  ) 

  const ExpnsesOverview = useCallback(
    () =>{
      return (
        <BottomTabs.Navigator
          screenOptions={({ navigation }) => ({  
            headerStyle: { backgroundColor: theme.colors.primary500 },
            headerTintColor: 'white',
            tabBarStyle: { backgroundColor: theme.colors.primary500 },
            tabBarActiveTintColor: theme.colors.accent500,
            headerRight: ({tintColor}) => (
              <IconButton 
                icon="add" 
                size={24} 
                color={tintColor} 
                onPress={() => { 
                  navigation.navigate('ManageExpense')
                 }} />
            )
          })}
        >
          <BottomTabs.Screen 
            name='RecentExpenses' 
            component={RecentExpenses}  
            options = {{
              title: 'Recent Expenses',
              tabBarLabel: 'Recent',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name={'hourglass'} size={size} color={color} />
              ),
            }}
          />
          <BottomTabs.Screen 
            name='AllExpenses' 
            component={AllExpenses} 
            options = {{
              title: 'All Expenses',
              tabBarLabel: 'All Expenses',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name={'calendar'} size={size} color={color} />
              ),
            }}
          />
        </BottomTabs.Navigator>
      )
    },
    []
  )

  return (
      <>
        <StatusBar />
        <ExpensesContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: theme.colors.primary500 },
                headerTintColor: 'white'
              }}
            >
              <Stack.Screen 
                name='ExpensesOverview' 
                component={ExpnsesOverview} 
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen 
                name='ManageExpense' 
                component={ManageExpense}
                options={{
                  presentation: 'modal'
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ExpensesContextProvider>
      </>
    
  );
}


