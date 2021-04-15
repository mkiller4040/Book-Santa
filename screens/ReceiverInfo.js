import * as React from 'react';
import { Text, StyleSheet, TextInput, View, TouchableOpacity, Alert, Image, Modal, ScrollView, KeyboardAvoidingView, SnapshotViewIOS } from 'react-native'
import firebase from 'firebase';
import db from '../config.js';

export default class ReceiverInfo extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      userID : firebase.auth().currentUser.email,
      receiverID : this.props.navigation.getParam("details")["userID"],
      requestID : this.props.navigation.getParam("details")["requestID"],
      bookName : this.props.navigation.getParam("details")["bookName"],
      reason_to_request : this.props.navigation.getParam("details")["reason_to_request"],
      receiverName : "",
      receiverRequestDocID : '',
      phoneNo : '',
      address : '',
    }
  }

  getReceiversDetails()
  {
    db.collection("Users").where('emailID', '==', this.state.receiverID).get().then(snapshot => 
        {
          snapshot.forEach(doc => 
            {
              this.setState(
                  {
                    receiverName : doc.data().firstName,
                    phoneNo : doc.data().phoneNo,
                    address : doc.data().address
                  })
            })
        })

    db.collection("requestedBooks").where('requestID', '==', this.state.receiverID).get().then(snapshot => 
        {
          snapshot.forEach(doc => 
            {
              this.setState(
                  {
                    receiverRequestDocID : doc.id,
                  })
            })
        })

  }

  updateBookStatus = () => 
  {
    db.collection("allDonations").add(
        {
          bookName : this.state.bookName,
          requestID : this.state.requestID,
          requestedBy : this.state.receiverName,
          donorID : this.state.userID,
          requestStatus : "donor_interested"
        })
  }

  getUserDetails = (userID) => 
  {
    db.collection("Users").where('emailID', '==', userID).get().then((snapshot) => 
    {
      snapshot.forEach(doc => 
        {
          console.log("getUserDetails" + doc.data())
          this.setState(
            {
              username : doc.data().firstName + " " + doc.data().lastName
            })
        })
    })
  }
//complete card code
  render()
  {
    return(
        <View>
          <Text>Hello</Text>
        </View>
    )
  }
}