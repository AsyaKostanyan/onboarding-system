<script>
  (async () => {
    try {
      const wrap = document.getElementById('menu-placeholder');
      if (!wrap) return;
      const resp = await fetch('/onboarding-system/assets/menu.html', { cache: 'no-store' });
      wrap.innerHTML = await resp.text();

      // highlight active link
      const here = location.pathname.replace(/\/+$/, '');
      wrap.querySelectorAll('a').forEach(a => {
        const href = a.getAttribute('href').replace(/\/+$/, '');
        if (href === here) a.classList.add('active');
      });
    } catch (e) {
      console.error('Menu load failed:', e);
    }
  })();
</script>
