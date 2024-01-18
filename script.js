function hitungLuas() {
    var sisi = document.getElementById("sisi").value;
    var luas = sisi * sisi;
    document.getElementById("luas").innerHTML = luas;
  }
  
  function hitungKeliling() {
    var sisi = document.getElementById("sisi").value;
    var keliling = 4 * sisi;
    document.getElementById("keliling").innerHTML = keliling;
  }
  
  document.getElementById("sisi").addEventListener("change", hitungLuas);
  document.getElementById("sisi").addEventListener("change", hitungKeliling);
  document.getElementById("hitung").addEventListener("click", hitungLuas);
  document.getElementById("hitung").addEventListener("click", hitungKeliling);
  