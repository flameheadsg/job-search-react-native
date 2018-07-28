import React, { Component } from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

class Review extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: <Button title="Settings" onPress={() => { navigation.navigate('settings'); }} />
  });

  renderSavedJobs() {
    return this.props.savedJobs.map(job => {
      const { company, title, url, id, location, created_at } = job;

      return (
        <Card
          title={title}
          key={id}
        >
          <View>
            <View style={styles.detailWrapper}>
              <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>{company}</Text>
              <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>{location}</Text>
              <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>{created_at}</Text>
            </View>
            <Button
              title="Apply Now"
              backgroundColor="#03A9F4"
              onPress={() => Linking.openURL(url)}
            />
          </View>
        </Card>
      );
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderSavedJobs()}
      </ScrollView>
    );
  }
};

const styles = {
  detailWrapper: {
    marginBottom: 7,
    justifyContent: 'space-around'
  }
};

function mapStateToProps({ savedJobs }) {
  return { savedJobs };
}

export default connect(mapStateToProps)(Review);
