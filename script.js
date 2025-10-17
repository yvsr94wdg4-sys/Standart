// Store Audit Dashboard JavaScript

// Global Variables
let storeData = [
    {date: '12.08.2025', store: 'Aydın Forum', city: 'Aydın', itemCount: 42, suitable: 36, score: 87.25, issues: 6, weakArea: 'Diğer Denetimler', findings: 'İade , değişim bilgilendirme yazısı bulunmamaktadır.\nMağaza personellerinin bazılarında yaka kartı yoktur.\nKafa Sayım raporları düzenli yapılmamaktadır.\nArızalı spotlar mevcuttur.', status: 'İyi'},
    {date: '12.08.2025', store: 'Aydın Opsmall', city: 'Aydın', itemCount: 42, suitable: 37, score: 86, issues: 5, weakArea: 'Diğer Denetimler', findings: 'Mağazada barkodsuz ürünler görülmüştür.\nKafa sayım raporları düzenli yapılmamaktadır.\nPersonel yaka kartları eskiktir.', status: 'İyi'},
    {date: '30.06.2025', store: 'Erzurum Serracity', city: 'Erzurum', itemCount: 44, suitable: 40, score: 92, issues: 4, weakArea: 'Diğer Denetimler', findings: 'Kapı alarm cihazı arızalı olduğu tespit edilmiştir.\nMağaza genelinde temizlik boyası gereklidir.\nKafa sayım raporu düzenli dominoya işlenmemiştir.', status: 'İyi'},
    {date: '28.04.2025', store: 'İst. Mall Of', city: 'İstanbul', itemCount: 44, suitable: 39, score: 93.5, issues: 5, weakArea: 'Evrak,Cihaz ve Nakit Denetimi', findings: 'İade,değişim yazısı bulunmamaktadır.\nBanka taksit görseli mevcut değildir.\nKapı alarm cihazı arızalıdır.\nKafa sayım raporları düzenli olarak yapılmamaktadır.\nKabinlere bakım gereklidir.', status: 'İyi'},
    {date: '26.05.2025', store: 'İst. Mall Of', city: 'İstanbul', itemCount: 44, suitable: 36, score: 83, issues: 8, weakArea: 'Diğer Denetimler', findings: 'Kasada 1600₺ nakit fazlası tespit edilmiştir.\nİade,değişim yazısı bulunmamaktadır.\nKapı alarm cihazı çalışmamaktadır.\nRaf aydınlatmaların bazı noktalarında arızalar mevcuttur.\nSoyunma kabinlerinde temizlik boyası gereklidir.', status: 'Orta'},
    {date: '15.04.2025', store: 'İst. Arenapark', city: 'İstanbul', itemCount: 44, suitable: 38, score: 89.75, issues: 6, weakArea: 'Diğer Denetimler', findings: 'Bazı ürünlerde barkodsuz mevcuttur.Vitrin ve aynaların temizliği kusurludur.\nGelen irsaliyelerde imzalar eksiktir.\nTerzihane ve depo düzensizdir.', status: 'İyi'},
    {date: '30.05.2025', store: 'İst. Arenapark', city: 'İstanbul', itemCount: 44, suitable: 39, score: 87, issues: 5, weakArea: 'Diğer Denetimler', findings: 'Kapı alarm cihazı çalışmamaktadır.\nSoyunma kabinlerinde kutular mevcuttur.Boya gereklidir.', status: 'İyi'},
    {date: '18.04.2025', store: 'İst.Atlaspark', city: 'İstanbul', itemCount: 44, suitable: 39, score: 92, issues: 5, weakArea: 'Evrak,Cihaz ve Nakit Denetimi', findings: 'Gelen ve giden irsaliyeler imza eksikleri tespit edilmiştir.\nİade ve değişim bilgilendirme yazısı bulunmamaktadır.\nMerkeze gönderilmesi gereken evraklar düzenli değildir.', status: 'İyi'},
    {date: '30.05.2025', store: 'İst.Atlaspark', city: 'İstanbul', itemCount: 44, suitable: 37, score: 86, issues: 7, weakArea: 'Diğer Denetimler', findings: 'Kapı alarm cihazı arızalıdır.\nPersonel yaka kartları eksiktir.\nSoyunma kabinlerinde bakım gerekli.', status: 'İyi'},
    {date: '29.05.2025', store: 'İst.Armonipark', city: 'İstanbul', itemCount: 44, suitable: 33, score: 80.5, issues: 11, weakArea: 'Evrak,Cihaz ve Nakit Denetimi', findings: 'Yasal müzik yayın hizmet sertifikası süresi 2023 yılında bitmiştir.\nİade,değişim bilgilendirme yazısı bulunmamaktadır.\nBanka taksit görseli bulunmamaktadır.\nPOS cihazının yedeği arızalıdır.\nKapı alarm cihazı arızalıdır.\nKafa sayım raporu düzenli yapılmamaktadır.\nMağazada arızalı spotlar mevcuttur.\nSoyunma kabinin 1 tanesinde koliler mevcuttur.\nMağaza genelinde temizlik boyası gerekmektedir.', status: 'Orta'},
    {date: '27.05.2025', store: 'İst.Beylikdüzü Migros', city: 'İstanbul', itemCount: 44, suitable: 34, score: 83, issues: 10, weakArea: 'Diğer Denetimler', findings: 'Kasada 810₺ eksik tespit edilmiştir.\nDepoda alan dar olduğundan düzensizlik mevcuttur.\nKapı alarm cihazı arızalıdır.\nKasadaki monitör ayakları kırıktır.\nReklam panosundaki aydınlatma arızalıdır.\nSoyunma kabinlerindeki perdeler yırtıktır.\nKlima çalışmamaktadır.', status: 'Orta'},
    {date: '16.04.2025', store: 'İst.İkitelli FSM', city: 'İstanbul', itemCount: 44, suitable: 31, score: 78.75, issues: 13, weakArea: 'Diğer Denetimler', findings: 'Mağaza kapı alarm cihazı çalışmamaktadır.\nAydınlatma ve soyunma kabinlerinde bakım gerekmektedir.\nPantolon ve Aksesuar ürünlerinde güncel olmayan fiyat etiketleri tespit edilmiştir.\nVitrin ve camların temizliği eksiktir.\nPersonel yaka kartları kullanılmamaktadır.\nKafa sayım raporu düzenli paylaşılmamaktadır.\nGelen irsaliyelerde imzalar eksiktir.', status: 'Orta'},
    {date: '29.04.2025', store: 'İst.Palladium', city: 'İstanbul', itemCount: 44, suitable: 37, score: 88, issues: 7, weakArea: 'Mağaza Personel Denetimi', findings: 'Kafa sayım raporları düzenli olarak yapılmamaktadır.\nDepo düzenli değildir.\nBanka taksit görseli bulunmamaktadır.\nİade,değişim bilgilendirme yazısı bulunmamaktadır.', status: 'İyi'},
    {date: '17.04.2025', store: 'İst.Pendik FSM', city: 'İstanbul', itemCount: 44, suitable: 31, score: 74.75, issues: 13, weakArea: 'Mağaza Personel Denetimi', findings: 'İncelemesi sonuçlanıp 2018-2019 yıllarından kalma ürünler görülmüştür.\nÜrünlerin genelinde güncel olmayan fiyat etiketleri tespit edilmiştir.\nMağazada bütün evrakların imzası ve düzeni eksiktir.\nİade,değişim bilgilendirme yazısı yoktur.\nMağaza personel kıyafetleri uygun değildir.\nVitrindeki manken fiyatları güncel değildir.\nReyonlar ve camların temizliği eksiktir.', status: 'Kötü'},
    {date: '25.04.2025', store: 'İst.Piyalepaşa', city: 'İstanbul', itemCount: 44, suitable: 30, score: 70.5, issues: 14, weakArea: 'Evrak,Cihaz ve Nakit Denetimi', findings: 'Kasa bölgesinde bulunması gereken evraklar bulunmamaktadır.\n10 günden fazla onaylanmayan irsaliyesi mevcuttur.\nİade,değişim bilgilendirme yazısı bulunmamaktadır.\nPOS cihazında entegre sorunu vardır.\nAyakkabı ve Papyon-mendil setlerin bir çoğunda güncel olmayan fiyat etiketleri tespit edilmiştir.\nVitrin fiyatları güncel değildir.\n2 adet soyunma kabinin bir tanesi depo olarak kullanılmaktadır.', status: 'Kötü'},
    {date: '17.04.2025', store: 'İst.Viaport', city: 'İstanbul', itemCount: 44, suitable: 32, score: 73, issues: 12, weakArea: 'Evrak,Cihaz ve Nakit Denetimi', findings: 'Kasa denetiminde 3 bin ₺ eksik tespit edilmiştir.\nKapı alarm cihazı arızalı olduğu tespit edilmiştir.\nÜrünlerde güncel olmayan fiyat etiketleri görülmüştür.\nGelen ve giden irsaliyelerde imzalar eksiktir.\nİade,değişim bilgilendirme yazısı yoktur.\nKafa sayım raporu düzenli paylaşılmamaktadır.\nMağaza evrakları düzenli değildir.\nMağaza koordinasyon defteri düzenli değildir.', status: 'Kötü'},
    {date: '16.07.2025', store: 'Bolu Highway', city: 'Bolu', itemCount: 44, suitable: 39, score: 91.5, issues: 5, weakArea: 'Diğer Denetimler', findings: '2023 yılından kalma inceleme ürünleri mevcuttur.\nGider pusulalarında imzalar eksiktir.\nArızalı spotlar mevcuttur.\nSoyunma kabinlerine temizlik boyası gerekmektedir.\nReyonlar ve raflarda toz bulunmaktadır', status: 'İyi'},
    {date: '12.05.2025', store: 'G.Antep Forum', city: 'Gaziantep', itemCount: 44, suitable: 35, score: 84, issues: 9, weakArea: 'Diğer Denetimler', findings: 'Mağaza genelinde güncel olmayan fiyat etiketleri tespit edilmiştir.\nCüzdan ve Ayakkabı gruplarında stok hataları tespit edilmiştir.\nKapı alarm cihazı çalışmamaktadır.\nGider pusulalarında personel imzaları eksiktir.\nBanka taksit görseli bulunmamaktadır\nMağazada çok sayıda arızalı spotlar mevcuttur.\n5 soyunma kabinin 1 tanesinde koliler mevcuttur.\nBazı ürünlerde barkod etiketi ve meto bulunmamaktadır.', status: 'Orta'},
    {date: '12.05.2025', store: 'Şanlıurfa Piazza', city: 'Şanlıurfa', itemCount: 44, suitable: 39, score: 91.25, issues: 5, weakArea: 'Diğer Denetimler', findings: 'İade,değişim bilgilendirme yazısı bulunmamaktadır.\nDepoda aydınlatma arızalıdır.\n4 adet soyunma kabinin 1 tanesi depo olarak kullanılmaktadır.', status: 'İyi'},
    {date: '1.07.2025', store: 'Trabzon Forum', city: 'Trabzon', itemCount: 44, suitable: 38, score: 89.5, issues: 6, weakArea: 'Diğer Denetimler', findings: 'Kafa sayım raporu belirtilen zamanlarda gönderilmemiştir.\nKapı alarm cihazı çalışmamaktadır.\nSoyunma kabinlerinde temizlik boyası gereklidir.\nPersonellerin bazılarında yaka kartı takılı olmadığı görülmüştür.', status: 'İyi'},
    {date: '2.07.2025', store: 'Tokat Novada', city: 'Tokat', itemCount: 44, suitable: 37, score: 86.25, issues: 7, weakArea: 'Diğer Denetimler', findings: 'Kapı alarm cihazı arızalıdır.\n2 adet spot arızalıdır.\nVitrin camlarında lekeler mevcuttur.\nReyonlar tozlu gözükmektedir.\nPersonellerin bazılarında yaka kartı takılı olmadığı görülmüştür.', status: 'İyi'},
    {date: '13.08.2025', store: 'Denizli Forum', city: 'Denizli', itemCount: 42, suitable: 36, score: 85.5, issues: 6, weakArea: 'Diğer Denetimler', findings: 'Kapı alarm cihazında temassızlık vardır.\nReyonlarda temizlik gerekmektedir.\nMağaza çalışanlarının bazılarında yaka kartı yoktur.', status: 'İyi'}
];

let filteredData = [...storeData];
let chartInstances = {};
let photos = [];
let currentTab = 'overview';

const cityCoordinates = {
    'İstanbul': {top: '35%', left: '22%'},
    'Ankara': {top: '45%', left: '40%'},
    'İzmir': {top: '58%', left: '18%'},
    'Aydın': {top: '62%', left: '20%'},
    'Erzurum': {top: '28%', left: '85%'},
    'Bolu': {top: '38%', left: '35%'},
    'Gaziantep': {top: '62%', left: '65%'},
    'Şanlıurfa': {top: '65%', left: '70%'},
    'Trabzon': {top: '22%', left: '75%'},
    'Tokat': {top: '35%', left: '60%'},
    'Denizli': {top: '62%', left: '26%'}
};

// Utility Functions
function parseDate(dateStr) {
    if (!dateStr || typeof dateStr !== 'string') return new Date(1900, 0, 1);
    const parts = dateStr.split('.');
    if (parts.length !== 3) return new Date(1900, 0, 1);
    return new Date(parts[2], parts[1] - 1, parts[0]);
}

function countIssuesInFindings(findings) {
    if (!findings || typeof findings !== 'string') return 0;
    return findings.split('\n').filter(line => line.trim().length > 0).length;
}

function extractCriticalItems(findings) {
    if (!findings || typeof findings !== 'string') return [];
    const items = [];
    const findingsLower = findings.toLowerCase();
    
    if (findingsLower.includes('alarm') || findingsLower.includes('kapı')) items.push('alarm');
    if (findingsLower.includes('kasa') && (findingsLower.includes('eksik') || findingsLower.includes('fazla') || findingsLower.includes('açığ'))) items.push('kasa');
    if (findingsLower.includes('yaka')) items.push('yaka');
    if (findingsLower.includes('kafa sayım')) items.push('kafa');
    if (findingsLower.includes('pos')) items.push('pos');
    
    return items;
}

function getStoreCounts() {
    const counts = {};
    storeData.forEach(store => {
        if (!counts[store.store]) counts[store.store] = [];
        counts[store.store].push(store);
    });
    return counts;
}

function getRegion(city) {
    const regions = {
        'Marmara': ['İstanbul', 'Bolu'],
        'Ege': ['İzmir', 'Aydın', 'Denizli'],
        'Akdeniz': [],
        'İç Anadolu': ['Ankara'],
        'Karadeniz': ['Trabzon', 'Tokat'],
        'Doğu Anadolu': ['Erzurum'],
        'Güneydoğu Anadolu': ['Gaziantep', 'Şanlıurfa']
    };

    for (const [region, cities] of Object.entries(regions)) {
        if (cities.includes(city)) return region;
    }
    return 'Diğer';
}

// Tab Management
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
    currentTab = tabName;

    if (tabName === 'geography') {
        setTimeout(createGeographyAnalysis, 100);
    } else if (tabName === 'statistics') {
        setTimeout(createStatistics, 100);
    } else if (tabName === 'league') {
        setTimeout(createLeagueTable, 100);
    } else if (tabName === 'comparison') {
        populateStoreSelects();
    } else if (tabName === 'photos') {
        populatePhotoFilter();
    }
}

// KPI Calculations
function calculateKPIs() {
    const totalAudits = filteredData.length;
    const avgScore = filteredData.reduce((sum, store) => sum + store.score, 0) / totalAudits;
    const goodStores = filteredData.filter(store => store.status === 'İyi').length;
    const alertStores = filteredData.filter(store => store.status === 'Orta' || store.status === 'Kötü').length;

    return {totalAudits, avgScore: avgScore.toFixed(1), goodStores, alertStores};
}

function updateKPIs() {
    const kpis = calculateKPIs();
    document.getElementById('totalAudits').textContent = kpis.totalAudits;
    document.getElementById('avgScore').textContent = kpis.avgScore;
    document.getElementById('goodStores').textContent = kpis.goodStores;
    document.getElementById('alertStores').textContent = kpis.alertStores;
}

// Chart Creation
function createCharts() {
    Object.values(chartInstances).forEach(chart => chart.destroy());
    chartInstances = {};

    const weakCtx = document.getElementById('weakAreasChart');
    if (weakCtx) {
        const areas = {};
        filteredData.forEach(store => {
            const area = store.weakArea || 'Diğer';
            areas[area] = (areas[area] || 0) + 1;
        });

        const sortedAreas = Object.entries(areas).sort((a, b) => b[1] - a[1]);
        chartInstances.weak = new Chart(weakCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: sortedAreas.map(([area]) => area.length > 25 ? area.substring(0, 25) + '...' : area),
                datasets: [{
                    data: sortedAreas.map(([, count]) => count),
                    backgroundColor: ['#FF453A', '#FF9F0A', '#007AFF', '#30D158', '#BF5AF2', '#FF375F']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: { position: 'bottom' },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${label}: ${value} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    const trendCtx = document.getElementById('trendChart');
    if (trendCtx) {
        const monthlyData = {};
        filteredData.forEach(store => {
            const date = parseDate(store.date);
            const month = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
            if (!monthlyData[month]) monthlyData[month] = [];
            monthlyData[month].push(store.score);
        });

        const labels = Object.keys(monthlyData).sort();
        const avgScores = labels.map(month => 
            (monthlyData[month].reduce((a, b) => a + b, 0) / monthlyData[month].length).toFixed(1)
        );
        const counts = labels.map(month => monthlyData[month].length);

        chartInstances.trend = new Chart(trendCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: labels.map(m => {
                    const [y, mo] = m.split('-');
                    return `${mo}/${y}`;
                }),
                datasets: [{
                    label: 'Ortalama Puan',
                    data: avgScores,
                    borderColor: '#007AFF',
                    backgroundColor: 'rgba(0, 122, 255, 0.1)',
                    tension: 0.4,
                    fill: true,
                    yAxisID: 'y'
                }, {
                    label: 'Denetim Sayısı',
                    data: counts,
                    borderColor: '#30D158',
                    backgroundColor: 'rgba(48, 209, 88, 0.1)',
                    tension: 0.4,
                    fill: true,
                    yAxisID: 'y1'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                interaction: { mode: 'index', intersect: false },
                scales: {
                    y: { type: 'linear', display: true, position: 'left', min: 60, max: 100 },
                    y1: { type: 'linear', display: true, position: 'right', grid: { drawOnChartArea: false } }
                }
            }
        });
    }

    const perfCtx = document.getElementById('performanceChart');
    if (perfCtx) {
        const sortedStores = [...filteredData].sort((a, b) => b.score - a.score).slice(0, 10);
        chartInstances.perf = new Chart(perfCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: sortedStores.map(store => {
                    const name = store.store.length > 15 ? store.store.substring(0, 15) + '...' : store.store;
                    return name;
                }),
                datasets: [{
                    data: sortedStores.map(store => store.score),
                    backgroundColor: sortedStores.map(store => 
                        store.status === 'İyi' ? '#30D158' : 
                        store.status === 'Orta' ? '#FF9F0A' : '#FF453A'
                    ),
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true, max: 100 } }
            }
        });
    }

    const topCtx = document.getElementById('topStoresChart');
    if (topCtx) {
        const topStores = [...filteredData].sort((a, b) => b.score - a.score).slice(0, 6);
        chartInstances.top = new Chart(topCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: topStores.map(store => store.store.length > 12 ? store.store.substring(0, 12) + '...' : store.store),
                datasets: [{
                    data: topStores.map(store => store.score),
                    backgroundColor: '#30D158',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                indexAxis: 'y',
                plugins: { legend: { display: false } },
                scales: { x: { min: 70, max: 100 } }
            }
        });
    }
}

// Filter Functions
function populateMonthFilter() {
    const months = new Set();
    storeData.forEach(store => {
        const date = parseDate(store.date);
        const month = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        months.add(month);
    });

    const select = document.getElementById('monthFilter');
    select.innerHTML = '<option value="">Tüm Aylar</option>';
    Array.from(months).sort().reverse().forEach(month => {
        const [y, m] = month.split('-');
        const option = document.createElement('option');
        option.value = month;
        option.textContent = `${m}/${y}`;
        select.appendChild(option);
    });
}

function filterAudits() {
    const monthFilter = document.getElementById('monthFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;

    filteredData = storeData.filter(store => {
        let match = true;
        
        if (monthFilter) {
            const date = parseDate(store.date);
            const month = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
            if (month !== monthFilter) match = false;
        }
        
        if (statusFilter && store.status !== statusFilter) match = false;
        
        return match;
    });

    updateKPIs();
    createCharts();
    populateAllAudits();
}

// Data Population Functions
function populateAllAudits() {
    const sortedAudits = [...filteredData].sort((a, b) => parseDate(b.date) - parseDate(a.date));
    
    document.getElementById('allAuditsCount').textContent = sortedAudits.length;
    document.getElementById('allAuditsList').innerHTML = sortedAudits.map(audit => `
        <div class="store-item" onclick="openStoreModal('${audit.store.replace(/'/g, "\\'")}', '${audit.date}')">
            <div class="store-info">
                <h4>${audit.store}</h4>
                <p>${audit.date} - ${audit.score} puan - ${audit.issues} uygunsuzluk</p>
            </div>
            <div class="store-metrics">
                <div class="metric-large">${audit.score}</div>
                <div class="status-badge status-${audit.status.toLowerCase()}">${audit.status}</div>
            </div>
        </div>
    `).join('');
}

function populatePanels() {
    const storeCounts = getStoreCounts();

    const storeLatestScores = {};
    Object.entries(storeCounts).forEach(([storeName, audits]) => {
        const sortedAudits = audits.sort((a, b) => parseDate(b.date) - parseDate(a.date));
        const latestAudit = sortedAudits[0];
        
        storeLatestScores[storeName] = {
            store: storeName,
            latestScore: latestAudit.score,
            latestDate: latestAudit.date,
            status: latestAudit.status,
            auditCount: audits.length
        };
    });
    
    const topStores = Object.values(storeLatestScores)
        .sort((a, b) => b.latestScore - a.latestScore)
        .slice(0, 5);
        
    document.getElementById('topCount').textContent = topStores.length;
    document.getElementById('topStores').innerHTML = topStores.map(store => `
        <div class="store-item" onclick="openStoreModal('${store.store.replace(/'/g, "\\'")}', '${store.latestDate}')">
            <div class="store-info">
                <h4>${store.store}</h4>
                <p>${store.latestDate} - ${store.latestScore} puan</p>
            </div>
            <div class="store-metrics">
                <div class="metric-large" style="color: #30D158;">${store.latestScore}</div>
                <div class="status-badge status-${store.status.toLowerCase()}">${store.status}</div>
            </div>
        </div>
    `).join('');

    const riskStores = storeData.map(store => ({
        ...store,
        actualIssues: countIssuesInFindings(store.findings)
    })).filter(store => 
        store.status === 'Kötü' || (store.status === 'Orta' && store.actualIssues >= 8)
    ).sort((a, b) => b.actualIssues - a.actualIssues).slice(0, 6);
    
    document.getElementById('riskCount').textContent = riskStores.length;
    document.getElementById('riskStores').innerHTML = riskStores.map(store => `
        <div class="store-item" onclick="openStoreModal('${store.store.replace(/'/g, "\\'")}', '${store.date}')">
            <div class="store-info">
                <h4>${store.store}</h4>
                <p><strong>${store.actualIssues} uygunsuzluk</strong> - ${store.score} puan</p>
            </div>
            <div class="store-metrics">
                <div class="metric-large" style="color: #FF453A;">${store.actualIssues}</div>
                <div class="status-badge status-${store.status.toLowerCase()}">${store.status}</div>
            </div>
        </div>
    `).join('');

    const improvements = [];
    Object.entries(storeCounts).forEach(([storeName, audits]) => {
        if (audits.length >= 2) {
            const sortedAudits = audits.sort((a, b) => parseDate(a.date) - parseDate(b.date));
            const first = sortedAudits[0];
            const last = sortedAudits[sortedAudits.length - 1];
            if (last.score > first.score) {
                improvements.push({
                    store: storeName,
                    improvement: (last.score - first.score).toFixed(1),
                    firstScore: first.score,
                    lastScore: last.score
                });
            }
        }
    });
    
    improvements.sort((a, b) => parseFloat(b.improvement) - parseFloat(a.improvement));
    
    document.getElementById('improvementCount').textContent = improvements.length;
    document.getElementById('improvementStores').innerHTML = improvements.length > 0 
        ? improvements.map(item => `
            <div class="store-item" onclick="openStoreModal('${item.store.replace(/'/g, "\\'")}', '')">
                <div class="store-info">
                    <h4>${item.store}</h4>
                    <p>+${item.improvement} puan iyileşme</p>
                </div>
                <div class="store-metrics">
                    <div class="metric-large" style="color: #30D158;">+${item.improvement}</div>
                </div>
            </div>
        `).join('')
        : '<p style="text-align: center; color: #8E8E93; padding: 20px;">İyileşme trendi tespit edilmedi</p>';

    const criticalItems = [
        {key: 'alarm', name: 'Kapı Alarm Sistemi'},
        {key: 'kasa', name: 'Kasa Açığı'},
        {key: 'yaka', name: 'Yaka Kartı'},
        {key: 'kafa', name: 'Kafa Sayım'},
        {key: 'pos', name: 'POS Sistemi'}
    ];

    const criticalCounts = {};
    criticalItems.forEach(item => {
        criticalCounts[item.key] = { count: 0, stores: [] };
        storeData.forEach(audit => {
            const items = extractCriticalItems(audit.findings);
            if (items.includes(item.key)) {
                criticalCounts[item.key].count++;
                criticalCounts[item.key].stores.push(audit);
            }
        });
    });

    const totalCritical = Object.values(criticalCounts).reduce((sum, item) => sum + item.count, 0);
    document.getElementById('criticalCount').textContent = totalCritical;
    document.getElementById('criticalFindings').innerHTML = criticalItems
        .filter(item => criticalCounts[item.key].count > 0)
        .sort((a, b) => criticalCounts[b.key].count - criticalCounts[a.key].count)
        .map((item, index) => `
            <div class="store-item" onclick="openCriticalModal('${item.name}', ${index})">
                <div class="store-info">
                    <h4>${item.name}</h4>
                    <p>${criticalCounts[item.key].count} mağaza</p>
                </div>
                <div class="store-metrics">
                    <div class="metric-large">${criticalCounts[item.key].count}</div>
                </div>
            </div>
        `).join('');
    
    window.criticalData = criticalItems.map(item => ({
        name: item.name,
        stores: criticalCounts[item.key].stores
    }));
}

// Geography Analysis
function createGeographyAnalysis() {
    const mapContainer = document.getElementById('turkeyMap');
    if (!mapContainer) return;

    const cityData = {};
    storeData.forEach(store => {
        const city = store.city || 'Diğer';
        if (!cityData[city]) cityData[city] = [];
        cityData[city].push(store.score);
    });

    mapContainer.innerHTML = '';
    Object.entries(cityData).forEach(([city, scores]) => {
        const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;
        const coords = cityCoordinates[city] || {top: '50%', left: '50%'};
        
        const color = avgScore >= 90 ? '#30D158' : 
                     avgScore >= 85 ? '#34C759' :
                     avgScore >= 80 ? '#FF9F0A' : 
                     avgScore >= 75 ? '#FF8C00' : '#FF453A';
        
        const marker = document.createElement('div');
        marker.className = 'city-marker';
        marker.style.cssText = `
            top: ${coords.top};
            left: ${coords.left};
            background: ${color};
            transform: translate(-50%, -50%);
        `;
        marker.innerHTML = avgScore.toFixed(0);
        marker.title = `${city}: ${avgScore.toFixed(1)} puan (${scores.length} denetim)`;
        marker.onclick = () => showCityDetails(city, scores);
        mapContainer.appendChild(marker);
    });

    const regions = {};
    Object.entries(cityData).forEach(([city, scores]) => {
        const region = getRegion(city);
        if (!regions[region]) regions[region] = [];
        regions[region].push(...scores);
    });

    const regionScores = Object.entries(regions).map(([region, scores]) => ({
        region,
        avgScore: (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1)
    })).sort((a, b) => b.avgScore - a.avgScore);

    if (regionScores.length > 0) {
        document.getElementById('bestRegion').textContent = regionScores[0].region;
        document.getElementById('bestRegionScore').textContent = regionScores[0].avgScore + ' puan';
        document.getElementById('worstRegion').textContent = regionScores[regionScores.length - 1].region;
        document.getElementById('worstRegionScore').textContent = regionScores[regionScores.length - 1].avgScore + ' puan';
    }

    document.getElementById('totalCities').textContent = Object.keys(cityData).length;

    const cityCtx = document.getElementById('cityChart');
    if (cityCtx) {
        const sortedCities = Object.entries(cityData)
            .map(([city, scores]) => ({
                city,
                avgScore: (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1)
            }))
            .sort((a, b) => b.avgScore - a.avgScore);

        new Chart(cityCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: sortedCities.map(c => c.city),
                datasets: [{
                    data: sortedCities.map(c => c.avgScore),
                    backgroundColor: '#007AFF',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: { legend: { display: false } },
                scales: { y: { min: 70, max: 100 } }
            }
        });
    }

    const regionCtx = document.getElementById('regionChart');
    if (regionCtx) {
        new Chart(regionCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: regionScores.map(r => r.region),
                datasets: [{
                    data: regionScores.map(r => r.avgScore),
                    backgroundColor: ['#30D158', '#007AFF', '#FF9F0A', '#BF5AF2']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: { legend: { position: 'bottom' } }
            }
        });
    }
}

function showCityDetails(city, scores) {
    const stores = storeData.filter(s => s.city === city);
    const avgScore = (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1);

    document.getElementById('modalTitle').textContent = `${city} - Detaylı Analiz`;
    document.getElementById('modalContent').innerHTML = `
        <div style="margin: 20px 0;">
            <h3>📊 Özet Bilgiler</h3>
            <p><strong>Ortalama Puan:</strong> ${avgScore}</p>
            <p><strong>Toplam Denetim:</strong> ${stores.length}</p>
            <p><strong>En Yüksek:</strong> ${Math.max(...scores).toFixed(1)}</p>
            <p><strong>En Düşük:</strong> ${Math.min(...scores).toFixed(1)}</p>
        </div>
        <div style="margin-top: 20px;">
            <h3>🏪 Mağazalar</h3>
            ${stores.map(store => `
                <div style="background: #f5f5f7; padding: 12px; border-radius: 8px; margin: 8px 0;">
                    <strong>${store.store}</strong> - ${store.date}<br>
                    Puan: ${store.score} | Durum: ${store.status}
                </div>
            `).join('')}
        </div>
    `;
    document.getElementById('storeModal').style.display = 'block';
}

// Store Comparison
function populateStoreSelects() {
    const stores = [...new Set(storeData.map(s => s.store))].sort();
    const html = stores.map(store => `<option value="${store}">${store}</option>`).join('');
    
    document.getElementById('store1Select').innerHTML = '<option value="">Mağaza Seçin</option>' + html;
    document.getElementById('store2Select').innerHTML = '<option value="">Mağaza Seçin</option>' + html;
}

function compareStores() {
    const store1 = document.getElementById('store1Select').value;
    const store2 = document.getElementById('store2Select').value;

    if (!store1 || !store2) {
        alert('Lütfen iki mağaza seçin');
        return;
    }

    const data1 = storeData.filter(s => s.store === store1);
    const data2 = storeData.filter(s => s.store === store2);

    const avg1 = (data1.reduce((sum, s) => sum + s.score, 0) / data1.length).toFixed(1);
    const avg2 = (data2.reduce((sum, s) => sum + s.score, 0) / data2.length).toFixed(1);

    const issues1 = data1.reduce((sum, s) => sum + countIssuesInFindings(s.findings), 0);
    const issues2 = data2.reduce((sum, s) => sum + countIssuesInFindings(s.findings), 0);

    document.getElementById('comparisonResult').innerHTML = `
        <div class="comparison-grid">
            <div class="comparison-card">
                <h3>${store1}</h3>
                <div class="stat-row">
                    <span>Ortalama Puan:</span>
                    <strong style="color: #007AFF;">${avg1}</strong>
                </div>
                <div class="stat-row">
                    <span>Toplam Denetim:</span>
                    <strong>${data1.length}</strong>
                </div>
                <div class="stat-row">
                    <span>Toplam Uygunsuzluk:</span>
                    <strong style="color: #FF453A;">${issues1}</strong>
                </div>
                <div class="stat-row">
                    <span>En Yüksek Puan:</span>
                    <strong>${Math.max(...data1.map(s => s.score)).toFixed(1)}</strong>
                </div>
                <div class="stat-row">
                    <span>En Düşük Puan:</span>
                    <strong>${Math.min(...data1.map(s => s.score)).toFixed(1)}</strong>
                </div>
            </div>
            <div class="comparison-card">
                <h3>${store2}</h3>
                <div class="stat-row">
                    <span>Ortalama Puan:</span>
                    <strong style="color: #007AFF;">${avg2}</strong>
                </div>
                <div class="stat-row">
                    <span>Toplam Denetim:</span>
                    <strong>${data2.length}</strong>
                </div>
                <div class="stat-row">
                    <span>Toplam Uygunsuzluk:</span>
                    <strong style="color: #FF453A;">${issues2}</strong>
                </div>
                <div class="stat-row">
                    <span>En Yüksek Puan:</span>
                    <strong>${Math.max(...data2.map(s => s.score)).toFixed(1)}</strong>
                </div>
                <div class="stat-row">
                    <span>En Düşük Puan:</span>
                    <strong>${Math.min(...data2.map(s => s.score)).toFixed(1)}</strong>
                </div>
            </div>
        </div>
        <div class="analysis-panel" style="margin-top: 30px;">
            <h3>📊 Karşılaştırma Sonucu</h3>
            <p style="font-size: 1.2em; margin-top: 15px;">
                ${avg1 > avg2 ? 
                    `<strong>${store1}</strong> daha iyi performans gösteriyor (${(avg1 - avg2).toFixed(1)} puan fark)` : 
                    avg2 > avg1 ?
                    `<strong>${store2}</strong> daha iyi performans gösteriyor (${(avg2 - avg1).toFixed(1)} puan fark)` :
                    'Her iki mağaza da eşit performans gösteriyor'}
            </p>
        </div>
    `;
}

// Statistics
function createStatistics() {
    const scores = storeData.map(s => s.score);
    
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    const variance = scores.reduce((sum, score) => sum + Math.pow(score - avg, 2), 0) / scores.length;
    const stdDev = Math.sqrt(variance).toFixed(2);

    const sorted = [...scores].sort((a, b) => a - b);
    const median = sorted.length % 2 === 0 ?
        ((sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2).toFixed(1) :
        sorted[Math.floor(sorted.length / 2)].toFixed(1);

    const frequency = {};
    scores.forEach(score => {
        const rounded = Math.round(score);
        frequency[rounded] = (frequency[rounded] || 0) + 1;
    });
    const mode = Object.entries(frequency).reduce((a, b) => b[1] > a[1] ? b : a)[0];

    const q1 = sorted[Math.floor(sorted.length * 0.25)];
    const q3 = sorted[Math.floor(sorted.length * 0.75)];
    const iqr = q3 - q1;
    const outliers = scores.filter(s => s < q1 - 1.5 * iqr || s > q3 + 1.5 * iqr).length;

    document.getElementById('stdDev').textContent = stdDev;
    document.getElementById('median').textContent = median;
    document.getElementById('mode').textContent = mode;
    document.getElementById('outliers').textContent = outliers;

    const histCtx = document.getElementById('histogramChart');
    if (histCtx) {
        const bins = {};
        scores.forEach(score => {
            const bin = Math.floor(score / 5) * 5;
            bins[bin] = (bins[bin] || 0) + 1;
        });

        new Chart(histCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: Object.keys(bins).sort((a, b) => a - b).map(b => `${b}-${parseInt(b) + 5}`),
                datasets: [{
                    data: Object.values(bins),
                    backgroundColor: '#007AFF',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: { legend: { display: false } }
            }
        });
    }

    const boxCtx = document.getElementById('boxPlotChart');
    if (boxCtx) {
        new Chart(boxCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Min', 'Q1', 'Medyan', 'Q3', 'Max'],
                datasets: [{
                    data: [Math.min(...scores), q1, parseFloat(median), q3, Math.max(...scores)],
                    backgroundColor: ['#FF453A', '#FF9F0A', '#007AFF', '#30D158', '#BF5AF2'],
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: { legend: { display: false } },
                scales: { y: { min: 60, max: 100 } }
            }
        });
    }
}

// League Table
function createLeagueTable() {
    const storeCounts = getStoreCounts();
    const leagueData = Object.entries(storeCounts).map(([store, audits]) => {
        const avgScore = (audits.reduce((sum, a) => sum + a.score, 0) / audits.length).toFixed(1);
        const latestAudit = audits.sort((a, b) => parseDate(b.date) - parseDate(a.date))[0];
        
        let badges = [];
        if (avgScore >= 90) badges.push('🥇 Altın Yıldız');
        if (audits.length >= 3) badges.push('⭐ Deneyimli');
        if (audits.every(a => a.status === 'İyi')) badges.push('💎 Mükemmel');
        
        return {
            store,
            avgScore: parseFloat(avgScore),
            status: latestAudit.status,
            badges: badges.length > 0 ? badges : ['—']
        };
    }).sort((a, b) => b.avgScore - a.avgScore);

    const tbody = document.querySelector('#leagueTable tbody');
    tbody.innerHTML = leagueData.map((data, index) => `
        <tr>
            <td><strong>${index + 1}</strong></td>
            <td>${data.store}</td>
            <td><strong style="color: #007AFF;">${data.avgScore}</strong></td>
            <td>${data.badges.map(b => `<span class="badge ${
                b.includes('Altın') ? 'badge-gold' : 
                b.includes('Deneyimli') ? 'badge-silver' : 
                b.includes('Mükemmel') ? 'badge-bronze' : ''
            }">${b}</span>`).join('')}</td>
            <td><span class="status-badge status-${data.status.toLowerCase()}">${data.status}</span></td>
        </tr>
    `).join('');
}

// Photo Gallery
function populatePhotoFilter() {
    const stores = [...new Set(storeData.map(s => s.store))].sort();
    const select = document.getElementById('photoStoreFilter');
    select.innerHTML = '<option value="">Tüm Mağazalar</option>' + 
        stores.map(store => `<option value="${store}">${store}</option>`).join('');
}

function filterPhotos() {
    const filter = document.getElementById('photoStoreFilter').value;
    const gallery = document.getElementById('photoGallery');
    
    const filtered = filter ? photos.filter(p => p.store === filter) : photos;
    
    if (filtered.length === 0) {
        gallery.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: #8E8E93; padding: 40px;">Fotoğraf bulunamadı</div>';
    } else {
        gallery.innerHTML = filtered.map((photo, i) => `
            <div class="photo-item" onclick="viewPhoto(${i})">
                <img src="${photo.url}" alt="${photo.store}">
            </div>
        `).join('');
    }
}

function viewPhoto(index) {
    const photo = photos[index];
    document.getElementById('modalTitle').textContent = 'Fotoğraf Detayı';
    document.getElementById('modalContent').innerHTML = `
        <img src="${photo.url}" style="width: 100%; border-radius: 8px;">
        <p style="margin-top: 15px;"><strong>Mağaza:</strong> ${photo.store}</p>
        <p><strong>Tarih:</strong> ${photo.date}</p>
    `;
    document.getElementById('storeModal').style.display = 'block';
}

// Modal Functions
function openStoreModal(storeName, date) {
    const store = storeData.find(s => s.store === storeName && (!date || s.date === date));
    if (!store) return;

    const actualIssues = countIssuesInFindings(store.findings);

    document.getElementById('modalTitle').textContent = store.store;
    document.getElementById('modalContent').innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 20px 0;">
            <div style="text-align: center; background: #f0f9ff; padding: 20px; border-radius: 8px;">
                <div style="font-size: 2em; font-weight: bold; color: #0369a1;">${store.score}</div>
                <div>Puan</div>
            </div>
            <div style="text-align: center; background: #fef3c7; padding: 20px; border-radius: 8px;">
                <div style="font-size: 2em; font-weight: bold; color: #d97706;">${actualIssues}</div>
                <div>Uygunsuzluk</div>
            </div>
            <div style="text-align: center; background: #f0fdf4; padding: 20px; border-radius: 8px;">
                <div style="font-size: 1.5em; font-weight: bold; color: #166534;">${store.status}</div>
                <div>Durum</div>
            </div>
        </div>
        <p><strong>Tarih:</strong> ${store.date}</p>
        <p><strong>Şehir:</strong> ${store.city || '-'}</p>
        <p><strong>En Zayıf Alan:</strong> ${store.weakArea}</p>
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-top: 15px;">
            <p style="font-weight: 600; margin-bottom: 10px;">Tespit Edilen Bulgular:</p>
            <p style="white-space: pre-line; line-height: 1.6;">${store.findings}</p>
        </div>
    `;
    document.getElementById('storeModal').style.display = 'block';
}

function openCriticalModal(name, index) {
    const criticalItem = window.criticalData[index];
    if (!criticalItem) return;
    
    document.getElementById('modalTitle').textContent = `${name} - Kritik Bulgu`;
    document.getElementById('modalContent').innerHTML = `
        <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Etkilenen Mağaza Sayısı:</strong> ${criticalItem.stores.length}</p>
        </div>
        <div style="background: #f8d7da; padding: 15px; border-radius: 8px;">
            <h4>Etkilenen Mağazalar:</h4>
            ${criticalItem.stores.map(store => `
                <div style="background: white; padding: 10px; margin: 8px 0; border-radius: 6px;">
                    <p style="font-weight: 600;">${store.store} - ${store.date}</p>
                    <p style="font-size: 0.9em;">Puan: ${store.score} | Uygunsuzluk: ${countIssuesInFindings(store.findings)}</p>
                </div>
            `).join('')}
        </div>
    `;
    document.getElementById('storeModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('storeModal').style.display = 'none';
}

// Excel Data Loading
function loadExcelData() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) {
        document.getElementById('uploadStatus').innerHTML = 'Lütfen dosya seçin';
        document.getElementById('uploadStatus').style.color = '#FF9F0A';
        return;
    }

    document.getElementById('uploadStatus').innerHTML = 'Yükleniyor...';
    document.getElementById('uploadStatus').style.color = '#007AFF';
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, {type: 'array'});
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            console.log('Excel verisi okundu:', jsonData.length, 'satır');
            console.log('İlk satır örneği:', jsonData[0]);

            const formattedData = jsonData.map(row => {
                let dateValue = row.Tarih || row.Date || row.date || row['Denetim Tarihi'] || '';
                const storeValue = row.Mağaza || row.Store || row.store || row['Mağaza Adı'] || '';
                const cityValue = row.Şehir || row.City || row.city || row['İl'] || '';
                const scoreValue = parseFloat(row.Puan || row.Score || row.score || row['Toplam Puan'] || 0);
                const issuesValue = parseInt(row.Uygunsuzluk || row.Issues || row.issues || row['Uygunsuz Sayısı'] || 0);
                
                // Tarih dönüşümü
                if (dateValue && typeof dateValue === 'number') {
                    const excelEpoch = new Date(1900, 0, 1);
                    const jsDate = new Date(excelEpoch.getTime() + (dateValue - 2) * 24 * 60 * 60 * 1000);
                    dateValue = jsDate.toLocaleDateString('tr-TR');
                } else if (dateValue && dateValue instanceof Date) {
                    dateValue = dateValue.toLocaleDateString('tr-TR');
                } else if (dateValue && typeof dateValue === 'string') {
                    dateValue = String(dateValue);
                } else {
                    dateValue = new Date().toLocaleDateString('tr-TR');
                }

                // Şehir ismi çıkarma (mağaza adından)
                let finalCity = cityValue;
                if (!finalCity && storeValue) {
                    if (storeValue.includes('İst.') || storeValue.includes('İstanbul')) finalCity = 'İstanbul';
                    else if (storeValue.includes('Ankara')) finalCity = 'Ankara';
                    else if (storeValue.includes('İzmir')) finalCity = 'İzmir';
                    else if (storeValue.includes('Aydın')) finalCity = 'Aydın';
                    else if (storeValue.includes('Erzurum')) finalCity = 'Erzurum';
                    else if (storeValue.includes('Bolu')) finalCity = 'Bolu';
                    else if (storeValue.includes('G.Antep') || storeValue.includes('Gaziantep')) finalCity = 'Gaziantep';
                    else if (storeValue.includes('Şanlıurfa')) finalCity = 'Şanlıurfa';
                    else if (storeValue.includes('Trabzon')) finalCity = 'Trabzon';
                    else if (storeValue.includes('Tokat')) finalCity = 'Tokat';
                    else if (storeValue.includes('Denizli')) finalCity = 'Denizli';
                    else finalCity = 'Diğer';
                }
                
                return {
                    date: dateValue,
                    store: String(storeValue || ''),
                    city: String(finalCity || 'Diğer'),
                    itemCount: parseInt(row['Madde Sayısı'] || row.itemCount || row['Toplam Madde'] || 44),
                    suitable: parseInt(row.Uygun || row.suitable || row['Uygun Madde'] || (44 - issuesValue)),
                    score: scoreValue,
                    issues: issuesValue,
                    weakArea: String(row['Zayıf Alan'] || row.weakArea || row['En Zayıf Alan'] || 'Diğer Denetimler'),
                    findings: String(row.Bulgular || row.findings || row['Tespit Edilen Bulgular'] || row.Bulgu || ''),
                    status: row.Durum || row.status || row.Status || (scoreValue >= 85 ? 'İyi' : scoreValue >= 75 ? 'Orta' : 'Kötü')
                };
            });

            console.log('Formatlanmış veri:', formattedData.length, 'satır');
            console.log('İlk formatlanmış satır:', formattedData[0]);

            const validData = formattedData.filter(item => 
                item.store && item.store.trim().length > 0 && 
                item.date && 
                !isNaN(item.score) && 
                item.score > 0
            );

            console.log('Geçerli veri:', validData.length, 'satır');

            if (validData.length > 0) {
                storeData = validData;
                filteredData = [...storeData];
                refreshDashboard();
                document.getElementById('uploadStatus').innerHTML = `✅ ${validData.length} kayıt başarıyla yüklendi`;
                document.getElementById('uploadStatus').style.color = '#30D158';
                
                fileInput.value = '';
            } else {
                document.getElementById('uploadStatus').innerHTML = '❌ Geçerli veri bulunamadı. Kolon isimlerini kontrol edin.';
                document.getElementById('uploadStatus').style.color = '#FF453A';
                console.error('Geçersiz veri. İlk satır:', formattedData[0]);
            }
        } catch (error) {
            console.error('Excel okuma hatası:', error);
            document.getElementById('uploadStatus').innerHTML = '❌ Dosya okunamadı: ' + error.message;
            document.getElementById('uploadStatus').style.color = '#FF453A';
        }
    };
    
    reader.onerror = function(error) {
        console.error('FileReader hatası:', error);
        document.getElementById('uploadStatus').innerHTML = '❌ Dosya okuma hatası';
        document.getElementById('uploadStatus').style.color = '#FF453A';
    };
    
    reader.readAsArrayBuffer(file);
}

function refreshDashboard() {
    updateKPIs();
    createCharts();
    populateMonthFilter();
    populateAllAudits();
    populatePanels();
    
    if (currentTab === 'geography') {
        setTimeout(createGeographyAnalysis, 100);
    } else if (currentTab === 'statistics') {
        setTimeout(createStatistics, 100);
    } else if (currentTab === 'league') {
        setTimeout(createLeagueTable, 100);
    }
}

// Initialization
function init() {
    updateKPIs();
    createCharts();
    populateMonthFilter();
    populateAllAudits();
    populatePanels();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', init);

document.getElementById('fileInput').addEventListener('change', function() {
    if (this.files[0]) {
        document.getElementById('uploadStatus').innerHTML = this.files[0].name + ' seçildi';
        document.getElementById('uploadStatus').style.color = '#007AFF';
    }
});

document.getElementById('photoUpload').addEventListener('change', function(e) {
    const files = Array.from(e.target.files);
    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = function(event) {
            photos.push({
                url: event.target.result,
                store: 'Genel',
                date: new Date().toLocaleDateString('tr-TR')
            });
            filterPhotos();
        };
        reader.readAsDataURL(file);
    });
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') closeModal();
});

window.onclick = function(event) {
    if (event.target === document.getElementById('storeModal')) closeModal();
};