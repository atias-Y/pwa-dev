if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js')
      .then(function(registration) {
        console.log('Service Worker登録成功:', registration.scope);
      })
      .catch(function(error) {
        console.log('Service Worker登録失敗:', error);
      });
  });
}
