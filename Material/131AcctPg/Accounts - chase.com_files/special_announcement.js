define([], function() { return {
  "name": "SPECIAL_ANNOUNCEMENT",
  "data": {
    "loaderDisplayedState": {
      "type": "OnOff"
    },
    "announcementHeader": {
      "type": "Description"
    },
    "announcementAdvisory": {
      "type": "Description"
    },
    "announcementMessage": {
      "type": "Description"
    },
    "aemServiceErrorDisplayedState": {
      "type": "OnOff"
    },
    "aemLinkDetails": {
      "type": "Description"
    },
    "destinationUrl": {
      "type": "Description"
    },
    "specialAnnouncementAnalyticsAction": {
      "type": "Description",
      "exportable": true
    }
  },
  "states": {
    "isChaseReliefHubEnabled": true,
    "iconDisplayedState": true
  },
  "actions": {
    "requestSpecialAnnouncementDetails": true
  },
  "settings": {
    "specialAnnouncementHeader": true,
    "specialAnnouncementAdvisory": true,
    "specialAnnouncementErrorHeader": true,
    "specialAnnouncementErrorAdvisory": true,
    "learnMoreLabel": true
  }
}; });