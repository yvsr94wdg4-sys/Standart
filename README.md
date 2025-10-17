# Standart

Denetim amaçlı yapılan raporlar için oluşturulmuş bir depodur.

## Proje Hakkında
Bu proje denetim raporlarının standardizasyonu ve yönetimi için oluşturulmuştur.

## Başlangıç
Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. Depoyu klonlayın:
   ```bash
   git clone <repo-url>
   cd Standart
   ```
2. Dashboard statik bir HTML dosyası olduğu için ek bir bağımlılık kurulmasına gerek yoktur.
3. `store_audit_dashboard_v2.html` dosyasını açmanın iki yolu vardır:
   - Dosyayı tarayıcınızda doğrudan açın (dosyaya çift tıklayarak veya tarayıcıda `File > Open` ile).
   - Alternatif olarak basit bir HTTP sunucusu başlatabilirsiniz:
     ```bash
     python3 -m http.server 8000
     ```
     Sonrasında tarayıcınızdan `http://localhost:8000/store_audit_dashboard_v2.html` adresine gidin.
4. Dashboard üzerindeki "Excel Yükle" alanından `Tarih, Mağaza, Şehir, Puan, Zayıf Alan` kolonlarına sahip bir Excel dosyası yükleyerek verileri güncelleyebilirsiniz.

> **Not:** Grafikler ve harita bileşenleri CDN üzerinden yüklendiğinden çevrim içi olmanız gerekir.

## Katkıda Bulunma
1. Bu depoyu fork edin
2. Yeni bir dal oluşturun
3. Değişikliklerinizi yapın ve commit edin
4. Dalınıza push yapın
5. Bir Pull Request oluşturun
