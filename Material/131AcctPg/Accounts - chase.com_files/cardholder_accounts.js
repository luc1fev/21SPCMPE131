define([], function() { return {
  "name": "CARDHOLDER_ACCOUNTS",
  "data": {
    "primaryAccount": {
      "type": "List",
      "items": {
        "accountId": {
          "type": "Description",
          "exportable": true
        },
        "accountHolderName": "Description",
        "maskNumber": "AccountMaskNumber"
      }
    },
    "employeeAccounts": {
      "type": "List",
      "items": {
        "accountId": {
          "type": "Description",
          "exportable": true
        },
        "accountHolderName": "Description",
        "maskNumber": "AccountMaskNumber"
      }
    },
    "totalAccounts": {
      "type": "Numbers"
    }
  },
  "states": {
    "subAccountsLoaderDisplayedState": true,
    "subAccountsErrorDisplayedState": true
  },
  "actions": {
    "requestCardholderAccounts": true,
    "exitCardholderAccounts": true,
    "requestPrimaryAccount": true,
    "exitPrimaryAccount": true,
    "requestEmployeeAccounts": true,
    "exitEmployeeAccounts": true,
    "requestCardholderDetails": true
  },
  "settings": {
    "requestCardholderAccountsLabel": true,
    "cardholderAccountLabel": true,
    "requestPrimaryAccountLabel": true,
    "requestEmployeeAccountsLabel": true,
    "cardholderAccountsErrorHeader": true,
    "cardholderAccountsErrorAdvisory": true
  }
}; });