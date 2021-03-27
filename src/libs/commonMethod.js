import Clipboard from "clipboard";

export function copyText(ref, text) {
  let clipboard = new Clipboard(this.$refs[ref].$el, {
    // eslint-disable-next-line no-unused-vars
    text: (trigger) => {
      return text || "";
    }
  });
  // eslint-disable-next-line no-unused-vars
  clipboard.on('success', (e) => {
    // 释放内存
    clipboard.destroy();
    return true;
  });
  // eslint-disable-next-line no-unused-vars
  clipboard.on('error', (e) => {
    // 释放内存
    clipboard.destroy();
    return false;
  });
  // 解决第一次点击复制无效问题
  clipboard.onClick(event);
}
