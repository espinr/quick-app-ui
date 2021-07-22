/**
 * Create desktop icons
 * Note: When using the loader to test the `Create Desktop Shortcut` function, please first open the
 * `Desktop Shortcut` permission of the `Application Loader` in the `System Settings`
 */
function createShortcut() {
  const prompt = require('@system.prompt')
  const shortcut = require('@system.shortcut')
  shortcut.hasInstalled({
    success: function (ret) {
      if (ret) {
        prompt.showToast({
          message: 'Homescreen icon created!',
        })
      } else {
        shortcut.install({
          success: function () {
            prompt.showToast({
              message: 'Homescreen icon created',
            })
          },
          fail: function (errmsg, errcode) {
            prompt.showToast({
              message: `${errcode}: ${errmsg}`,
            })
          },
        })
      }
    },
  })
}

export default {
  createShortcut,
}
