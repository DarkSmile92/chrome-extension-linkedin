// chrome.runtime.onInstalled.addListener(() => {
//   chrome.action.setBadgeText({
//     text: "OFF",
//   });
// });

const navigatorUrl = "https://www.linkedin.com/sales/home";
const shortNavigatorUrl = "https://linkedin.com/sales/home";

function markAsRead(tabId) {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    function: () => {
      let buttons = document.getElementsByClassName("artdeco-button__icon");
      console.log(`Found ${buttons.length} buttons`);
      for (const btn of buttons) {
        if (
          btn.attributes["type"] &&
          btn.attributes["type"].value === "cancel-icon"
        ) {
          setTimeout(() => {
            btn.click();
          }, 500);
        }
      }
    },
  });
}

// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
  if (
    tab.url.startsWith(navigatorUrl) ||
    tab.url.startsWith(shortNavigatorUrl)
  ) {
    // We retrieve the action badge to check if the extension is 'ON' or 'OFF'
    // const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // // Next state will always be the opposite
    // const nextState = prevState === "ON" ? "OFF" : "ON";
    // const nextColor = prevState === "ON" ? "red" : "#00FF00";

    // // Set the action badge to the next state
    // await chrome.action.setBadgeText({
    //   tabId: tab.id,
    //   text: nextState,
    // });
    // await chrome.action.setBadgeBackgroundColor(
    //   {
    //     color: nextColor,
    //   },
    //   () => {}
    // );

    // if (nextState === "ON") {
    //   // Insert the CSS file when the user turns the extension on
    //   await chrome.scripting.insertCSS({
    //     files: ["focus-mode.css"],
    //     target: { tabId: tab.id },
    //   });
    // } else if (nextState === "OFF") {
    //   // Remove the CSS file when the user turns the extension off
    //   await chrome.scripting.removeCSS({
    //     files: ["focus-mode.css"],
    //     target: { tabId: tab.id },
    //   });
    // }
    markAsRead(tab.id);
  }
});
