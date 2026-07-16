self.addEventListener('push', event => {
  const data = event.data?.json() || {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'TPMS通知', {
      body: data.body || '',
      icon: data.icon || '/TPMS/icon-192.png',
      badge: '/TPMS/icon-192.png',
      tag: data.tag || 'tpms',
      data: { url: data.url || 'https://thinkshingu1226-cmyk.github.io/TPMS/' },
      requireInteraction: true
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = event.notification.data?.url;
  if (url) event.waitUntil(clients.openWindow(url));
});
