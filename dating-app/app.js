/**
 * Spark - Dating App
 * Interactive JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initCardSwipe();
    initImageGallery();
    initActionButtons();
    initMatchPopup();
});

// Sample profiles for demo
const profiles = [
    {
        name: 'Sarah',
        age: 26,
        distance: '2 miles',
        bio: 'Coffee addict. Dog mom. Looking for someone to explore the city with and try new restaurants.',
        tags: ['Photography', 'Hiking', 'Coffee', 'Travel'],
        job: 'Product Designer',
        school: 'Stanford University',
        images: [
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop',
            'https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=600&h=800&fit=crop',
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop'
        ]
    },
    {
        name: 'Emma',
        age: 24,
        distance: '5 miles',
        bio: 'Adventure seeker. Yoga enthusiast. Always planning my next trip.',
        tags: ['Yoga', 'Travel', 'Music', 'Art'],
        job: 'Marketing Manager',
        school: 'UCLA',
        images: [
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop',
            'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop'
        ]
    },
    {
        name: 'Olivia',
        age: 27,
        distance: '3 miles',
        bio: 'Bookworm. Wine lover. Looking for deep conversations and spontaneous adventures.',
        tags: ['Reading', 'Wine', 'Movies', 'Cooking'],
        job: 'Software Engineer',
        school: 'MIT',
        images: [
            'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&h=800&fit=crop',
            'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&h=800&fit=crop'
        ]
    }
];

let currentProfileIndex = 0;

/**
 * Navigation between views
 */
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item[data-view]');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            const viewId = item.dataset.view;

            // Update nav active state
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Show corresponding view
            document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
            const targetView = document.getElementById(`${viewId}-view`);
            if (targetView) {
                targetView.classList.add('active');
            }
        });
    });
}

/**
 * Card swipe functionality
 */
function initCardSwipe() {
    const card = document.getElementById('current-card');
    if (!card) return;

    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let isDragging = false;

    card.addEventListener('mousedown', startDrag);
    card.addEventListener('touchstart', startDrag, { passive: true });

    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag, { passive: true });

    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);

    function startDrag(e) {
        if (e.target.closest('.image-nav')) return;

        isDragging = true;
        startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        startY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
        card.style.transition = 'none';
    }

    function drag(e) {
        if (!isDragging) return;

        const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
        currentX = clientX - startX;

        const rotation = currentX * 0.1;
        card.style.transform = `translateX(${currentX}px) rotate(${rotation}deg)`;

        // Show indicators
        const likeIndicator = card.querySelector('.swipe-indicator.like');
        const nopeIndicator = card.querySelector('.swipe-indicator.nope');

        if (currentX > 50) {
            likeIndicator.style.opacity = Math.min((currentX - 50) / 100, 1);
            nopeIndicator.style.opacity = 0;
        } else if (currentX < -50) {
            nopeIndicator.style.opacity = Math.min((-currentX - 50) / 100, 1);
            likeIndicator.style.opacity = 0;
        } else {
            likeIndicator.style.opacity = 0;
            nopeIndicator.style.opacity = 0;
        }
    }

    function endDrag() {
        if (!isDragging) return;
        isDragging = false;

        card.style.transition = 'transform 0.3s ease';

        const threshold = 150;

        if (currentX > threshold) {
            swipeRight();
        } else if (currentX < -threshold) {
            swipeLeft();
        } else {
            // Reset position
            card.style.transform = '';
            card.querySelector('.swipe-indicator.like').style.opacity = 0;
            card.querySelector('.swipe-indicator.nope').style.opacity = 0;
        }

        currentX = 0;
    }
}

function swipeRight() {
    const card = document.getElementById('current-card');
    card.style.transform = 'translateX(150%) rotate(30deg)';

    setTimeout(() => {
        // Show match popup (randomly for demo)
        if (Math.random() > 0.5) {
            showMatchPopup();
        }
        loadNextProfile();
    }, 300);
}

function swipeLeft() {
    const card = document.getElementById('current-card');
    card.style.transform = 'translateX(-150%) rotate(-30deg)';

    setTimeout(() => {
        loadNextProfile();
    }, 300);
}

function loadNextProfile() {
    currentProfileIndex = (currentProfileIndex + 1) % profiles.length;
    const profile = profiles[currentProfileIndex];

    const card = document.getElementById('current-card');

    // Reset card
    card.style.transition = 'none';
    card.style.transform = 'translateX(0) rotate(0)';
    card.querySelector('.swipe-indicator.like').style.opacity = 0;
    card.querySelector('.swipe-indicator.nope').style.opacity = 0;

    // Update content
    card.querySelector('.name-age h2').textContent = profile.name;
    card.querySelector('.age').textContent = profile.age;
    card.querySelector('.location').innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
        </svg>
        ${profile.distance} away
    `;
    card.querySelector('.card-bio p').textContent = profile.bio;

    // Update tags
    const tagsContainer = card.querySelector('.card-tags');
    tagsContainer.innerHTML = profile.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    // Update images
    const imagesContainer = card.querySelector('.card-images');
    const images = imagesContainer.querySelectorAll('.card-image');
    const indicators = imagesContainer.querySelectorAll('.indicator');

    images.forEach((img, i) => {
        if (profile.images[i]) {
            img.src = profile.images[i];
            img.style.display = 'block';
            img.classList.toggle('active', i === 0);
        } else {
            img.style.display = 'none';
        }
    });

    indicators.forEach((ind, i) => {
        ind.style.display = profile.images[i] ? 'block' : 'none';
        ind.classList.toggle('active', i === 0);
    });

    // Force reflow
    void card.offsetWidth;
    card.style.transition = 'transform 0.3s ease';
}

/**
 * Image gallery navigation
 */
function initImageGallery() {
    const card = document.getElementById('current-card');
    if (!card) return;

    const prevNav = card.querySelector('.image-nav.prev');
    const nextNav = card.querySelector('.image-nav.next');

    let currentImage = 0;

    prevNav.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateImage(-1);
    });

    nextNav.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateImage(1);
    });

    function navigateImage(direction) {
        const images = card.querySelectorAll('.card-image');
        const indicators = card.querySelectorAll('.indicator');
        const visibleImages = Array.from(images).filter(img => img.style.display !== 'none');

        currentImage = Math.max(0, Math.min(visibleImages.length - 1, currentImage + direction));

        images.forEach((img, i) => {
            img.classList.toggle('active', i === currentImage);
        });

        indicators.forEach((ind, i) => {
            ind.classList.toggle('active', i === currentImage);
        });
    }
}

/**
 * Action button handlers
 */
function initActionButtons() {
    const nopeBtn = document.querySelector('.action-btn.nope');
    const likeBtn = document.querySelector('.action-btn.like');
    const superLikeBtn = document.querySelector('.action-btn.super-like');
    const rewindBtn = document.querySelector('.action-btn.rewind');
    const boostBtn = document.querySelector('.action-btn.boost');

    if (nopeBtn) {
        nopeBtn.addEventListener('click', () => {
            animateButton(nopeBtn);
            swipeLeft();
        });
    }

    if (likeBtn) {
        likeBtn.addEventListener('click', () => {
            animateButton(likeBtn);
            swipeRight();
        });
    }

    if (superLikeBtn) {
        superLikeBtn.addEventListener('click', () => {
            animateButton(superLikeBtn);
            superLike();
        });
    }

    if (rewindBtn) {
        rewindBtn.addEventListener('click', () => {
            animateButton(rewindBtn);
            // Rewind functionality - would go to previous profile
        });
    }

    if (boostBtn) {
        boostBtn.addEventListener('click', () => {
            animateButton(boostBtn);
            // Boost functionality
        });
    }
}

function animateButton(btn) {
    btn.style.transform = 'scale(0.9)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 150);
}

function superLike() {
    const card = document.getElementById('current-card');
    card.style.transform = 'translateY(-150%) scale(0.8)';

    setTimeout(() => {
        showMatchPopup();
        loadNextProfile();
    }, 300);
}

/**
 * Match popup
 */
function initMatchPopup() {
    const popup = document.getElementById('match-popup');
    const keepSwipingBtn = popup.querySelector('.keep-swiping-btn');
    const sendMessageBtn = popup.querySelector('.send-message-btn');

    keepSwipingBtn.addEventListener('click', () => {
        popup.classList.remove('active');
    });

    sendMessageBtn.addEventListener('click', () => {
        popup.classList.remove('active');
        // Navigate to messages
        document.querySelector('.nav-item[data-view="messages"]').click();
    });

    // Close on background click
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
        }
    });
}

function showMatchPopup() {
    const popup = document.getElementById('match-popup');
    const profile = profiles[currentProfileIndex];

    // Update match photo
    const matchPhoto = popup.querySelectorAll('.match-photos img')[1];
    matchPhoto.src = profile.images[0];

    // Update text
    popup.querySelector('p').textContent = `You and ${profile.name} liked each other`;

    popup.classList.add('active');
}

/**
 * Keyboard shortcuts
 */
document.addEventListener('keydown', (e) => {
    if (document.querySelector('#discover-view.active')) {
        if (e.key === 'ArrowLeft') {
            document.querySelector('.action-btn.nope').click();
        } else if (e.key === 'ArrowRight') {
            document.querySelector('.action-btn.like').click();
        } else if (e.key === 'ArrowUp') {
            document.querySelector('.action-btn.super-like').click();
        }
    }
});

/**
 * Add hover effects to cards
 */
document.querySelectorAll('.match-card, .message-item').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-2px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});
