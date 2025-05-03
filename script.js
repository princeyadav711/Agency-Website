// Mobile Navigation Menu JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu element
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    // Get nav items from main navigation
    const navItems = document.querySelector('.nav-sec .main-cont ul').cloneNode(true);
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-menu';
    closeBtn.innerHTML = '<i class="fa-solid fa-times"></i>';
    
    // Add close button and nav items to mobile menu
    mobileMenu.appendChild(closeBtn);
    mobileMenu.appendChild(navItems);
    
    // Add mobile menu to the body
    document.body.appendChild(mobileMenu);
    
    // Menu toggle functionality
    const menuBtn = document.querySelector('.res-bar');
    
    menuBtn.addEventListener('click', function() {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });
    
    closeBtn.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    });
    
    // Close menu when clicking on a menu item
    const mobileMenuItems = mobileMenu.querySelectorAll('li');
    mobileMenuItems.forEach(item => {
      item.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (e.target !== menuBtn && !menuBtn.contains(e.target) && 
          !mobileMenu.contains(e.target) && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    
    // Responsive image handling
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.getAttribute('alt')) {
        img.setAttribute('alt', 'Image');
      }
    });
    
    // Fix for the hamburger menu icon
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });