const { delay } = require("../../helpers/delayHelper");
const { waitUntilElementExist } = require("../../helpers/waitUtil");

class HomePage {
  get buttonSearch() {
    return $('android=new UiSelector().description("Search and explore")');
  }
  get textSearch() {
    return $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.EditText"
    );
  }

  get MessageButton() {
    return $(
      "//*[@resource-id='com.instagram.android:id/action_bar_inbox_button']"
    );
  }

  get searchResultButton() {
    return $(
      "//*[@resource-id='com.instagram.android:id/search_keyword_title']"
    );
  }
  get resultRow() {
    return $(
      "//*[@resource-id='com.instagram.android:id/row_search_user_info_container']"
    );
  }
  get followButton() {
    return $(
      "//*[@resource-id='com.instagram.android:id/profile_header_user_action_follow_button']"
    );
  }
  //button message di profile
  get messageProfileButton() {
    return $("//*[@resource-id='com.instagram.android:id/button_container']");
  }
  //input text message
  get txtMsg() {
    return $(
      "//*[@resource-id='com.instagram.android:id/row_thread_composer_edittext']"
    );
  }
  get sendMgButton() {
    return $(
      "//*[@resource-id='com.instagram.android:id/row_thread_composer_button_send']"
    );
  }
  get checkFollowers() {
    return $(
      "//*[@resource-id='com.instagram.android:id/row_profile_header_followers_container']"
    );
  }
  get searchAcc() {
    return $(
      "//*[@resource-id='com.instagram.android:id/animated_hints_text_layout']"
    );
  }
  get accResult() {
    return $(
      "//*[@resource-id='com.instagram.android:id/row_inbox_container']"
    );
  }
  get txt() {
    return $(
      "//*[@resource-id='com.instagram.android:id/search_bar_real_field']"
    );
  }

  async messageAction() {
    //message
    await this.MessageButton.click();
    await this.searchAcc.click();
    await this.txt.setValue("cocobenstore");
    await this.accResult.click();
    await this.txtMsg.click();
    await this.txtMsg.setValue("haii");
    await this.sendMgButton.click();
  }

  async followAccount() {
    //follow
    await this.buttonSearch.click();
    await this.textSearch.click();
    await this.txt.setValue("cocobenstore");
    await this.searchResultButton.click();
    await waitUntilElementExist(this.resultRow);
    await this.resultRow.click();
    await this.followButton.click();
  }
  async followAndMessageAccount() {
    //follow & message
    await this.buttonSearch.click();
    await this.textSearch.click();
    await this.textSearch.setValue("cocobenstore");
    await this.searchResultButton.click();
    await waitUntilElementExist(this.resultRow);
    await this.resultRow.click();
    await this.followButton.click();
    await this.messageProfileButton.click();
    await this.txtMsg.click();
    await this.txtMsg.setValue("haii");
    await this.sendMgButton.click();
  }
}

module.exports = new HomePage();
