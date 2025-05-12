document.querySelectorAll('.left, .right').forEach(function(box) {
    const videoSrc = box.getAttribute('data-video');
    const bgOverlay = document.querySelector('.bg-overlay');
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');

    box.addEventListener('mouseenter', function() {
        // 顯示背景
        bgOverlay.style.opacity = '1';
        // 兩個按鈕都半透明
        left.classList.add('btn-fade');
        right.classList.add('btn-fade');

        // 移除舊的 video
        if (box.querySelector('.hover-video')) {
            box.querySelector('.hover-video').remove();
        }
        // 動態建立新的 video
        const newVideo = document.createElement('video');
        newVideo.className = 'hover-video';
        newVideo.src = videoSrc;
        newVideo.autoplay = true;
        newVideo.muted = true;
        newVideo.style.display = 'block';
        newVideo.style.position = 'absolute';
        newVideo.style.top = 0;
        newVideo.style.left = 0;
        newVideo.style.width = '100%';
        newVideo.style.height = '100%';
        newVideo.style.objectFit = 'cover';
        newVideo.style.zIndex = 2;
        newVideo.style.borderRadius = 'inherit';
        newVideo.style.pointerEvents = 'none';
        newVideo.addEventListener('ended', function() {
            newVideo.remove();
        });
        box.appendChild(newVideo);
    });

    box.addEventListener('mouseleave', function() {
        // 隱藏背景
        bgOverlay.style.opacity = '0';
        // 兩個按鈕恢復不透明
        left.classList.remove('btn-fade');
        right.classList.remove('btn-fade');

        if (box.querySelector('.hover-video')) {
            box.querySelector('.hover-video').remove();
        }
    });
});
