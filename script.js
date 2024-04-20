function toggleFullScreen(iframeId) {
    var iframe = document.getElementById(iframeId);
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) { /* Safari */
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { /* IE11 */
        iframe.msRequestFullscreen();
    }
}