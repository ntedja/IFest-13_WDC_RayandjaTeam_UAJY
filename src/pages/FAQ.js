import styled from "styled-components";

const FAQContainer = styled.div`
  padding: 2rem;
  padding-top: 6rem;
  max-width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  min-height: 100vh;
  color: #1a1a1a;
`;

const FAQTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const FAQDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
`;

const FAQCategory = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const QuestionItem = styled.div`
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 1rem;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Question = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
`;

const Answer = styled.p`
  font-size: 1rem;
  color: #666;
`;

const FAQ = () => {
  return (
    <FAQContainer>
      <FAQTitle>Frequently Asked Questions (FAQ)</FAQTitle>
      <FAQDescription>
        Temukan jawaban atas pertanyaan umum tentang Rayandja dan layanan kami.
      </FAQDescription>

      {/* Tentang Rayandja */}
      <FAQCategory>
        <CategoryTitle>Tentang Rayandja</CategoryTitle>
        <QuestionList>
          <QuestionItem>
            <Question>Apa itu Rayandja?</Question>
            <Answer>
              Rayandja adalah platform e-commerce yang fokus pada fashion bekas. Kami menyediakan layanan beli, jual, trade (pertukaran barang), dan donasi barang bekas ke desainer.
            </Answer>
          </QuestionItem>
          <QuestionItem>
            <Question>Bagaimana cara bergabung dengan Rayandja?</Question>
            <Answer>
              Anda dapat mendaftar akun dengan mengklik tombol "Sign Up" di pojok kanan atas website. Isi formulir pendaftaran dan verifikasi email Anda.
            </Answer>
          </QuestionItem>
        </QuestionList>
      </FAQCategory>

      {/* Pembelian dan Penjualan */}
      <FAQCategory>
        <CategoryTitle>Pembelian dan Penjualan</CategoryTitle>
        <QuestionList>
          <QuestionItem>
            <Question>Bagaimana cara membeli barang di Rayandja?</Question>
            <Answer>
              Cari barang yang Anda inginkan, lalu klik "Beli". Ikuti langkah-langkah pembayaran yang tersedia.
            </Answer>
          </QuestionItem>
          <QuestionItem>
            <Question>Bagaimana cara menjual barang di Rayandja?</Question>
            <Answer>
              Unggah foto dan deskripsi barang Anda, tentukan harga, dan publikasikan. Setelah ada yang membeli, ikuti petunjuk pengiriman.
            </Answer>
          </QuestionItem>
        </QuestionList>
      </FAQCategory>

      {/* Trade (Pertukaran Barang) */}
      <FAQCategory>
        <CategoryTitle>Trade (Pertukaran Barang)</CategoryTitle>
        <QuestionList>
          <QuestionItem>
            <Question>Apa itu fitur Trade di Rayandja?</Question>
            <Answer>
              Fitur Trade memungkinkan Anda menukar barang bekas Anda dengan barang bekas milik pengguna lain.
            </Answer>
          </QuestionItem>
          <QuestionItem>
            <Question>Bagaimana cara menggunakan fitur Trade?</Question>
            <Answer>
              Pilih barang yang ingin Anda tukar, lalu ajukan penawaran trade ke pemilik barang yang Anda inginkan.
            </Answer>
          </QuestionItem>
        </QuestionList>
      </FAQCategory>

      {/* Donasi ke Desainer */}
      <FAQCategory>
        <CategoryTitle>Donasi ke Desainer</CategoryTitle>
        <QuestionList>
          <QuestionItem>
            <Question>Bagaimana cara mendonasikan barang bekas ke desainer?</Question>
            <Answer>
              Pilih opsi "Donasi" saat mengunggah barang, lalu pilih desainer tujuan. Barang Anda akan dikirim ke desainer tersebut.
            </Answer>
          </QuestionItem>
          <QuestionItem>
            <Question>Apa keuntungan mendonasikan barang bekas?</Question>
            <Answer>
              Anda membantu mengurangi limbah fashion dan mendukung kreativitas desainer lokal.
            </Answer>
          </QuestionItem>
        </QuestionList>
      </FAQCategory>

      {/* Edukasi Barang Bekas */}
      <FAQCategory>
        <CategoryTitle>Edukasi Barang Bekas</CategoryTitle>
        <QuestionList>
          <QuestionItem>
            <Question>Apa yang dimaksud dengan edukasi barang bekas?</Question>
            <Answer>
              Kami menyediakan artikel dan video edukatif tentang manfaat menggunakan barang bekas, cara merawatnya, dan dampaknya terhadap lingkungan.
            </Answer>
          </QuestionItem>
          <QuestionItem>
            <Question>Bagaimana cara mengakses konten edukasi?</Question>
            <Answer>
              Kunjungi bagian "Edukasi" di menu utama website untuk melihat semua konten yang tersedia.
            </Answer>
          </QuestionItem>
        </QuestionList>
      </FAQCategory>
    </FAQContainer>
  );
};

export default FAQ;