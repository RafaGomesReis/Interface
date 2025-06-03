import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#0000FF' }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Ínicio',
                    tabBarIcon: ({color}) => 
                        <FontAwesome   
                            name="home"
                            size={28}
                            color={color}
                        />
                }} 
            />
            <Tabs.Screen
                name="categories"
                options={{
                    title: 'Categorias',
                    tabBarIcon: ({color}) => (
                        <FontAwesome   
                            name="archive"
                            size={28}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Sobre',
                    tabBarIcon: ({color}) => (
                        <FontAwesome   
                            name="user"
                            size={28}
                            color={color}
                        />
                    )
                }}
            />
        </Tabs>
    )
}
/*
  
*/