/* ============================================================
   溝口神社公式ホームページ
   main.js — 全ページ共通スクリプト
   （スマートフォンメニュー／ページ上部へ戻る／告知帯）

   ※JavaScriptが無効でも、住所・時間・御祈祷案内などの
     主要情報はすべてHTMLだけで読める設計です。
   ============================================================ */

(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ------------------------------------------------------------
     1. スマートフォンメニュー
     - aria-expanded で開閉状態を通知
     - 開いている間は背景スクロールを固定
     - Escキーで閉じ、フォーカスをボタンへ戻す
     ------------------------------------------------------------ */
  var menuToggle = document.getElementById('menu-toggle');
  var globalNav = document.getElementById('global-nav');

  function openMenu() {
    menuToggle.setAttribute('aria-expanded', 'true');
    globalNav.classList.add('is-open');
    document.body.classList.add('is-menu-open');
  }

  function closeMenu(returnFocus) {
    menuToggle.setAttribute('aria-expanded', 'false');
    globalNav.classList.remove('is-open');
    document.body.classList.remove('is-menu-open');
    if (returnFocus) {
      menuToggle.focus();
    }
  }

  if (menuToggle && globalNav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu(false);
      } else {
        openMenu();
      }
    });

    // Escキーで閉じる（フォーカスをボタンへ戻す）
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' &&
          menuToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu(true);
      }
    });

    // メニュー内リンクを選んだら閉じる（ページ内リンク対応）
    globalNav.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        closeMenu(false);
      }
    });

    // PC幅に戻ったら状態をリセット
    var mq = window.matchMedia('(min-width: 841px)');
    function handleWidthChange(e) {
      if (e.matches) {
        closeMenu(false);
      }
    }
    if (mq.addEventListener) {
      mq.addEventListener('change', handleWidthChange);
    } else if (mq.addListener) {
      mq.addListener(handleWidthChange); // 古いSafari向け
    }
  }

  /* ------------------------------------------------------------
     2. ページ上部へ戻るボタン
     ------------------------------------------------------------ */
  var backToTop = document.getElementById('back-to-top');

  if (backToTop) {
    var ticking = false;

    function updateBackToTop() {
      if (window.scrollY > 600) {
        backToTop.classList.add('is-visible');
      } else {
        backToTop.classList.remove('is-visible');
      }
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateBackToTop);
        ticking = true;
      }
    }, { passive: true });

    backToTop.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: reducedMotion.matches ? 'auto' : 'smooth'
      });
      // キーボード利用者のためにフォーカスを先頭へ
      var firstFocusable = document.querySelector('.skip-link');
      if (firstFocusable) {
        firstFocusable.focus();
      }
    });
  }

  /* ------------------------------------------------------------
     3. 緊急・重要告知帯
     - HTML側で hidden 属性を外すと表示されます（JS不要）
     - ここでは「閉じる」ボタンがある場合のみ制御
     ------------------------------------------------------------ */
  var noticeBar = document.getElementById('notice-bar');
  var noticeClose = document.getElementById('notice-close');

  if (noticeBar && noticeClose) {
    noticeClose.addEventListener('click', function () {
      noticeBar.hidden = true;
    });
  }
})();
