---
path: "/"
date: "2017-11-07"
title: "Index page of gatsby site"
---
# Steps To Integrate React Native Firebase in a React Native Project

- open File /android/gradle.properties in your project.
- Increase RAM Size of JVM to improve performance during build of android.
- Downgrade to Java 8 due to compatibility issues with react native firebase.
- Copy google-services.json file into /android/app/ directory.
- Install react-native-firebase library with npm.
- Change library firebase to react-native-firebase.
- Change Methods names according to documentation given at https://rnfirebase.io/.