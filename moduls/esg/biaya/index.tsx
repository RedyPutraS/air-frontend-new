import { Container, Content, DocumentLink, Title } from "components";
import Image from "next/image";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  hero?: any;
  sign?: any;
  data?: any;
}

function index(props: Props) {
  const { hero, sign, data } = props;
  const biayaEsgSustainability = data?.biayaEsgSustainability?.content;
  
  return (
    <Container>
        <Title label={sign === "_eng" ?  "Corporate Social Responsibility Program":"Program Corporate Social Responsibility"} />

        <div className="relative mb-10 mt-4">
          <Content
            row={{
              body: (
                <article className="prose" style={{ textAlign: "justify", maxWidth: '100%'}}>
                  {sign === "_ind"?
                  (<>
                    <p>Pada tanggal 17 Desember 2024, PT Ancora Indonesia Resources Tbk bekerja sama dengan Plustik (https://plustik.id/) menyelenggarakan edukasi pengolahan plastik rendah nilai (low-value plastic) kepada siswa-siswi Sekolah Dasar Negeri V Dawuan Tengah, Cikampek. Kegiatan ini bertujuan untuk meningkatkan kesadaran siswa-siswi sekolah dasar mengenai penggunaan plastik yang bijak sejak dini. Acara ini dikemas secara menarik dengan memperkenalkan inovasi produk hasil olahan sampah plastik rendah nilai, yaitu floor decking (serasah), yang juga dipasang di lingkungan sekolah.</p><p>Kepala Sekolah SDN V Dawuan Tengah menyampaikan bahwa sekitar 200 siswa dan 20 tenaga pengajar mengikuti kegiatan edukasi ini. "Para siswa sangat antusias, dan perwakilan PT Ancora Indonesia Resources Tbk pun tampak puas melihat respons positif dari para peserta," ujarnya. Beliau berharap kegiatan ini dapat meningkatkan kepedulian dan pemahaman peserta didik mengenai pentingnya berperilaku ramah lingkungan. “Kami harap kegiatan ini bermanfaat dan setidaknya dapat menginspirasi siswa untuk berinovasi dalam pengolahan sampah, sehingga menghasilkan produk yang bernilai guna dan ekonomis,” tuturnya.</p><p>Dalam membiayai program CSR ini, PT Ancora Indonesia Resources Tbk mengeluarkan biaya sebesar Rp 47,2 juta.</p>
                  </>) : (<>
                    <p>On 17 December 2024, PT Ancora Indonesia Resources Tbk, in collaboration with Plustik (https://plustik.id/), organized an educational program on low-value plastic waste management for students of Sekolah Dasar Negeri V Dawuan Tengah, Cikampek. This initiative aimed to raise awareness among elementary school students about the importance of responsible plastic use from an early age. The event was engagingly structured, introducing innovative products made from low-value plastic waste, such as floor decking, which was also installed within the school environment.</p> <p>The Principal of SDN V Dawuan Tengah stated that approximately 200 students and 20 teachers participated in this educational activity. "The students were highly enthusiastic, and representatives from PT Ancora Indonesia Resources Tbk were pleased to see the positive response from the participants," He said. He expressed hope that this initiative would raise students' awareness and understanding of the importance of environmentally friendly behavior. "We hope this activity proves beneficial and at least inspires students to innovate in waste management, ultimately producing useful and economically valuable products," He added.</p> <p>To fund this CSR program, PT Ancora Indonesia Resources Tbk allocated a budget of Rp 47.2 million.</p>
                  </>)
                  }
                </article>
              ),
            }}
          />
          </div>
          <div className="w-full">
            <div className="hidden md:block">
              <Swiper
                className="xl:h-[350px] md:h-[300px]"
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}  // Menambahkan pagination
                modules={[Pagination]}  // Impor module pagination
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="flex items-center justify-center h-[480px] md:h-auto">
                    <img
                      src="https://backend.ancorair.com/assets/images/csr1.jpg"
                      className="max-w-full h-[400px] md:h-[250px] lg:h-[275px]"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center h-[480px] md:h-auto">
                    <img
                      src="https://backend.ancorair.com/assets/images/csr3.jpg"
                      className="max-w-full h-[400px] md:h-[250px] lg:h-[275px] lg:w-[900px]"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center h-[480px] md:h-auto">
                    <img
                      src="https://backend.ancorair.com/assets/images/csr2.jpeg"
                      className="max-w-full h-[400px] md:h-[250px] lg:h-[275px]"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="flex flex-col gap-5 md:hidden">
                <img
                        src="https://backend.ancorair.com/assets/images/csr1.jpg"
                        className="max-w-full h-[400px] md:h-[250px] lg:h-[275px]"
                      />
                <img
                        src="https://backend.ancorair.com/assets/images/csr2.jpeg"
                        className="max-w-full"
                      />
                <img
                        src="https://backend.ancorair.com/assets/images/csr3.jpg"
                        className="max-w-full"
                      />
              </div>
          </div>
    </Container>
  );
}

export default index;
