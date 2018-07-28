import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';

import Swipe from '../components/Swipe';

class Deck extends Component {
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
          <Text>{job.created_at}</Text>
        </View>
        <View>
          <Text>{job.url}</Text>
        </View>
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="No more jobs">
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

export default connect(mapStateToProps)(Deck);
