<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="TemplateMo">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <title>Pharmacy Search</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Additional CSS Files -->
    <link rel="stylesheet" href="assets/css/fontawesome.css">
    <link rel="stylesheet" href="assets/css/templatemo-host-cloud.css">
    <link rel="stylesheet" href="assets/css/owl.css">
<!--

Host Cloud Template

https://templatemo.com/tm-541-host-cloud

-->
  </head>

  <body onload="translate1(),translate3()">

    <!-- ***** Preloader Start ***** -->
    <div id="preloader">
        <div class="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>  
    <!-- ***** Preloader End ***** -->

    <!-- Header -->

    
    @include('layouts.header')


    <!-- Page Content -->
    <!-- Heading Starts Here -->
    <div class="page-heading header-text">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>Pharmacie de garde</h1>
            <p><a href="index.html">Home</a> / <span>Pharmacie de garde</span></p>
          </div>
        </div>
      </div>
    </div>
    <!-- Heading Ends Here -->


    <!-- Pharmacie de garde Starts Here -->
    <section class="container">
        <div class="circle2"></div>
        <div class="circle1"></div>
        <div class="circle"></div>
        <a href="asslem.html"><img src="logo.png" alt="" class="logo"></a>
        <h1 class="grand_titre">KELIBIA </h1>
        <h3 class='minititre'>Cette semaine</h3>
        <div class="containerr">
            <h2 class='petit_titre7'>Veuillez utiliser l'application les jours de garde merci ! </h2>
        </div>
        <div class="container_map">

        </div>

        <a href="index.html"> <img src="flesh.png" alt="" class="flesh"></a>
    </section>
    <!-- Pharmacie de garde Ends Here -->



    @include('layouts.footer')

    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Additional Scripts -->
    <script src="assets/js/custom.js"></script>
    <script src="assets/js/owl.js"></script>
    <script src="assets/js/accordions.js"></script>


    <script language = "text/Javascript"> 
      cleared[0] = cleared[1] = cleared[2] = 0; //set a cleared flag for each field
      function clearField(t){                   //declaring the array outside of the
      if(! cleared[t.id]){                      // function makes it static and global
          cleared[t.id] = 1;  // you could use true and false, but that's more typing
          t.value='';         // with more chance of typos
          t.style.color='#fff';
          }
      }
    </script>

  </body>
  <script src="assets/js/kelibia.js"></script>
</html>