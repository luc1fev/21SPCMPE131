//temporary fix for chat tagging issue
function chatTagging () {
}

function mBoxTagging()
{
	var mBox = {};
	mBox.name=zk.Widget.$('$mboxName').$n().value;
	mBox.orderId='orderId=' + zk.Widget.$('$mboxOrderId').$n().value;
	mBox.productPurchasedId= 'productPurchasedId=' + zk.Widget.$('$mboxproductPurchaseId').$n().value;
	mBox.decision='decision=' + zk.Widget.$('$mboxDecision').$n().value;
	if((zk.Widget.$('$mboxOsName')) && (zk.Widget.$('$mboxOsName').$n()) && (zk.Widget.$('$mboxOsName').$n().value)) {
		mBox.osName='osName=' + zk.Widget.$('$mboxOsName').$n().value;
	}
	if((zk.Widget.$('$mboxAppVersion')) && (zk.Widget.$('$mboxAppVersion').$n()) && (zk.Widget.$('$mboxAppVersion').$n().value)) {
		mBox.appVersion='appVersion=' + zk.Widget.$('$mboxAppVersion').$n().value;
	}



	if(mBox.name != undefined && window.adobe && window.adobe.target)
	{
		if(!document.getElementById('mboxDiv'))
		{
			var d = document.createElement('div');
			d.id = "mboxDiv";
			document.body.insertBefore(d, document.body.firstChild);
			mboxDefine('mboxDiv', mBox.name);
		}

		if(mBox.name == "SB_Card_AppConfirm" || mBox.name == "bac_dep_consumer_app_confirm" || mBox.name == "bac_consumer_cc_nonsolicited_conversion" || mBox.name == "bac_consumer_cc_nonsolicited_conversion_ice" || mBox.name == "bac_mort_heloc_app_confirm" || mBox.name == "Auto_AppConfirm")
		{
			if(mBox.osName != undefined && mBox.appVersion != undefined) {
				mboxUpdate(mBox.name, mBox.orderId, "orderTotal=1.00", mBox.productPurchasedId, mBox.decision, mBox.osName, mBox.appVersion);
			} else {
				mboxUpdate(mBox.name, mBox.orderId, "orderTotal=1.00", mBox.productPurchasedId, mBox.decision);
			}
		}
		else if(mBox.name == "bac_consumer_cc_nonsolicited_appstart" || mBox.name == "bac_consumer_cc_nonsolicited_verification")
		{
			if(mBox.osName != undefined && mBox.appVersion != undefined) {
				mboxUpdate(mBox.name, mBox.productPurchasedId, "orderTotal=1.00", mBox.osName, mBox.appVersion);
			} else {
				mboxUpdate(mBox.name, mBox.productPurchasedId, "orderTotal=1.00");
			}
		}
		else if (mBox.name == "SB_Card_App_Step1" || mBox.name == "bac_heloc_your_information_step1of2" || mBox.name == "bac_heloc_authorized_signer" || mBox.name == "bac_heloc_your_information_step2of2" || mBox.name == "bac_heloc_property_information" || mBox.name == "bac_heloc_exclusive_offers" || mBox.name == "bac_heloc_review" || mBox.name == "bac_heloc_legal_disclosure_ecd" || mBox.name == "bac_heloc_legal_disclosure_tax"|| mBox.name == "Auto_AppStep1_GetStarted" || mBox.name == "Auto_AppStep2_LoanRequest" || mBox.name == "Auto_AppStep3_TC1" || mBox.name == "Auto_AppStep3_TC2" || mBox.name == "Auto_AppStep3_TC3" || mBox.name == "Auto_AppStep4 _Submit" || mBox.name == "Auto_AppStep5_IdentityVerification")
		{
			mboxUpdate(mBox.name);
		}
		else
		{
			mboxUpdate(mBox.name, mBox.productPurchasedId);
		}
	}
}

function mBoxNewTagging(){
	var mBox = {};
	mBox.appName=zk.Widget.$('$mboxAppName').$n().value;
	mBox.pageName=zk.Widget.$('$mboxPageName').$n().value;
	mBox.productGroupType=zk.Widget.$('$mboxProductGroupType').$n().value;
	mBox.displayName=zk.Widget.$('$mboxDisplayName').$n().value;

	if(mBox.appName != undefined && window.adobe && window.adobe.target)
	{
		if(!document.getElementById('mboxDiv'))
		{
			var d = document.createElement('div');
			d.id = "mboxDiv";
			document.body.insertBefore(d, document.body.firstChild);
			mboxDefine('mboxDiv', mBox.appName);
		}
		mboxUpdate(mBox.appName, mBox.pageName, mBox.productGroupType, mBox.displayName);
	}
}

function mBoxMPQTagging() {
	var mBox = {};
	mBox.name=zk.Widget.$('$mboxName').$n().value;

	if (mBox.name != undefined && window.adobe && window.adobe.target)
	{
		if (!document.getElementById('mboxDiv'))
		{
			var d = document.createElement('div');
			d.id = "mboxDiv";
			document.body.insertBefore(d, document.body.firstChild);
			mboxDefine('mboxDiv', mBox.name);
		}

		if (mBox.name == "bac_mort_purch_step2_yourInfo" || mBox.name == "bac_mort_refi_step2_yourInfo")
		{
			mBox.purpose='purpose=' + zk.Widget.$('$mboxPurpose').$n().value;
			mboxUpdate(mBox.name, mBox.purpose);
		}
		else
		{
			mboxUpdate(mBox.name);
		}
	}
}
