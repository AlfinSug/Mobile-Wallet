import React, { useState, useRef } from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text, TextInput, Image } from 'react-native';
import WebView from 'react-native-webview';
import { themeColor } from '../../../constants/themeColor';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DiscoverPage = () => {
  const [webViewUrl, setWebViewUrl] = useState('');
  const [showWebView, setShowWebView] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false); // Track if the WebView can go back
  const webViewRef = useRef(null);

  const visitUrl = (url) => {
    setWebViewUrl(url);
    setShowWebView(true);
  };

  const goBackHome = () => {
    setShowWebView(false);
    setWebViewUrl('');
  };

  const handleGoBackInWebView = () => {
    if (webViewRef.current && canGoBack) {
      webViewRef.current.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        {/* Home Icon */}
        <TouchableOpacity onPress={goBackHome} style={styles.iconButton}>
          <Icon name="home" size={24} color="#fff" />
        </TouchableOpacity>
        {/* URL Input Field */}
        <TextInput
          style={styles.urlInput}
          value={webViewUrl}
          onChangeText={setWebViewUrl}
          placeholder="Type URL"
          placeholderTextColor="#ccc"
        />
        {/* Conditionally render the back button when in WebView */}
        {showWebView && (
          <TouchableOpacity onPress={handleGoBackInWebView} style={styles.iconButton}>
            <Icon name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
        )}
        {/* Go Button */}
        <TouchableOpacity onPress={() => visitUrl(webViewUrl)} style={styles.iconButton}>
          <Icon name="arrow-right" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      {showWebView ? (
        <WebView
          ref={webViewRef}
          source={{ uri: webViewUrl }}
          style={{ flex: 1 }}
          onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
        />
      ) : (
              <View style={styles.content}>
                    <TouchableOpacity onPress={() => visitUrl('https://physica.finance/')} style={styles.card}>
  <View style={styles.cardBox}>
    <Image source={require('../../../assets/physica.png')} style={styles.cardImage} />
    <Text style={styles.cardText}>Physica Finance</Text>
  </View>
</TouchableOpacity>
<TouchableOpacity onPress={() => visitUrl('https://deltaswap.io/')} style={styles.card}>
  <View style={styles.cardBox}>
    <Image source={require('../../../assets/delta.png')} style={styles.cardImage} />
    <Text style={styles.cardText}>DeltaSwap.io</Text>
  </View>
</TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor.appBackgroundColor,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    width: '100%',
    backgroundColor: themeColor.appBackgroundColor,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  fullWidthInput: {
    flex: 1,
    minHeight: 30,
    maxHeight: 35,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#fff',
    fontSize: 14,
  },
  urlInput: {
    flex: 1,
    minHeight: 30,
    maxHeight: 35,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff', // You might want to change the background color to make the white text visible
    color: '#000', // Change text color to white
    fontSize: 14,
  },
iconButton: {
  padding: 8,
  marginLeft: 10, // Added space on the left of the icon button
  marginRight: 10, // Added space on the right of the icon button
},
  navButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#0056b3',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
  },
  disabledButton: {
    backgroundColor: '#aaa',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    width: '100%',
    textAlign: 'center',
    padding: 20,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    width: '100%',
    paddingVertical: 10,
  },
  card: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginTop: 10,
    marginBottom: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center', // Ensures that children align in the center
    width: '100%',
    padding: 20,
  },
  cardText: {
    color: '#007AFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardBox: {
  flexDirection: 'row', // Aligns children (image and text) horizontally
  alignItems: 'center', // Centers children vertically in the container
  // Add other styles as necessary, like padding
},
  historyItem: {
    width: '90%',
    backgroundColor: '#ffffff',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginVertical: 5,
  },
  clearHistoryButton: {
    width: '90%',
    backgroundColor: '#ff3b30',
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
  cardImage: {
    width: 60, 
    height: 60, 
    resizeMode: 'contain', 
    marginBottom: 10, 
  },
});

export default DiscoverPage;