import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    devSourcemap: true, // 開発時のCSSソースマップ有効化
  },
  server: {
    open: '/anime01.html', // ここで開きたいHTMLファイルを指定
  },
});
