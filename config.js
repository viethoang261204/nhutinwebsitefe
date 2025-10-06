// Configuration file for KEITH WALKING FLOOR Frontend

const CONFIG = {
    // Website information
    site: {
        name: 'KEITH WALKING FLOOR',
        title: 'KEITH® WALKING FLOOR® - Sàn tự đổ | Như Tín Vietnam',
        description: 'Đối tác ủy quyền của KEITH® Mfg. Co, tại Việt Nam. Giải pháp vận tải thông minh với sàn tự đổ.',
        keywords: 'keith, walking floor, sàn tự đổ, vận tải, nhự tín, vietnam',
        url: 'https://thungxetudo.com',
        logo: 'img/logo.png'
    },

    // Contact information
    contact: {
        phone: '0907.917.301',
        zalo: 'https://zalo.me/0907917301',
        email: 'info@thungxetudo.com'
    },

    // Social media
    social: {
        facebook: '',
        youtube: '',
        linkedin: ''
    },

    // API endpoints (disabled for static website)
    api: {
        baseUrl: null,
        endpoints: {
            news: null,
            categories: null,
            stats: null
        }
    },

    // Features
    features: {
        multiLanguage: true,
        animations: true,
        carousel: true,
        pdfViewer: true,
        adminPanel: true
    },

    // Animation settings
    animation: {
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out'
    },

    // Carousel settings
    carousel: {
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        nav: true,
        dots: true
    },

    // Language settings
    languages: {
        default: 'vi',
        supported: ['vi', 'en'],
        fallback: 'vi'
    },

    // Cache settings
    cache: {
        enabled: true,
        duration: 3600000, // 1 hour in milliseconds
        version: '1.0.0'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
