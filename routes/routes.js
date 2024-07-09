import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StudentDetail from "../components/student/studentDetail";
import Login from "../components/login";
import ParentsDashboard from "../components/parentDashboard";
import StudentMaterialList from "../components/student/studentMaterialList";
import Attendance from "../components/attendance/attendance";
import HomeWork from "../components/homework/homework"
import { Button, Container, Icon } from "native-base";
import PdfView from "../components/homework/pdfview";
import Challan from "../components/challan/challan";
import Notification from "../components/notification/notification";
import Circular from "../components/circular/circular";
import Guardians from "../components/guardians/guardians";
import Diary from "../components/diary/diary"
import Newsletter from "../components/newsletter/newsletter";
import Timetable from "../components/timetable/timetable";
import Syllabus from "../components/syllabus/syllabus";
import Events from "../components/events/events";
import Contact from "../components/contact/contact";
const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Container>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: 'red',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                >

                    <Stack.Screen name="login" options={{ headerShown: false }} component={Login} />
                        <Stack.Screen
                            name="parentsDashboard"
                            component={ParentsDashboard}
                            options={{
                                title: 'Parents',
                                headerLeft: () => <Button transparent><Icon style={{ color: 'white' }} name="menu" /></Button>
                            }}
                        />
                    <Stack.Screen options={{title:'Student Information'}} name="studentDetail" component={StudentDetail} />
                    <Stack.Screen options={{title:'Attendance'}} name="attendance" component={Attendance} />
                    <Stack.Screen options={{title:'Homework'}} name="homeWork" component={HomeWork} />
                    <Stack.Screen options={{title:'Homework PDF'}} name="pdfView" component={PdfView} />
                    <Stack.Screen options={{title:'Fee Challan'}} name="challan" component={Challan} />
                    <Stack.Screen options={{title:'Notifications'}} name="notification" component={Notification} />
                    <Stack.Screen options={{title:'Circular'}} name="circular" component={Circular} />
                    <Stack.Screen options={{title:'Guardians'}} name="guardians" component={Guardians} />
                    <Stack.Screen options={{title:'Diary'}} name="diary" component={Diary} />
                    <Stack.Screen options={{title:'Newsletter'}} name="newsletter" component={Newsletter} />
                    <Stack.Screen options={{title:'Timetable'}} name="timetable" component={Timetable} />
                    <Stack.Screen options={{title:'Syllabus'}} name="syllabus" component={Syllabus} />
                    <Stack.Screen options={{title:'Events'}} name="events" component={Events} />
                    <Stack.Screen options={{title:'Contacts'}} name="contact" component={Contact} />
                </Stack.Navigator>
            </NavigationContainer>
        </Container>
    )
}