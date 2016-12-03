'use strict';

import React from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  Image,
  View,
  NavigatorIOS,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Navigator,
} from 'react-native';

var TopGallery = require('./component/TopGallery');
var TagsSection = require('./component/TagsSection');
var UsersSection = require('./component/UsersSection');
var TagDetail = require('./component/TagDetail');

var ExploreContainer = React.createClass({

  nav2TagDetail: function(tag) {
    this.props.navigator.push({
        title: tag.tag,
        component: TagDetail,
    });
  },

  render: function(){
    return (
      <ScrollView style={styles.container}>
          <TopGallery />
          <TagsSection token={this.props.token} navigator={this.props.navigator} nav2TagDetail={this.nav2TagDetail}/>
          <UsersSection />
      </ScrollView>
    );
  },
});


var styles = StyleSheet.create({
  container: {
    flex:1,
    //backgroundColor: 'white',
  },
});

module.exports = ExploreContainer;
