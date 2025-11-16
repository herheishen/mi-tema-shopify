document.addEventListener('DOMContentLoaded', function () {
  // ========== SKIP LINK FOCUS MANAGEMENT ==========
  document.querySelectorAll('.skip-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector('#MainContent') || document.querySelector('main') || document.getElementById('MainContent');
      if (!target) return;
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: false });
    });
  });

  // ========== CART BUBBLE ARIA-LIVE MANAGEMENT ==========
  var cartBubbles = document.querySelectorAll('.cart-count-bubble[aria-live]');
  cartBubbles.forEach(function (bubble) {
    bubble.setAttribute('aria-live', bubble.getAttribute('aria-live') || 'polite');
    bubble.setAttribute('aria-atomic', bubble.getAttribute('aria-atomic') || 'true');
  });

  // ========== MOBILE MENU DRAWER IMPROVEMENTS ==========
  var headerDrawer = document.querySelector('header-drawer');
  if (headerDrawer) {
    // Close drawer when clicking outside
    document.addEventListener('click', function(e) {
      if (!headerDrawer.contains(e.target) && headerDrawer.hasAttribute('open')) {
        headerDrawer.removeAttribute('open');
      }
    });

    // Enhance touch targets to 44px minimum
    var drawerButtons = headerDrawer.querySelectorAll('button, a[role="button"], [role="button"]');
    drawerButtons.forEach(function(btn) {
      var style = window.getComputedStyle(btn);
      var height = parseInt(style.height) || 0;
      if (height < 44) {
        btn.style.minHeight = '44px';
        btn.style.display = 'flex';
        btn.style.alignItems = 'center';
        btn.style.justifyContent = 'center';
      }
    });

    // Escape key closes drawer
    headerDrawer.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && headerDrawer.hasAttribute('open')) {
        e.preventDefault();
        headerDrawer.removeAttribute('open');
        var triggerBtn = headerDrawer.querySelector('button');
        if (triggerBtn) triggerBtn.focus();
      }
    });
  }

  // ========== HEADER SCROLL OPTIMIZATION ==========
  var header = document.querySelector('.header');
  if (header) {
    var scrollTimeout;
    var lastScrollY = 0;

    window.addEventListener('scroll', function() {
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(function() {
        var currentScrollY = window.scrollY || window.pageYOffset;
        
        if (currentScrollY > 50) {
          document.body.classList.add('scrolled-past-header');
        } else {
          document.body.classList.remove('scrolled-past-header');
        }
        
        lastScrollY = currentScrollY;
      }, 100);
    }, { passive: true });
  }

  // ========== MOBILE SEARCH MODAL BODY SCROLL LOCK ==========
  var headerSearch = document.querySelector('header-search');
  if (headerSearch) {
    var searchModal = headerSearch.querySelector('[role="dialog"]') || headerSearch.querySelector('.search-modal');
    if (searchModal) {
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'open') {
            if (searchModal.hasAttribute('open')) {
              document.body.style.overflow = 'hidden';
            } else {
              document.body.style.overflow = '';
            }
          }
        });
      });

      observer.observe(searchModal, { attributes: true });
    }
  }

  // ========== CART BUBBLE ANIMATION ON UPDATE ==========
  var cartIcon = document.querySelector('.header__icon--cart');
  if (cartIcon) {
    document.addEventListener('cart:updated', function() {
      var bubble = cartIcon.querySelector('.cart-count-bubble');
      if (bubble && bubble.style) {
        bubble.style.animation = 'none';
        void bubble.offsetWidth; // Trigger reflow to restart animation
        bubble.style.animation = 'bubble-pop 0.3s ease-out';
      }
    });
  }
});
