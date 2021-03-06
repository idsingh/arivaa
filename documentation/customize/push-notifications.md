---
title: "Push notifications"
path: "/customize/push-notifications"
date: "2018-24-08"
---

# Push Notifications

Two types of notifications are supported in firebase. 

1. Local Notifications : Notifications from within the app when the application is backgrounded
2. Remote Notifications using expo : Notifications which are pushed from server to various clients. For this implementation. Below is the sample flow of notifications:

![](/assets/image%20%284%29.png)

Note : Notifications using Firebase Cloud Messaging is only supported over Android and is not yet fully stable so it has not been yet included. But is planned in future releases.

**Architecture:**

A helper has been created under src/utils/notifications.js for managing local and expo push notifications.

Methods : 

1. scheduleLocalNotification : Schedule a local notification
2. getExpoPushServerToken : Get a token for interacting with expo server to push expo notifications.

 

**For Sample Implementation, Check the container push-notifications under src/js/containers/push-notifications.**

![](/assets/image%20%283%29.png)

**Detailed Reference Docs :** 

1. 2. 


