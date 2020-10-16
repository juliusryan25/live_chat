// Video tutorial/codealong here: https://youtu.be/fCpw5i_2IYU


    function openForm1() {
      document.getElementById("menu").style.display = "block";
      document.getElementById("menu").style.animation = "-webkit-animation: fadeInUp 500ms ease-in-out; fadeInUp 500ms ease-in-out;";
      document.getElementById("open").style.display = "none";
    }

    function openForm2() {
      document.getElementById("myForm").style.display = "block";
      document.getElementById("myForm").style.animation = "none";
      document.getElementById("menu").style.display = "none";
      document.getElementById("menu").style.animation = "-webkit-animation: fadeInUp 500ms ease-in-out; fadeInUp 500ms ease-in-out;";
    }
    function openkategori1() {
      document.getElementById("Kategori1").style.display = "block";
      document.getElementById("myForm").style.animation = "none";
      document.getElementById("myForm").style.display = "none";
      document.getElementById("menu").style.display = "none";
     
    }

    function back() {
      document.getElementById("menu").style.display = "block";
      document.getElementById("myForm").style.display = "none";
      document.getElementById("open").style.display = "none";
    }

    function closeForm() {
      document.getElementById("myForm").style.display = "none";
      document.getElementById("open").style.display = "block";
      document.getElementById("menu").style.display = "none";
      document.getElementById("menu").style.animation = "-webkit-animation: fadeInUp 500ms ease-in-out; fadeInUp 500ms ease-in-out;";
      
    }

    function closeForm2() {
      document.getElementById("menu").style.display = "none";
      document.getElementById("open").style.display = "block";
      document.getElementById("myForm").style.animation = "none";
      
    }
    function closeFormk1() {
      document.getElementById("kategori1").style.display = "none";
      document.getElementById("open").style.display = "block";
      document.getElementById("myForm").style.animation = "none";
      
    }
  
  
  // Video tutorial/codealong here: https://youtu.be/fCpw5i_2IYU