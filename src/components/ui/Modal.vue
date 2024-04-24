<script setup>
import { ref } from 'vue'

const isModalActive = ref(true)
</script>

<template>
  <Teleport to="body">
    <div v-if="isModalActive">
      <div class="fixed inset-0 z-30 bg-blackA9 data-[state=open]:animate-overlayShow" />

      <div
        class="fixed left-[50%] top-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-7xl translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow"
      >
        <div class="modal is-active px-4">
          <div class="modal-background bg-black/70"></div>
          <div class="modal-content w-full rounded-lg bg-white p-4 text-sm dark:text-dark-blue">
            <h1 class="mb-4 text-center text-2xl font-semibold">Bilgilendirilmiş Onam Formu</h1>
            <p class="mb-4">
              İstanbul Teknik Üniversitesi Türk Musikisi Devlet Konservatuarı Müzikoloji bölümü öğretim üyesi
              <i>Prof.Dr. Ozan BAYSAL</i> tarafından yürütülen “Ahenk İlişkiler Ağı ile Makam Evrenini Haritalandırmak”
              başlıklı <b>TÜBİTAK 1001 (Proje#122K923)</b> araştırma projesine katılımınız rica olunmaktadır. Bu
              çalışmada katılımınız tamamen gönüllülük esasına dayanır. Lütfen aşağıdaki bilgileri okuyunuz ve katılmaya
              karar vermeden önce anlamadığınız herhangi bir şey varsa çekinmeden sorunuz.
            </p>
            <h2 class="mb-2">
              ÇALIŞMANIN ADI:
              <p>Ahenk İlişkiler Ağı ile Makam Evrenini Haritalandırmak</p>
            </h2>
            <h2 class="mb-2">ÇALIŞMANIN AMACI: Geliştirilmekte olan PerdeÇeşni mesafe algoritmasının test edilmesi</h2>
            <h2 class="mb-2">
              PROSEDÜRLER:
              <p>
                Bu çalışmaya gönüllü katılmak istemeniz halinde bilgisayar destekli bir ara yüz üzerinden 30 çift
                PerdeÇeşni yapısının birbirleri arasındaki geçiş yumuşaklığı/sertliğinin değerlendirilmesi istenecektir.
              </p>
            </h2>
            <h2 class="mb-2">
              OLASI RİSKLER VE RAHATSIZLIKLAR:
              <p>Bulunmamaktadır.</p>
            </h2>
            <h2 class="mb-2">
              TOPLUMA VE/VEYA DENEKLERE OLASI FAYDALARI:
              <p>
                Çalışma neticesinde makam evrenini PerdeÇeşni yapılarının ilişki ağını gösterecek olan uygulamada, bu
                yapıların uzaklıklarını hesaplayan algoritmanın doğruluğu test edilecektir.
              </p>
            </h2>
            <h2 class="mb-2">
              GİZLİLİK:
              <p>
                Bu çalışmayla bağlantılı olarak elde edilen ve sizinle özdeşleşmiş her bilgi gizli kalacak, üçüncü
                kişilerle paylaşılmayacak ve yalnızca sizin izniniz ile ifşa edilecektir. Gizlilik, tanımlanmış bir
                kodlama prosedürüyle sağlanacak ve kod çözümüne erişim yalnızca çalışmanın sorumlusu araştırmacıyla
                sınırlı kalacaktır. Araştırma sonuçları tüm gizlilik ilkelerine uyularak sadece bilimsel çalışmalarda
                kullanılacaktır. Tüm veriler sınırlı erişime sahip güvenli ve şifreli bir veritabanında tutulacaktır.
              </p>
            </h2>
            <h2 class="mb-2">
              KATILIM VE AYRILMA:
              <p>
                Bu çalışmanın içinde olmak isteyip istemediğinize tamamen bağımsız ve etki altında kalmadan karar
                veriniz. Bu çalışmaya gönüllü olarak katılmaya karar vermeniz halinde dahi, sahip olduğunuz herhangi bir
                hakkı kaybetmeden veya herhangi bir cezaya maruz kalmadan istediğiniz zaman çekilebilirsiniz.
              </p>
            </h2>
            <h2 class="mb-2">
              ARAŞTIRMACILARIN KİMLİĞİ:
              <p>Bu araştırma ile ilgili herhangi bir sorunuz veya endişeniz varsa, lütfen iletişime geçiniz:</p>
            </h2>
            <p><i>Yusuf Can ŞEFTALİ</i></p>
            <p>İstanbul Teknik Üniversitesi</p>
            <p>
              Lisansüstü Eğitim Enstitüsü, Müzikoloji ve Müzik Teorisi Anabilim Dalı, Müzikoloji ve Müzik Teorisi
              Doktora Programı
            </p>
            <p>T: 0537 601 00 82</p>
            <p>E: seftali@itu.edu.tr</p>
            <div class="mt-6 text-center">
              <button
                class="rounded-md bg-purple px-4 py-3 text-lg font-semibold uppercase tracking-wider text-white hover:bg-purple/70"
                @click="isModalActive = false"
              >
                Onaylıyorum
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
