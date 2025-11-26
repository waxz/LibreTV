// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    // ========== 优质资源站 ==========
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳资源',
        detail: 'https://heimuer.tv',
    },
    
    ffzy: {
        api: 'https://cj.ffzyapi.com/api.php/provide/vod',
        name: '非凡资源',
        detail: 'http://ffzy5.tv',
    },
    
    liangzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '量子资源',
    },
    
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    
    // ========== 主流资源站 ==========
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iQiyi资源',
    },
    
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源',
    },
    
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
    },
    
    // ========== 速度类 ==========
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com',
    },
    
    feisu: {
        api: 'https://www.feisuzyapi.com/api.php/provide/vod',
        name: '飞速资源',
    },
    
    guangsu: {
        api: 'http://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8',
        name: '光速资源',
    },
    
    shandian: {
        api: 'http://sdzyapi.com/api.php/provide/vod',
        name: '闪电资源',
    },
    
    // ========== 动漫/特色资源 ==========
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源',
    },
    
    xiaomaomi: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '小猫咪资源',
    },
    
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源',
    },
    
    // ========== 综合资源站 ==========
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    },
    
    hwba: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '华为吧资源',
    },
    
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    
    modu: {
        api: 'https://caiji.moduapi.cc/api.php/provide/vod',
        name: '魔都资源',
    },
    
    zuida: {
        api: 'http://zuidazy.me/api.php/provide/vod',
        name: '最大资源',
    },
    
    // ========== 特色站点 ==========
    wujin: {
        api: 'https://api.wujinapi.com/api.php/provide/vod',
        name: '无尽资源',
    },
    
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧',
    },
    
    haiwaikan: {
        api: 'https://haiwaikan.com/api.php/provide/vod',
        name: '海外看资源🪜',
    },
    
    niuniu: {
        api: 'https://api.niuniuzy.me/api.php/provide/vod',
        name: '牛牛资源',
    },
    
    yaya: {
        api: 'https://cj.yayazy.net/api.php/provide/vod',
        name: '丫丫资源',
    },
    
    // ========== 电影站 ==========
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com',
    },
    
    piaohua: {
        api: 'http://www.ahjiuman.com/api.php/provide/vod/at/json',
        name: '飘花资源',
    },
    
    piaoling: {
        api: 'https://p2100.net/api.php/provide/vod',
        name: '飘零资源',
    },
    
    // ========== 其他资源 ==========
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    
    tiankong: {
        api: 'http://m3u8.tiankongapi.com/api.php/provide/vod/from/tkm3u8',
        name: '天空资源',
    },
    
    tianyi: {
        api: 'https://www.911ysw.top/tianyi.php/provide/vod',
        name: '天翼资源',
    },
    
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    
    hongniu: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod',
        name: '红牛资源',
    },
    
    jinying: {
        api: 'http://jyzyapi.com/provide/vod/from/jinyingm3u8',
        name: '金鹰资源',
    },
    
    kuache: {
        api: 'https://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8',
        name: '快车资源',
    },
    
    kuaiikan: {
        api: 'https://www.kuaikan-api.com/api.php/provide/vod',
        name: '快看资源',
    },
    
    kuaiyun: {
        api: 'https://www.kuaiyunzy.com/api.php/provide/vod',
        name: '快云资源',
    },
    
    uku: {
        api: 'https://api.ukuapi.com/api.php/provide/vod',
        name: 'U酷资源',
    },
    
    haohua: {
        api: 'https://hhzyapi.com/api.php/provide/vod',
        name: '豪华资源',
    },
    
    huya: {
        api: 'https://www.huyaapi.com/api.php/provide/vod',
        name: '虎牙资源',
    },
    
    sijiu: {
        api: 'https://49zyw.com/api.php/provide/vod',
        name: '四九资源',
    },
    
    suoni: {
        api: 'https://suoniapi.com/api.php/provide/vod',
        name: '索尼资源',
    },
    
    subo: {
        api: 'https://subocaiji.com/api.php/provide/vod',
        name: '速博资源',
    },
    
    xiongzhang: {
        api: 'https://xzcjz.com/api.php/provide/vod',
        name: '熊掌资源',
    },
    
    xinlang: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: '新浪资源',
    },
    
    qihu: {
        api: 'https://caiji.qhzyapi.com/api.php/provide/vod',
        name: '奇虎资源',
    },
    
    // ========== 小众/特殊 ==========
    beidouxing: {
        api: 'http://m3u8.bdxzyapi.com/api.php/provide/vod',
        name: '北斗星资源',
    },
    
    aosika: {
        api: 'http://aosikazy.com/api.php/provide/vod',
        name: '奥斯卡资源',
    },
    
    laoya: {
        api: 'http://api.apilyzy.com/api.php/provide/vod',
        name: '老鸭资源',
    },
    
    kudian: {
        api: 'http://kudian10.com/api.php/provide/vod',
        name: '酷点资源',
    },
    
    tangrenjie: {
        api: 'http://tangrenjie.tv/api.php/provide/vod',
        name: '唐人街资源',
    },
    
    senlin: {
        api: 'http://slapibf.com/api.php/provide/vod',
        name: '森林资源',
    },
    
    yingku: {
        api: 'http://api.ykapi.net/api.php/provide/vod',
        name: '影库资源',
    },
    
    tantan: {
        api: 'http://apittzy.com/api.php/provide/vod',
        name: '探探资源',
    },
    
    aidan: {
        api: 'http://lovedan.net/api.php/provide/vod',
        name: '艾旦影视',
    },
    
    siwa: {
        api: 'http://siwazyw.cc/api.php/provide/vod',
        name: '丝袜资源',
    },
    
    // ========== 区域/本地 ==========
    citong: {
        api: 'http://ys9.cttv.vip/api.php/provide/vod',
        name: '刺桐资源',
    },
    
    youzhi: {
        api: 'http://api.1080zyku.com/inc/api.php/provide/vod',
        name: '优质资源库',
    },
    
    sanshijiu: {
        api: 'http://39kan.com/api.php/provide/vod',
        name: '39影视',
    },
    
    tiantang: {
        api: 'http://vipmv.cc/api.php/provide/vod',
        name: '天堂资源',
    },
    
    lehuo: {
        api: 'http://lehootv.com/api.php/provide/vod',
        name: '乐活影视',
    },
    
    kaifang: {
        api: 'http://vod-demo.onrender.com/pubdovod.php',
        name: '开放电影',
    },
    
    wangmin: {
        api: 'http://prinevillesda.org/api.php/provide/vod',
        name: '网民电影',
    },
    
    yeyu: {
        api: 'https://yyff.540734621.xyz/api.php/provide/vod',
        name: '业余资源',
    },
    
    xiaohuangren: {
        api: 'https://iqyi.xiaohuangrentv.com/api.php/provide/vod',
        name: '小黄人资源',
    },
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
