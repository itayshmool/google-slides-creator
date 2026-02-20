/**
 * Melodify - Music Streaming Dashboard
 * Interactive JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    initGreeting();
    initPlayPause();
    initLikeButton();
    initProgressBar();
    initVolumeControl();
    initNavigation();
    initShuffleRepeat();
    initPlayButtons();
});

/**
 * Dynamic greeting based on time of day
 */
function initGreeting() {
    const greetingEl = document.getElementById('greeting-text');
    const hour = new Date().getHours();

    let greeting;
    if (hour >= 5 && hour < 12) {
        greeting = 'Good morning';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    greetingEl.textContent = greeting;
}

/**
 * Play/Pause button toggle
 */
function initPlayPause() {
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = playPauseBtn.querySelector('.play-icon');
    const pauseIcon = playPauseBtn.querySelector('.pause-icon');

    let isPlaying = false;

    playPauseBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;

        if (isPlaying) {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
            startProgressAnimation();
        } else {
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            stopProgressAnimation();
        }
    });
}

/**
 * Like button toggle
 */
function initLikeButton() {
    const likeBtn = document.querySelector('.like-btn');

    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('active');

        // Animate heart
        likeBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            likeBtn.style.transform = 'scale(1)';
        }, 150);
    });
}

/**
 * Progress bar interaction
 */
let progressInterval = null;
let currentProgress = 37;

function initProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const progress = document.getElementById('progress');
    const progressHandle = document.getElementById('progress-handle');
    const currentTimeEl = document.querySelector('.current-time');

    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percent = ((e.clientX - rect.left) / rect.width) * 100;

        currentProgress = Math.max(0, Math.min(100, percent));
        updateProgress(currentProgress);
        updateTime(currentProgress);
    });

    // Drag functionality
    let isDragging = false;

    progressBar.addEventListener('mousedown', () => {
        isDragging = true;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const rect = progressBar.getBoundingClientRect();
        const percent = ((e.clientX - rect.left) / rect.width) * 100;

        currentProgress = Math.max(0, Math.min(100, percent));
        updateProgress(currentProgress);
        updateTime(currentProgress);
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

function updateProgress(percent) {
    const progress = document.getElementById('progress');
    const progressHandle = document.getElementById('progress-handle');

    progress.style.width = `${percent}%`;
    progressHandle.style.left = `${percent}%`;
}

function updateTime(percent) {
    const currentTimeEl = document.querySelector('.current-time');
    const totalSeconds = 225; // 3:45 total
    const currentSeconds = Math.floor((percent / 100) * totalSeconds);

    const minutes = Math.floor(currentSeconds / 60);
    const seconds = currentSeconds % 60;

    currentTimeEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startProgressAnimation() {
    progressInterval = setInterval(() => {
        if (currentProgress < 100) {
            currentProgress += 0.1;
            updateProgress(currentProgress);
            updateTime(currentProgress);
        } else {
            stopProgressAnimation();
            currentProgress = 0;
            updateProgress(0);
            updateTime(0);
        }
    }, 225); // Approximately real-time for a 3:45 song
}

function stopProgressAnimation() {
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
}

/**
 * Volume control
 */
function initVolumeControl() {
    const volumeBar = document.querySelector('.volume-bar');
    const volumeLevel = document.getElementById('volume-level');
    const volumeBtn = document.getElementById('volume-btn');

    let currentVolume = 70;
    let previousVolume = 70;

    volumeBar.addEventListener('click', (e) => {
        const rect = volumeBar.getBoundingClientRect();
        const percent = ((e.clientX - rect.left) / rect.width) * 100;

        currentVolume = Math.max(0, Math.min(100, percent));
        volumeLevel.style.width = `${currentVolume}%`;
        updateVolumeIcon(currentVolume);
    });

    // Mute toggle
    volumeBtn.addEventListener('click', () => {
        if (currentVolume > 0) {
            previousVolume = currentVolume;
            currentVolume = 0;
        } else {
            currentVolume = previousVolume;
        }

        volumeLevel.style.width = `${currentVolume}%`;
        updateVolumeIcon(currentVolume);
    });
}

function updateVolumeIcon(volume) {
    const volumeBtn = document.getElementById('volume-btn');
    let iconPath;

    if (volume === 0) {
        iconPath = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/>
                <line x1="23" y1="9" x2="17" y2="15"/>
                <line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
        `;
    } else if (volume < 50) {
        iconPath = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
        `;
    } else {
        iconPath = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            </svg>
        `;
    }

    volumeBtn.innerHTML = iconPath;
}

/**
 * Navigation items
 */
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active from all
            document.querySelectorAll('.nav-item.active').forEach(active => {
                active.classList.remove('active');
            });

            // Add active to clicked
            item.classList.add('active');
        });
    });
}

/**
 * Shuffle and Repeat toggles
 */
function initShuffleRepeat() {
    const shuffleBtn = document.getElementById('shuffle-btn');
    const repeatBtn = document.getElementById('repeat-btn');

    shuffleBtn.addEventListener('click', () => {
        shuffleBtn.classList.toggle('active');
    });

    repeatBtn.addEventListener('click', () => {
        repeatBtn.classList.toggle('active');
    });
}

/**
 * Card play buttons
 */
function initPlayButtons() {
    const playBtns = document.querySelectorAll('.music-card .play-btn, .artist-card .play-btn, .quick-pick-card');

    playBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();

            // Get the card title
            const card = btn.closest('.music-card, .artist-card, .quick-pick-card');
            let title, artist;

            if (card.classList.contains('quick-pick-card')) {
                title = card.querySelector('span').textContent;
                artist = 'Various Artists';
            } else {
                title = card.querySelector('h4').textContent;
                artist = card.querySelector('p').textContent;
            }

            // Update now playing
            updateNowPlaying(title, artist);

            // Start playing
            const playPauseBtn = document.getElementById('play-pause-btn');
            const playIcon = playPauseBtn.querySelector('.play-icon');
            const pauseIcon = playPauseBtn.querySelector('.pause-icon');

            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';

            // Reset and start progress
            currentProgress = 0;
            updateProgress(0);
            updateTime(0);
            stopProgressAnimation();
            startProgressAnimation();
        });
    });
}

function updateNowPlaying(title, artist) {
    const trackName = document.querySelector('.track-name');
    const artistName = document.querySelector('.artist-name');

    // Animate out
    trackName.style.opacity = '0';
    artistName.style.opacity = '0';

    setTimeout(() => {
        trackName.textContent = title;
        artistName.textContent = artist;

        // Animate in
        trackName.style.opacity = '1';
        artistName.style.opacity = '1';
    }, 150);
}

/**
 * Keyboard shortcuts
 */
document.addEventListener('keydown', (e) => {
    // Space = play/pause
    if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
        document.getElementById('play-pause-btn').click();
    }

    // M = mute
    if (e.code === 'KeyM' && e.target.tagName !== 'INPUT') {
        document.getElementById('volume-btn').click();
    }

    // Arrow keys for seeking
    if (e.code === 'ArrowRight' && e.target.tagName !== 'INPUT') {
        currentProgress = Math.min(100, currentProgress + 5);
        updateProgress(currentProgress);
        updateTime(currentProgress);
    }

    if (e.code === 'ArrowLeft' && e.target.tagName !== 'INPUT') {
        currentProgress = Math.max(0, currentProgress - 5);
        updateProgress(currentProgress);
        updateTime(currentProgress);
    }
});

/**
 * Add some visual feedback for interactions
 */
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('mousedown', () => {
        btn.style.transform = 'scale(0.95)';
    });

    btn.addEventListener('mouseup', () => {
        btn.style.transform = '';
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});
