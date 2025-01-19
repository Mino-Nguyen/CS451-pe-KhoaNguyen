import React from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Image } from 'react-native';

const App = () => {

    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: '#fff',
        }}>
            <View style={styles.img}>
                <Image source={require('./icon.png')} style={styles.image} />
            </View>
            <View>
                <Text style={styles.label}>Enter your favorite course:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="e.g., CS624"
                />
            </View>

            <View style={styles.item}>
                <Text style={styles.Title}>Core Courses (24 credits)</Text>
                <Text>CS 504 Software Engineering</Text>
                <Text>CS 506 Programming for Computing</Text>
                <Text>CS 519 Cloud Computing Overview</Text>
                <Text>CS 533 Computer Architecture</Text>
                <Text>CS 547 Secure Systems and Programs</Text>
                <Text>CS 622 Discrete Math and Algorithms for Computing</Text>
                <Text>CS 510 Artificial Intelligence for Data Science</Text>
                <Text>DS 620 Machine Learning & Deep Learning</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.Title}>Depth of Study (6 credits)</Text>
                <Text>CS 624 Full-Stack Development - Mobile App</Text>
                <Text>CS 628 Full-Stack Development - Web App</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.Title}>Capstone Course (3 credits)</Text>
                <Text>CS 699 Capstone Project</Text>
            </View>
        </ScrollView>
    );
};

export default App;

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        borderColor: '#ccc',
        fontSize: 16,
    },
    Title: {
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'yellow',
    },
    item: {
        fontSize: 16,
    },
});
