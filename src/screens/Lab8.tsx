import React from 'react';
import {
  SectionList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from 'react-native';

// MSSV 2124802010151 - Lê Sỹ Hoài


const { width } = Dimensions.get('window');

interface Person {
  name: {
    title: string;
    first: string;
    last: string;
  };
}

interface Section {
  title: string;
  data: Person[];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width, 
    backgroundColor: '#fff',
  },
  row: {
    width: width, 
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 16,
    color: '#666',
  },
  separator: {
    width: width, 
    backgroundColor: '#E0E0E0',
    height: 1,
    marginLeft: 16,
  },
  sectionHeader: {
    width: width, 
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#b7b7b7',
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  statusBar: {
    width: width, 
    height: 24,
    backgroundColor: '#666',
  },
  statusBarContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  time: {
    color: 'white',
    fontSize: 16,
  },
  icons: {
    color: 'white',
    fontSize: 16,
  }
});

const groupPeopleByLastName = (_data: Person[]): Section[] => {
  const data = [..._data];
  const groupedData: { [key: string]: Section } = data.reduce((accumulator, item) => {
    const group = item.name.last[0].toUpperCase();
    if (accumulator[group]) {
      accumulator[group].data.push(item);
    } else {
      accumulator[group] = {
        title: group,
        data: [item],
      };
    }
    return accumulator;
  }, {} as { [key: string]: Section });

  const sections = Object.keys(groupedData).map((key) => {
    return groupedData[key];
  });

  return sections.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    return -1;
  });
};

const Lab8: React.FC = () => {
  return (
    <View style={{ flex: 1, width: width }}>
      <SectionList
        style={{ width: width }} 
        contentContainerStyle={{ width: width }} 
        sections={groupPeopleByLastName(PEOPLE)}
        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
        renderSectionHeader={({ section }) => {
          return (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{section.title}</Text>
            </View>
          );
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.name}>
                {item.name.first} {item.name.last}
              </Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default Lab8;


const PEOPLE: Person[] = [
  {
    name: {
      title: "Ms",
      first: "Linda",
      last: "Anderson",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Michael",
      last: "Brown",
    },
  },
  {
    name: {
      title: "Mr",
      first: "John",
      last: "Doe",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Sarah",
      last: "Davis",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Mohamoud",
      last: "Faaij",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Maëlle",
      last: "Henry",
    },
  },
  {
    name: {
      title: "Mr",
      first: "William",
      last: "Harris",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Robert", 
      last: "Jackson",
    },
  }
];