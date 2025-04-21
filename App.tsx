import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Lab1 from './src/screens/Lab1';
import Lab2 from './src/screens/Lab2';
import Lab3 from './src/screens/Lab3';
import Lab4 from './src/screens/Lab4';
import Lab5 from './src/screens/Lab5';
import Lab6 from './src/screens/Lab6';
import Lab7 from './src/screens/Lab7';
import Lab8 from './src/screens/Lab8';

// MSSV 2124802010151 - Lê Sỹ Hoài

export default function App() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projectTitles = [
    'Hello World',
    'Capturing Taps',
    'Custom Component',
    'State & Props',
    'Styling',
    'Scrollable Content',
    'Building a Form',
    'Long Lists'
  ];

  const renderScreen = () => {
    switch (activeProject) {
      case 1: return <Lab1 />;
      case 2: return <Lab2 />;
      case 3: return <Lab3 />;
      case 4: return <Lab4 />;
      case 5: return <Lab5 />;
      case 6: return <Lab6 />;
      case 7: return <Lab7 />;
      case 8: return <Lab8 />;
      default:
        return (
          <View style={styles.menu}>
            <Text style={styles.title}>React Native Projects</Text>
            <Text style={styles.subtitle}>2124802010151 - Lê Sỹ Hoài</Text>
             
            <View style={styles.projectGrid}>
              {[...Array(8)].map((_, i) => (
                <TouchableOpacity
                  key={i}
                  style={styles.projectButton}
                  onPress={() => setActiveProject(i + 1)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.projectNumber}>Project {i + 1}</Text>
                  <Text style={styles.projectName}>{projectTitles[i]}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <ScrollView contentContainerStyle={styles.container}>
        {renderScreen()}
        {activeProject !== null && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setActiveProject(null)}
            activeOpacity={0.7}
          >
            <Text style={styles.backButtonText}>🔙 Quay về menu</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flexGrow: 1,
    padding: 16,
  },
  menu: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  projectGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  projectButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  projectNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4287f5',
    marginBottom: 6,
  },
  projectName: {
    fontSize: 14,
    color: '#666',
  },
  backButton: {
    backgroundColor: '#4287f5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }
});