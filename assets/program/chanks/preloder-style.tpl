<style>
    .preload-svg {
        position: fixed;
        z-index: 1000;
        background: #00191B;
        width: 100%;
        height: 100%;
    }

    .preload-svg svg {
        display: block;
        margin: auto;
        width: 320px;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }

    #logo-chars path {
        stroke-dasharray: 21;
        stroke-dashoffset: 0;
    }

    #logo-chars path.char-vert {
        stroke-dasharray: 13;
        stroke-dashoffset: 0;
    }

    #logo-chars path:last-child {
        stroke-dasharray: 35;
        stroke-dashoffset: 0;
    }

    .preload-svg svg #logo-chars path {
        animation: prel-char-anim 3s linear 0s infinite;
    }

    .preload-svg svg #logo-chars path:last-child {
        animation: prel-char-anim-last 3s linear 0s infinite;
    }

    .preload-svg svg #logo-chars path.char-vert {
        animation: prel-char-anim-vert 3s linear 0s infinite;
    }

    .preload-svg svg #logo-chars path.char-back {
        animation: prel-char-anim-back 3s linear 0s infinite;
    }

    @keyframes prel-char-anim {
        30% {
            opacity: 0;
            stroke-dashoffset: 0;
        }
        31% {
            stroke-dashoffset: 21;
        }
        40% {
            opacity: 1;
        }
        60% {
            stroke-dashoffset: 0;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }

    @keyframes prel-char-anim-vert {
        30% {
            opacity: 0;
            stroke-dashoffset: 0;
        }
        31% {
            stroke-dashoffset: 14;
        }
        40% {
            opacity: 1;
        }
        60% {
            stroke-dashoffset: 0;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }

    @keyframes prel-char-anim-last {
        30% {
            opacity: 0;
            stroke-dashoffset: 0;
        }
        31% {
            stroke-dashoffset: 35;
        }
        40% {
            opacity: 1;
        }
        60% {
            stroke-dashoffset: 0;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }

    @keyframes prel-char-anim-back {
        30% {
            opacity: 0;
            stroke-dashoffset: 0;
        }
        31% {
            stroke-dashoffset: -21;
        }
        40% {
            opacity: 1;
        }
        60% {
            stroke-dashoffset: 0;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }
</style>
