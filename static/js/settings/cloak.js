function setCookie(name, value, options) {
    options = options || {};

    let expires = options.expires;

    if (typeof expires == "number" && expires) {
        const d = new Date();
        d.setTime(d.getTime() + expires * 24 * 60 * 60 * 1000);
        expires = options.expires = d;
    }

    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    let updatedCookie = name + "=" + value;

    for (const propName in options) {
        updatedCookie += "; " + propName;
        const propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}

function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

document.addEventListener("DOMContentLoaded", function() {
    const selectedPreset = getCookie("tabCloakPreset");

    const presets = {
        ixl: {
            favicon: "/static/images/icons/ixl.ico",
            title: "IXL | Math, Language Arts, Science, Social Studies, and Spanish"
        },
        s: {
            favicon: "/storage/images/icons/icons/s.ico",
            title: "Home | Schoology"
        },
        classroom: {
            favicon: "/static/images/icons/classroom.ico",
            title: "Home"
        },
        google: {
            favicon: "/static/images/icons/google.ico",
            title: "Google"
        },
        bing: {
            favicon: "/static/images/icons/bing.ico",
            title: "Bing"
        },
        gmail: {
            favicon: "/static/images/icons/gmail.ico",
            title: "Gmail"
        },
        desmos: {
            favicon: "/static/images/icons/desmos.ico",
            title: "Desmos | Graphing Calculator"
        },
        wikipedia: {
            favicon: "/static/images/icons/wikipedia.ico",
            title: "Wikipedia"
        },
        chrometab: {
            favicon: "/static/images/icons/chromenewtab.ico",
            title: "New Tab"
        },
        googledrive: {
            favicon: "/static/images/icons/googledrive.ico",
            title: "My Drive"
        }
    };

    if (selectedPreset && presets[selectedPreset]) {
        const preset = presets[selectedPreset];
        document.title = preset.title;

        const newFavicon = document.createElement("link");
        newFavicon.rel = "icon";
        newFavicon.href = preset.favicon;
    
        const existingFavicon = document.querySelector("link[rel='icon']");
        if (existingFavicon) {
            document.head.removeChild(existingFavicon);
        }
    
        document.head.appendChild(newFavicon);
    }
});  

(function() {
    const panicKey = localStorage.getItem('panicKey');
    const panicUrl = localStorage.getItem('panicUrl') || 'https://www.desmos.com/scientific';

    if (!panicKey) {
        return;
    }

    const keys = new Set(panicKey.split('+'));
    const pressedKeys = new Set();

    function keyHandler(event) {
        pressedKeys.add(event.key);

        for (let key of keys) {
            if (!pressedKeys.has(key)) {
                return;
            }
        }

        document.body.innerHTML = '';
        window.location.href = panicUrl;
    }

    function keyUpHandler(event) {
        pressedKeys.delete(event.key);
    }

    document.addEventListener('keydown', keyHandler);
    document.addEventListener('keyup', keyUpHandler);
})();
