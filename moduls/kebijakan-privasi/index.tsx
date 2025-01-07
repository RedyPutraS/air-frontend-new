import React from "react";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { Container, Content, Title } from "components";

interface Props {
  lang?: "id" | "en";
}

const Index: React.FC<Props> = ({ lang = "id" }) => {
  const deskripsi = {
    description_ind: `
      <header style="text-align: center; margin-top: 20px;">
        <h1>Kebijakan Privasi</h1>
        <h2>PT Ancora Indonesia Resources, Tbk</h2>
      </header>
      <p><em><strong>Terakhir diperbarui:</strong> 4 November 2024</em></p>
    <main>
        <section>
            <p>
                Kebijakan Privasi ini menjelaskan kebijakan dan prosedur kami terkait pengumpulan,
                penggunaan, dan pengungkapan Data Pribadi/informasi Anda saat menggunakan Situs Web Kami.
                Kebijakan ini juga memberikan Data Pribadi/informasi mengenai hak privasi Anda dan bagaimana
                hukum melindungi Data Pribadi Anda. Dengan mengakses Situs Web kami, Anda setuju untuk
                mengumpulkan dan menggunakan informasi sesuai dengan Kebijakan Privasi ini. Kebijakan ini
                disusun dengan bantuan Pembuat Kebijakan Privasi yang sesuai dengan hukum yang berlaku.
            </p>
        </section>
        <section>
            <h2>1. Interpretasi dan Definisi</h2>
            <h3>1.1 Interpretasi</h3>
            <p>
                Kata-kata yang huruf pertamanya kapital memiliki arti yang ditentukan berdasarkan kondisi
                berikut. Definisi berikut akan memiliki arti yang sama terlepas dari apakah muncul dalam
                bentuk tunggal atau jamak.
            </p>
            <h3>1.2 Definisi</h3>
            <p>Untuk tujuan Kebijakan Privasi ini:</p>
            <ul>
                <li>
                    <strong>Perusahaan</strong> (disebut sebagai "Perusahaan", "Kami", "Kita", atau "Milik Kami"
                    dalam Kebijakan ini) merujuk pada PT Ancora Indonesia Resources Tbk dan seluruh afiliasi Kami.
                </li>
                <li>
                    <strong>Cookies</strong> adalah file kecil yang ditempatkan di komputer, perangkat seluler, atau
                    perangkat lain oleh sebuah Situs Web, yang berisi rincian riwayat penelusuran Anda di Situs Web
                    tersebut di antara banyak penggunaannya.
                </li>
                <li>
                    <strong>Negara</strong> merujuk pada: Indonesia.
                </li>
                <li>
                    <strong>Perangkat</strong> berarti perangkat apa pun yang dapat mengakses Layanan, seperti
                    komputer, ponsel, atau tablet digital.
                </li>
                <li>
                    <strong>Data Pribadi</strong> adalah informasi apa pun yang berkaitan dengan individu yang
                    teridentifikasi atau dapat diidentifikasi.
                </li>
                <li>
                    <strong>Data Penggunaan</strong> merujuk pada data yang dikumpulkan secara otomatis, baik dihasilkan
                    oleh penggunaan Layanan atau dari infrastruktur Layanan itu sendiri (misalnya, durasi kunjungan halaman).
                </li>
                <li>
                    <strong>Situs Web</strong> merujuk pada Situs Perusahaan, yang dapat diakses dari 
                    <a href="https://ancorair.com" target="_blank" rel="noopener noreferrer">https://ancorair.com</a>.
                </li>
                <li>
                    <strong>Anda</strong> berarti individu yang mengakses atau menggunakan Layanan, atau perusahaan,
                    atau entitas hukum lainnya atas nama siapa individu tersebut mengakses atau menggunakan Layanan tersebut.
                </li>
            </ul>
        </section>
        <section>
            <h2>2. Mengumpulkan dan Menggunakan Data Pribadi Anda</h2>
            <h3>2.1 Jenis Data yang Dikumpulkan</h3>
            <h4>2.1.1 Data Pribadi</h4>
            <p>
                Saat mengakses Situs Web Kami, Kami mungkin meminta Anda untuk memberikan Data Pribadi/informasi
                identifikasi pribadi tertentu yang dapat digunakan untuk menghubungi atau mengidentifikasi Anda.
                Data Pribadi/informasi identifikasi pribadi dapat mencakup, tetapi tidak terbatas pada:
            </p>
            <ul>
                <li>Nama depan dan nama belakang</li>
                <li>Nomor telepon/telepon seluler</li>
                <li>Alamat email</li>
                <li>Alamat, Kelurahan, Kecamatan, Provinsi, Kode Pos, Kota</li>
                <li>Data Pribadi lainnya</li>
            </ul>
            <h3>2.2 Data Penggunaan</h3>
            <p>
                Data Penggunaan dikumpulkan secara otomatis saat Anda berselancar pada Situs Web Kami. Data
                Penggunaan dapat mencakup informasi seperti alamat Protokol Internet (IP) perangkat Anda
                (misalnya alamat IP), jenis browser, versi browser, halaman-halaman dari Layanan/Situs Web Kami
                yang Anda kunjungi, waktu dan tanggal kunjungan Anda, waktu yang dihabiskan di halaman-halaman tersebut,
                pengenal perangkat unik, dan data diagnostik lainnya. Ketika Anda mengakses Situs Web melalui
                perangkat seluler, Kami mungkin secara otomatis mengumpulkan informasi tertentu termasuk tetapi tidak
                terbatas pada jenis perangkat seluler yang Anda gunakan, ID unik perangkat seluler Anda, alamat IP
                perangkat seluler Anda, sistem operasi seluler Anda, jenis browser Internet seluler yang Anda gunakan,
                pengenal perangkat unik, dan data diagnostik lainnya. Kami juga dapat mengumpulkan informasi yang
                dikirimkan browser Anda setiap kali Anda mengunjungi Situs Web Kami atau ketika Anda mengakses
                Situs Web melalui perangkat seluler.
            </p>
            <h3>2.3 Teknologi Pelacakan dan Cookies</h3>
            <p>
                Kami menggunakan Cookies dan teknologi pelacakan serupa untuk melacak aktivitas di Situs Web Kami
                dan menyimpan informasi tertentu. Teknologi pelacakan yang digunakan adalah beacon, tag, dan skrip
                untuk mengumpulkan dan melacak informasi serta meningkatkan dan menganalisis Situs Web Kami.
                Teknologi yang Kami gunakan dapat mencakup:
            </p>
            <ul>
                <li>
                    <strong>Cookies atau Cookies Browser:</strong> Cookie adalah file kecil yang ditempatkan di
                    Perangkat Anda. Anda dapat menginstruksikan browser Anda untuk menolak semua Cookies atau menunjukkan
                    ketika Cookie sedang dikirim. Namun, jika Anda tidak menerima Cookies, Anda mungkin tidak dapat
                    menggunakan beberapa bagian dari Layanan Kami. Kecuali jika Anda telah menyesuaikan pengaturan
                    browser Anda sehingga menolak Cookies, Layanan Kami mungkin menggunakan Cookies.
                </li>
                <li>
                    <strong>Web Beacons:</strong> Bagian tertentu dari layanan Kami dan email Kami mungkin berisi file
                    elektronik kecil yang dikenal sebagai web beacons (juga disebut sebagai gif transparan, tag piksel,
                    dan gif satu piksel) yang memungkinkan Perusahaan untuk menghitung jumlah pengguna yang mengakses
                    halaman website.
                </li>
                <li>
                    <strong>Cookies Persistent dan Cookies Sesi:</strong> Cookies Persistent tetap ada di komputer
                    pribadi atau perangkat seluler Anda ketika Anda offline, sementara Cookies Sesi dihapus segera
                    setelah Anda menutup browser web. Kami menggunakan baik Cookies Sesi maupun Persistent untuk
                    tujuan berikut:
                    <ul>
                        <li>
                            <strong>Cookies Penting / Esensial</strong><br>
                            Jenis: Cookies Sesi<br>
                            Dikelola oleh: Kami<br>
                            Tujuan: Cookies ini penting untuk menyediakan Layanan kepada Anda melalui Situs Web
                            dan memungkinkan Anda menggunakan beberapa fitur di dalamnya.
                        </li>
                        <li>
                            <strong>Cookies Kebijakan / Penerimaan Pemberitahuan</strong><br>
                            Jenis: Cookies Persistent<br>
                            Dikelola oleh: Kami<br>
                            Tujuan: Cookies ini mengidentifikasi apakah pengguna telah menerima penggunaan cookies
                            di Situs Web.
                        </li>
                        <li>
                            <strong>Cookies Fungsionalitas</strong><br>
                            Jenis: Cookies Persistent<br>
                            Dikelola oleh: Kami<br>
                            Tujuan: Cookies ini memungkinkan Kami untuk mengingat pilihan yang Anda buat saat
                            menggunakan Situs Web.
                        </li>
                    </ul>
                </li>
            </ul>
            <p>
                Untuk informasi lebih lanjut tentang cookies yang Kami gunakan dan pilihan terkait cookies tersebut,
                silakan kunjungi Kebijakan Cookies Kami atau bagian Kebijakan Privasi Kami mengenai cookies pada angka
                2.3 di atas.
            </p>
        </section>
        <section>
          <h2>3. Tujuan Pengumpulan Data</h2>
          <p>Perusahaan mungkin menggunakan Data Pribadi untuk tujuan berikut:</p>
          <ul>
              <li>Meningkatkan dan memelihara sistem dari kegiatan Anda pada sistem Kami.</li>
              <li>Menganalisis efektivitas sistem dan Situs Web Kami.</li>
              <li>Kegiatan perekrutan karyawan dari data yang diisi oleh Pelamar selama proses rekrutmen.</li>
              <li>Kegiatan pemasaran Perusahaan dalam menyampaikan program pemasaran.</li>
          </ul>
          <p>Perusahaan juga akan menyimpan Data Penggunaan untuk analisis internal. Data Penggunaan umumnya disimpan untuk jangka waktu lebih pendek kecuali data ini digunakan untuk memperkuat keamanan.</p>
          <p>Dengan memberikan Data Pribadi Anda kepada kami, Anda menyetujui bahwa:</p>
          <ul>
              <li>Anda telah membaca dan memahami pemberitahuan dalam Kebijakan Privasi ini dan menyetujui penggunaan Data Pribadi Anda sebagaimana diatur dalam Kebijakan Privasi ini.</li>
              <li>Dalam hal Anda memberikan kepada kami Data Pribadi yang berkaitan dengan individu lain (seperti pasangan Anda, anggota keluarga, teman atau pihak lain), Anda menyatakan dan menjamin bahwa Anda, secara sah dan tidak melanggar hukum, telah mendapatkan dan memperoleh persetujuan dari individu tersebut untuk, dan dengan ini menyetujui atas nama individu tersebut untuk digunakan Data Pribadi tersebut sebagaimana diatur dalam Kebijakan Privasi ini.</li>
              <li>Semua pernyataan Anda adalah benar dan tepat sesuai pengetahuan Anda, dan Anda tidak dengan sengaja menghilangkan informasi terkait yang bersifat merugikan.</li>
              <li>Persetujuan yang Anda berikan kepada kami dilakukan tanpa adanya paksaan dari pihak manapun.</li>
          </ul>
        </section>
        <section>
          <h2>4. Transfer Data Pribadi</h2>
          <p>Data Pribadi/Informasi Anda diproses di kantor operasional Perusahaan dan tempat lain di mana pihak-pihak terlibat dalam pemrosesan berada. Ini berarti bahwa Data Pribadi/informasi ini mungkin ditransfer ke — dan dipelihara di — komputer yang terletak di luar Negara atau negara tempat tinggal Anda.</p>
        </section>

        <section>
          <h2>5. Hapus Data Pribadi</h2>
          <p>Anda memiliki hak untuk menghapus atau meminta agar Kami membantu dalam menghapus Data Pribadi yang telah Kami kumpulkan tentang diri Anda. Untuk hal ini, Anda dapat menghubungi Kami melalui: <a href="mailto:pengaduan@ancorair.com">pengaduan@ancorair.com</a>.</p>
        </section>
        <section>
          <h2>6. Keamanan Data Pribadi</h2>
          <p>Keamanan Data Pribadi Anda sangat penting bagi Kami; namun, ingat bahwa tidak ada metode transmisi melalui Internet atau metode penyimpanan elektronik yang 100% terjamin keamanannya.</p>
        </section>
        <section>
          <h2>7. Tautan ke Situs Web Lain</h2>
          <p>Layanan/Situs Web Kami mungkin berisi tautan ke situs web lain yang tidak dikelola oleh Kami. Jika Anda mengklik tautan pihak ketiga tersebut, Anda akan diarahkan ke situs web pihak ketiga dan seluruh kegiatan Anda di sana yang berkaitan dengan data pribadi Anda sudah tidak menjadi tanggung jawab Kami.</p>
        </section>
        <section>
          <h2>8. Perubahan pada Kebijakan Privasi Ini</h2>
          <p>Kami dapat memperbarui Kebijakan Privasi Kami dari waktu ke waktu. Kami akan memberitahu Anda tentang perubahan dengan memposting Kebijakan Privasi baru di halaman ini.</p>
        </section>
        <section>
          <h2>9. Hubungi Kami</h2>
          <p>Jika ada pertanyaan tentang Kebijakan Privasi ini, silakan hubungi Kami melalui email: <a href="mailto:pengaduan@ancorair.com">pengaduan@ancorair.com</a>.</p>
        </section>
      </main>
    `,
    description: `
      <header style="text-align: center; margin-top: 20px;">
          <h1>Privacy Policy</h1>
          <p><strong>PT Ancora Indonesia Resources, Tbk</strong></p>
          </header>
          <p><em><strong>Last updated:</strong> November 4, 2024</em></p>
    <main>
      <section>
          <p>
              This Privacy Policy explains our policies and procedures regarding the collection,
              use, and disclosure of your Personal Data/information when using our Website.
              This Policy also provides information about your privacy rights and how
              the law protects your Personal Data. By accessing our Website, you agree to
              the collection and use of information in accordance with this Privacy Policy. This Policy
              has been drafted with the assistance of a Privacy Policy Generator that complies with applicable laws.
          </p>
      </section>
      <section>
        <h2>1. Interpretation and Definitions</h2>
        <h3>1.1 Interpretation</h3>
        <p>
            Words with capitalized first letters have meanings defined under the following conditions.
            The following definitions will have the same meaning regardless of whether they appear in
            singular or plural form.
        </p>
        <h3>1.2 Definitions</h3>
        <p>For the purposes of this Privacy Policy:</p>
        <ul>
            <li>
                <strong>Company</strong> (referred to as "Company", "We", "Us", or "Our" in this Policy) refers to PT Ancora Indonesia Resources Tbk and all our affiliates.
            </li>
            <li>
                <strong>Cookies</strong> are small files placed on a computer, mobile device, or other devices by a Website that contains details of your browsing history on that Website among many of its uses.
            </li>
            <li>
                <strong>Country</strong> refers to: Indonesia.
            </li>
            <li>
                <strong>Device</strong> means any device that can access the Services, such as a computer, mobile phone, or digital tablet.
            </li>
            <li>
                <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.
            </li>
            <li>
                <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
            </li>
            <li>
                <strong>Website</strong> refers to the Company’s Site, accessible from 
                <a href="https://ancorair.com" target="_blank" rel="noopener noreferrer">https://ancorair.com</a>.
            </li>
            <li>
                <strong>You</strong> means the individual accessing or using the Services, or a company or other legal entity on behalf of which such individual is accessing or using the Services.
            </li>
        </ul>
    </section>
    <section>
        <h2>2. Collecting and Using Your Personal Data</h2>
        <h3>2.1 Types of Data Collected</h3>
        <h4>2.1.1 Personal Data</h4>
        <p>
            When accessing our Website, we may ask you to provide certain Personal Data/information
            that can be used to contact or identify you. Personal Data/identifiable information may include, but is not limited to:
        </p>
        <ul>
            <li>First and last name</li>
            <li>Phone number/cell phone number</li>
            <li>Email address</li>
            <li>Address, Subdistrict, District, Province, Postal Code, City</li>
            <li>Other Personal Data</li>
        </ul>
        <h3>2.2 Usage Data</h3>
        <p>
            Usage Data is collected automatically when you browse our Website. Usage Data may include information such as your device’s Internet Protocol (IP) address (e.g., IP address), browser type, browser version, the pages of our Service/Website that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data. When you access the Website through a mobile device, we may automatically collect certain information, including but not limited to the type of mobile device you use, your mobile device unique ID, your mobile device IP address, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers, and other diagnostic data. We may also collect information that your browser sends whenever you visit our Website or when you access the Website through a mobile device.
        </p>
        <h3>2.3 Tracking Technologies and Cookies</h3>
        <p>
            We use Cookies and similar tracking technologies to track activity on our Website and store certain information. The tracking technologies we use are beacons, tags, and scripts to collect and track information and to improve and analyze our Website. The technologies we may use include:
        </p>
        <ul>
            <li>
                <strong>Cookies or Browser Cookies:</strong> Cookies are small files placed on your Device. You can instruct your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if you do not accept Cookies, you may not be able to use some portions of our Services. Unless you have adjusted your browser setting to refuse Cookies, our Services may use Cookies.
            </li>
            <li>
                <strong>Web Beacons:</strong> Certain parts of our Services and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that allow the Company to count the number of users who have accessed a web page.
            </li>
            <li>
                <strong>Persistent Cookies and Session Cookies:</strong> Persistent Cookies remain on your personal computer or mobile device when you go offline, while Session Cookies are deleted as soon as you close your web browser. We use both Session and Persistent Cookies for the following purposes:
                <ul>
                    <li>
                        <strong>Essential Cookies</strong><br>
                        Type: Session Cookies<br>
                        Managed by: Us<br>
                        Purpose: These Cookies are essential for providing you with Services through the Website and enabling you to use some of its features.
                    </li>
                    <li>
                        <strong>Policy/Notice Acceptance Cookies</strong><br>
                        Type: Persistent Cookies<br>
                        Managed by: Us<br>
                        Purpose: These Cookies identify whether users have accepted the use of cookies on the Website.
                    </li>
                    <li>
                        <strong>Functionality Cookies</strong><br>
                        Type: Persistent Cookies<br>
                        Managed by: Us<br>
                        Purpose: These Cookies allow us to remember the choices you make when using the Website.
                    </li>
                </ul>
            </li>
        </ul>
        <p>
            For more information about the cookies we use and your related cookie choices, please visit our Cookie Policy or the section in our Privacy Policy regarding cookies in point 2.3 above.
        </p>
    </section>
    <section>
        <h2>3. Purpose of Data Collection</h2>
        <p>The Company may use Personal Data for the following purposes:</p>
        <ul>
            <li>To improve and maintain the system based on your activities on our system.</li>
            <li>To analyze the effectiveness of our systems and Website.</li>
            <li>Employee recruitment activities based on data filled in by Applicants during the recruitment process.</li>
            <li>Company marketing activities in delivering marketing programs.</li>
        </ul>
        <p>The Company will also retain Usage Data for internal analysis. Usage Data is generally retained for a shorter period unless this data is used to strengthen security.</p>
        <p>By providing your Personal Data to us, you agree that:</p>
        <ul>
            <li>You have read and understood the notice in this Privacy Policy and agree to the use of your Personal Data as set forth in this Privacy Policy.</li>
            <li>If you provide us with Personal Data relating to another individual (such as your spouse, family member, friend, or another party), you represent and warrant that you have, lawfully and without violating the law, obtained and received consent from that individual, and hereby agree on their behalf to the use of their Personal Data as set forth in this Privacy Policy.</li>
            <li>All your statements are true and accurate to the best of your knowledge, and you are not intentionally omitting any harmful information.</li>
            <li>The consent you provide to us is given voluntarily and without coercion from any party.</li>
        </ul>
    </section>
    <section>
        <h2>4. Transfer of Personal Data</h2>
        <p>Your Personal Data/information is processed at the Company’s operational offices and other places where the parties involved in the processing are located. This means that your Personal Data/information may be transferred to — and maintained on — computers located outside the Country or the country where you reside.</p>
    </section>

    <section>
        <h2>5. Deleting Personal Data</h2>
        <p>You have the right to delete or request that we assist in deleting the Personal Data we have collected about you. For this, you can contact us at: <a href="mailto:pengaduan@ancorair.com">pengaduan@ancorair.com</a>.</p>
    </section>
    <section>
        <h2>6. Security of Personal Data</h2>
        <p>The security of your Personal Data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
    </section>
    <section>
      <h2>7. Links to Other Websites</h2>
      <p>
          Our Services/Website may contain links to other websites that are not operated by us. 
          If you click on a third-party link, you will be directed to that third-party's website, 
          and we have no control over and assume no responsibility for the content, privacy policies, 
          or practices of any third-party sites or services.
      </p>
    </section>
    <section>
        <h2>8. Changes to This Privacy Policy</h2>
        <p>
            We may update our Privacy Policy from time to time. 
            We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
    </section>
    <section>
        <h2>9. Contact Us</h2>
        <p>
            If you have any questions about this Privacy Policy, please contact us via email: 
            <a href="mailto:pengaduan@ancorair.com">pengaduan@ancorair.com</a>.
        </p>
    </section>
    `,
  };

    return (
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-9 gap-5 sm:gap-20">
                <div className="col-span-1 lg:col-span-12">
                    <Title label={lang === "id" ? "Kebijakan Privasi" : "Privacy Statement"} />
                    <Content
                        row={{
                            body: (
                                <>
                                    {/* Dokument Pengaduan Pelanggan */}
                                    <article className="prose" style={{ textAlign: "justify", maxWidth: '100%' }}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: lang === "id" ? deskripsi.description_ind : deskripsi.description,
                                            }}
                                        />
                                    </article>
                                </>
                            ),
                        }}
                    />
                </div>
            </div>
        </Container>
    );
};

export default Index;
