# 🏪 Mağaza Denetim Dashboard

Modern ve interaktif bir mağaza denetim yönetim sistemi. Bu dashboard, mağaza denetim verilerini analiz etmek, görselleştirmek ve raporlamak için tasarlanmıştır.

## 📋 Özellikler

### 🎯 Ana Özellikler
- **Genel Bakış**: KPI kartları, grafikler ve performans analizleri
- **Coğrafi Analiz**: Türkiye haritası üzerinde şehir bazlı performans görselleştirmesi
- **Mağaza Karşılaştırması**: İki mağazayı detaylı olarak karşılaştırma
- **İstatistiksel Analiz**: Histogram, box plot ve istatistiksel metrikler
- **Mağaza Ligi**: Performans tablosu ve rozet sistemi
- **Fotoğraf Galerisi**: Denetim fotoğraflarını yönetme

### 📊 Dashboard Sekmeleri

#### 1. Genel Bakış
- **KPI Kartları**: Toplam denetim, ortalama puan, iyi/kötü mağaza sayıları
- **Grafikler**: 
  - En zayıf alanlar (donut chart)
  - Aylık trend analizi (line chart)
  - Mağaza performans dağılımı (bar chart)
  - En iyi performans (horizontal bar chart)
- **Filtreleme**: Ay ve durum bazlı filtreleme
- **Analiz Panelleri**:
  - Tüm denetimler listesi
  - En iyi performans gösteren mağazalar
  - Yüksek riskli mağazalar
  - İyileşme trendi gösteren mağazalar
  - Kritik bulgular

#### 2. Coğrafi Analiz
- **Türkiye Haritası**: Şehir bazlı performans göstergeleri
- **Renk Kodlaması**:
  - 🟢 Yeşil: 90+ puan (Mükemmel)
  - 🟡 Sarı: 80-89 puan (İyi)
  - 🟠 Turuncu: 75-79 puan (Orta)
  - 🔴 Kırmızı: 75- puan (Kötü)
- **Bölge Analizleri**: En iyi/kötü bölgeler
- **Şehir Grafikleri**: Bar chart ve donut chart

#### 3. Karşılaştırma
- İki mağazayı seçerek detaylı karşılaştırma
- Ortalama puan, denetim sayısı, uygunsuzluk sayısı
- En yüksek/düşük puanlar
- Performans farkı analizi

#### 4. İstatistikler
- **İstatistiksel Metrikler**:
  - Standart sapma
  - Medyan puan
  - Mod puan
  - Aykırı değer sayısı
- **Görselleştirmeler**:
  - Histogram (puan dağılımı)
  - Box plot analizi

#### 5. Mağaza Ligi
- Performans tablosu (sıralama)
- **Rozet Sistemi**:
  - 🥇 Altın Yıldız: 90+ ortalama puan
  - ⭐ Deneyimli: 3+ denetim
  - 💎 Mükemmel: Tüm denetimleri "İyi"

#### 6. Fotoğraf Galerisi
- Denetim fotoğraflarını yükleme ve görüntüleme
- Mağaza bazlı filtreleme
- Fotoğraf detay görüntüleme

## 🚀 Kurulum ve Kullanım

### Gereksinimler
- Modern web tarayıcısı (Chrome, Firefox, Safari, Edge)
- İnternet bağlantısı (CDN kütüphaneleri için)

### Kurulum
1. Tüm dosyaları aynı klasöre yerleştirin:
   ```
   project-folder/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── README.md
   ```

2. `index.html` dosyasını web tarayıcısında açın

### Excel Veri Yükleme
Dashboard, Excel (.xlsx, .xls) dosyalarından veri yükleme özelliğine sahiptir.

#### Desteklenen Kolon İsimleri:
- **Tarih**: `Tarih`, `Date`, `date`, `Denetim Tarihi`
- **Mağaza**: `Mağaza`, `Store`, `store`, `Mağaza Adı`
- **Şehir**: `Şehir`, `City`, `city`, `İl`
- **Puan**: `Puan`, `Score`, `score`, `Toplam Puan`
- **Uygunsuzluk**: `Uygunsuzluk`, `Issues`, `issues`, `Uygunsuz Sayısı`
- **Zayıf Alan**: `Zayıf Alan`, `weakArea`, `En Zayıf Alan`
- **Bulgular**: `Bulgular`, `findings`, `Tespit Edilen Bulgular`, `Bulgu`
- **Durum**: `Durum`, `status`, `Status`

#### Excel Dosyası Hazırlama:
```excel
Tarih       | Mağaza           | Şehir     | Puan | Uygunsuzluk | Durum
12.08.2025  | Aydın Forum      | Aydın     | 87.25| 6           | İyi
30.06.2025  | Erzurum Serracity| Erzurum   | 92   | 4           | İyi
```

## 🎨 Özelleştirme

### Renk Teması
CSS dosyasında ana renkler:
- **Birincil**: `#007AFF` (Mavi)
- **Başarı**: `#30D158` (Yeşil)
- **Uyarı**: `#FF9F0A` (Turuncu)
- **Hata**: `#FF453A` (Kırmızı)
- **Mor**: `#BF5AF2` (Mor)

### Şehir Koordinatları
`script.js` dosyasında `cityCoordinates` objesi ile harita üzerindeki şehir konumları özelleştirilebilir.

## 📱 Responsive Tasarım

Dashboard, farklı ekran boyutları için optimize edilmiştir:
- **Desktop**: Tam özellik seti
- **Tablet**: Grid düzenlemesi
- **Mobil**: Tek sütun düzeni, kaydırılabilir tablar

## 🔧 Teknik Detaylar

### Kullanılan Kütüphaneler
- **Chart.js 3.9.1**: Grafik görselleştirmeleri
- **SheetJS (xlsx) 0.18.5**: Excel dosya okuma

### Tarayıcı Desteği
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Performans
- Lazy loading: Sekmeler arası geçişte sadece gerekli içerik yüklenir
- Chart caching: Grafik örnekleri cache'lenir
- Responsive images: Fotoğraflar otomatik boyutlandırılır

## 📊 Veri Yapısı

### Store Data Format
```javascript
{
    date: '12.08.2025',           // Denetim tarihi
    store: 'Aydın Forum',         // Mağaza adı
    city: 'Aydın',               // Şehir
    itemCount: 42,               // Toplam madde sayısı
    suitable: 36,                // Uygun madde sayısı
    score: 87.25,                // Puan
    issues: 6,                   // Uygunsuzluk sayısı
    weakArea: 'Diğer Denetimler', // En zayıf alan
    findings: 'Bulgular...',     // Tespit edilen bulgular
    status: 'İyi'                // Durum (İyi/Orta/Kötü)
}
```

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 Destek

Sorularınız için:
- GitHub Issues açabilirsiniz
- Dokümantasyonu kontrol edebilirsiniz

---

**Not**: Bu dashboard, mağaza denetim süreçlerini dijitalleştirmek ve veri odaklı kararlar almak için tasarlanmıştır. Gerçek zamanlı veri entegrasyonu için backend API geliştirmesi gerekebilir.