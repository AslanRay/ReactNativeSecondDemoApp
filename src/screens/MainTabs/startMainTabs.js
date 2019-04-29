import {Navigation} from 'react-native-navigation';
import Icons from 'react-native-vector-icons/Ionicons';

const startTabs = () => 
Promise.all([
    Icons.getImageSource("md-map",30),
    Icons.getImageSource("ios-share-alt",30),
    Icons.getImageSource("ios-menu",30),
    Icons.getImageSource("information",30)
]).then(sources => {
    Navigation.setRoot({
        root: {
          sideMenu: {
            left:{
              component: {
                name: 'awsm-places.SideDrawerScreen'
              }
            },
            center: {
              bottomTabs: {
                id:'BottomTabsId',
                children: [{
                  stack: {
                    id: "findplacestack",
                    children: [{
                      component: {
                        name: 'awsm-places.FindPlaceScreen',
                        passProps: {
                          text: 'This is tab FindPlaceScreen'
                        },
                      }
                    }],
                    options: {
                      bottomTab: {
                        text: 'Find Place',
                        testID: 'FIRST_TAB_BAR_BUTTON',
                        icon: sources[0],
                        selectedIconColor:'blue'
                      },
                      topBar: {
                          title: {
                              text: "Find Place",
                              fontSize: 20,
                              alignment: "center"
                          }
                      }
                    }
                  }
                },
                {
                stack:{
                    id:'shareplacestack',
                    children: [{
                        component: {
                            name: 'awsm-places.SharePlaceScreen',
                            passProps: {
                              text: 'This is tab SharePlaceScreen'
                            },
                            options: {
                              bottomTab: {
                                text: 'Share Place',
                                testID: 'SECOND_TAB_BAR_BUTTON',
                                icon: sources[1],
                                selectedIconColor:'blue'
                              },
                              topBar: {
                                title: {
                                    text: "Share Place",
                                    fontSize: 20,
                                    alignment: "center"
                                }
                            }
                            }
                          }
                    }]
                }
                },{
                  stack:{
                      id:'aboutstack',
                      children: [{
                          component: {
                              name: 'awsm-places.AboutScreen',
                              passProps: {
                                text: 'This is tab About'
                              },
                              options: {
                                bottomTab: {
                                  text: 'About',
                                  testID: 'SECOND_TAB_BAR_BUTTON',
                                  icon: sources[3],
                                  selectedIconColor:'blue'
                                },
                                topBar: {
                                  title: {
                                      text: "About",
                                      fontSize: 20,
                                      alignment: "center"
                                  }
                              }
                              }
                            }
                      }]
                  }
                  }]
              }
            }
          },

        }
      });
});




export default startTabs;