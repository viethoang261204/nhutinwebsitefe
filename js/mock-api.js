// Mock API handler for static website
// This file provides mock responses for admin API calls

// Mock data
const mockData = {
    csrfToken: 'mock-csrf-token-12345',
    categories: [
        { id: 1, name: 'Tin tức công nghệ', slug: 'tin-tuc-cong-nghe' },
        { id: 2, name: 'Sản phẩm mới', slug: 'san-pham-moi' },
        { id: 3, name: 'Thông báo', slug: 'thong-bao' }
    ],
    news: [
        {
            id: 1,
            title: 'KEITH WALKING FLOOR - Giải pháp vận tải thông minh',
            slug: 'keith-walking-floor-giai-phap-van-tai-thong-minh',
            content: 'Hệ thống sàn trượt tự đổ KEITH® WALKING FLOOR® vận hành bằng thủy lực...',
            excerpt: 'Giải pháp vận tải hiệu quả cho doanh nghiệp',
            category_id: 1,
            status: 'published',
            featured_image: '/img/picture1.png',
            created_at: '2024-01-15T10:00:00Z',
            updated_at: '2024-01-15T10:00:00Z'
        },
        {
            id: 2,
            title: 'Ứng dụng sàn tự đổ trong nông nghiệp',
            slug: 'ung-dung-san-tu-do-trong-nong-nghiep',
            content: 'Sàn tự đổ KEITH được ứng dụng rộng rãi trong việc vận chuyển nông sản...',
            excerpt: 'Công nghệ hiện đại cho nông nghiệp',
            category_id: 2,
            status: 'published',
            featured_image: '/img/picture2.png',
            created_at: '2024-01-10T14:30:00Z',
            updated_at: '2024-01-10T14:30:00Z'
        }
    ],
    stats: {
        totalNews: 2,
        publishedNews: 2,
        draftNews: 0,
        totalCategories: 3,
        totalViews: 1250
    }
};

// Mock API responses
const mockResponses = {
    '/admin/api/csrf-token': () => ({
        token: mockData.csrfToken
    }),
    
    '/admin/api/categories': () => ({
        data: mockData.categories,
        success: true
    }),
    
    '/admin/api/news': () => ({
        data: mockData.news,
        success: true,
        total: mockData.news.length
    }),
    
    '/admin/api/stats': () => ({
        data: mockData.stats,
        success: true
    })
};

// Override fetch function to intercept API calls
const originalFetch = window.fetch;

window.fetch = function(url, options = {}) {
    // Check if this is an admin API call
    if (url.startsWith('/admin/api/')) {
        console.log('🔧 Mock API: Intercepting call to', url);
        
        // Find matching mock response
        const mockResponse = mockResponses[url];
        
        if (mockResponse) {
            const data = mockResponse();
            
            // Simulate network delay
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        ok: true,
                        status: 200,
                        json: () => Promise.resolve(data),
                        text: () => Promise.resolve(JSON.stringify(data))
                    });
                }, 100);
            });
        } else {
            // Handle dynamic routes like /admin/api/news/{id}
            if (url.startsWith('/admin/api/news/') && options.method === 'DELETE') {
                const id = url.split('/').pop();
                console.log('🔧 Mock API: Deleting news item', id);
                
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            ok: true,
                            status: 200,
                            json: () => Promise.resolve({ success: true, message: 'News deleted successfully' })
                        });
                    }, 100);
                });
            }
            
            if (url.startsWith('/admin/api/news/') && options.method === 'PUT') {
                const id = url.split('/').pop();
                console.log('🔧 Mock API: Updating news item', id);
                
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            ok: true,
                            status: 200,
                            json: () => Promise.resolve({ success: true, message: 'News updated successfully' })
                        });
                    }, 100);
                });
            }
            
            if (url === '/admin/api/news' && options.method === 'POST') {
                console.log('🔧 Mock API: Creating new news item');
                
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            ok: true,
                            status: 201,
                            json: () => Promise.resolve({ success: true, message: 'News created successfully' })
                        });
                    }, 100);
                });
            }
        }
    }
    
    // For non-API calls, use original fetch
    return originalFetch.apply(this, arguments);
};

// Add mock data to localStorage for persistence
if (typeof Storage !== 'undefined') {
    localStorage.setItem('mockNewsData', JSON.stringify(mockData.news));
    localStorage.setItem('mockCategoriesData', JSON.stringify(mockData.categories));
}

console.log('🔧 Mock API handler loaded successfully');
