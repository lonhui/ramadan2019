<template>
  <div id="rule">
      <header>Syarat dan Ketentuan</header>
      <div class="content">
        <ul class="ul_1">
            <li>Periode event THR Caping 29 Mei -7 Juni 2019.</li>
            <li>Kamu harus register & login di Caping untuk mengikuti event ini.</li>
            <li>Untuk mengikuti event ini, kamu harus mengakses menu event melalui pop up screen saat kamu membuka Caping atau floating button berlogo event ini yang ada di halaman depan.</li>
            <li>Event kali ini dibentuk dalam kuis harian terkait Ramadan dan Idul Fitri.</li>
            <li>Setiap harinya, akan ada pertanyaan kuis yang berbeda. Kuis harian ini berlaku selama satu hari penuh. Keesokan harinya, pertanyaan kuis pada hari sebelumnya akan ditutup dan diganti menjadi pertanyaan kuis berikutnya.</li>
            <li>Pilih jawaban yang tersedia pada pertanyaan kuis yang tertera.</li>
            <li>Apabila kamu memilih jawaban yang benar, kamu akan langsung dialihkan ke halaman hadiah THR dan berkesempatan untuk mendapat hadiah dari Caping.</li>
            <li>Apabila kamu menjawab jawaban yang salah, kamu akan otomatis gugur dan kesempatan berikutnya bisa kamu coba di kuis keesokan harinya.</li>
            <li>
                Berikut adalah hadiah THR yang bisa kamu dapatkan dalam event ini:
                <ul class="ul_2">
                    <li>- 200 poin Caping</li>
                    <li>- 500 poin Caping</li>
                    <li>- Voucher Go-Pay Rp 10.000</li>
                    <li>- Voucher Go-Pay Rp 50.000</li>
                    <li>- Voucher Ovo Rp 20.000</li>
                    <li>- Pulsa Rp 5.000</li>
                    <li>- Pulsa Rp 10.000</li>
                    <li>- Pulsa Rp 25.000</li>
                </ul>
            </li>
            <li>1 user hanya bisa menggunakan 1 akun dan 1 nomor hp yang sama. Apabila terdeteksi adanya penggunaan lebih dari 1 akun atau nomor hp oleh user yang sama, pihak Caping akan memblokir akun dan nomor hp tersebut.</li>
            <li>Bagi yang mendapatkan hadiah pulsa atau voucher Go-Pay/Ovo, pastikan mengisi data nomor hp dengan benar. Kesalahan pengisian data bukan tanggung jawab Caping.</li>
            <li>Capingers yang mengikuti event ini dianggap setuju dengan syarat & ketentuan yang berlaku.</li>
            <li>Syarat & ketentuan dapat berubah sewaktu-waktu tanpa pemberitahuan lebih lanjut.  Silahkan cek halaman ini secara berkala.</li>
            <li>Pertanyaan lebih lanjut mengenai event ini, silahkan hubungi Caping pada menu Feedback ya!</li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#rule{
    padding: 0.1rem;
    background-color: #f6f6f6;
}
header{
    height: 0.5rem;
    color: #fff;
    font-size: 0.14rem;
    padding-left: 0.2rem;
    background-color: #82c345;
    border-radius: 0.05rem 0.05rem 0 0;
    display: flex;
    align-items: center;
}
.content{
    background-color: #fff;
    border-radius: 0 0 0.05rem 0.05rem;
    -moz-box-shadow:0 0.01rem 0.01rem rgba(0,0,0,0.2); 
    -webkit-box-shadow:0 0.01rem 0.01rem rgba(0,0,0,0.2); 
    box-shadow:0 0.01rem 0.01rem rgba(0,0,0,0.2); 
}
ul{
    font-size: 0.13rem;
    line-height: 0.2rem;
}
.ul_1{
    padding: 0.2rem;
    list-style-type: decimal;
    margin-left: 0.15rem;
}
.ul_2{
    margin-left: 0.15rem;
}
</style>
