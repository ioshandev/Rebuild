const C='vx-v7',F=['./','index.html','manifest.webmanifest','icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window'}).then(l=>l.length?l[0].focus():clients.openWindow('./')))});
self.addEventListener('periodicsync',e=>{if(e.tag=='vx-remind')e.waitUntil(self.registration.showNotification('REBUILD VX',{body:'Quick check-in: win one ★ task today.',icon:'icon.svg',tag:'nudge'}))});
