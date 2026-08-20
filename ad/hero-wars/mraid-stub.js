/*
  MRAID STUB — CHỈ DÙNG ĐỂ TEST Ở LOCAL / TRÌNH DUYỆT.
  KHÔNG upload file này khi nộp bài lên ad network thật
  (AdMob, Unity Ads, Meta, Mintegral, ironSource...) —
  các network đó sẽ tự chèn mraid.js thật của họ.
*/
(function () {
  if (window.mraid) return; // đã có mraid thật thì không đè lên

  window.mraid = {
    getState: function () { return 'default'; },
    isViewable: function () { return true; },

    addEventListener: function (event, listener) {
      console.log('[mraid-stub] addEventListener:', event);
    },
    removeEventListener: function (event, listener) {},

    open: function (url) {
      console.log('[mraid-stub] mraid.open ->', url);
      window.open(url, '_blank');
    },

    close: function () {
      console.log('[mraid-stub] mraid.close called');
    },

    useCustomClose: function (bool) {},
    expand: function () { console.log('[mraid-stub] expand called'); },
    getVersion: function () { return '2.0'; },
    getPlacementType: function () { return 'interstitial'; },
  };

  console.log('[mraid-stub] Đã nạp mraid giả lập cho môi trường test.');
})();
