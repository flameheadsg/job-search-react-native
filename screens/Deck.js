import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, Icon } from 'react-native-elements';
import * as actions from '../actions';

import Swipe from '../components/Swipe';

class Deck extends Component {
  static navigationOptions = {
    title: 'Jobs',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="description" size={30} color={tintColor} />;
    }
  }

  renderCard(job) {
    return (
      <Card title={job.title}>
        <View>
          <Image
            style={styles.logoStyle}
            source={{ uri: job.company_logo || '' }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 10
            }}
          >
            {job.company}
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginBottom: 5
            }}
          >
            {job.location}
          </Text>
        </View>
        <View>
          <Text>{job.created_at}</Text>
        </View>
      </Card>
    );
  }

  renderNoMoreCards = () => {
    return (
      <Card style={{ marginTop: 25 }} title="No More Jobs">
        <Button
          title="Back to Map"
          large
          icon={{ name: 'my-location' }}
          backgroundColor="#03A9F4"
          onPress={() => this.props.navigation.navigate('map')}
        />
      </Card>
    );
  }

  render() {
    return (
      <View style={{ marginTop: 25 }}>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          keyProp="id"
          onSwipeRight={job => this.props.saveJob(job)}
        />
      </View>
    );
  }
};

function mapStateToProps({ jobs }) {
  return { jobs };
}

const styles = {
  logoStyle: {
    height: 300,
    flex: 1
  }
};

export default connect(mapStateToProps, actions)(Deck);
