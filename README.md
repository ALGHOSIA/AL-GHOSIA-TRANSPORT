<!DOCTYPE html>
<html lang="fr">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>ALGHOSIATRANSPORT</title>

<style>

body{
margin:0;
font-family:Arial;
background:#0f0f0f;
color:white;
}

header{
background:black;
padding:20px;
display:flex;
justify-content:space-between;
align-items:center;
}

header h1{
color:gold;
}

nav a{
color:white;
margin-left:20px;
text-decoration:none;
}

.hero{
height:400px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
background:linear-gradient(#000,#111);
}

.hero h2{
font-size:40px;
}

.btn{
background:gold;
padding:15px 30px;
text-decoration:none;
color:black;
font-weight:bold;
margin-top:20px;
}

.cars{
display:flex;
justify-content:center;
gap:40px;
padding:50px;
}

.car{
background:#1c1c1c;
padding:20px;
border-radius:10px;
width:300px;
text-align:center;
}

.car img{
width:100%;
border-radius:10px;
}

.reservation{
background:#1c1c1c;
width:400px;
margin:auto;
padding:30px;
border-radius:10px;
}

input,select{
width:100%;
padding:12px;
margin:10px 0;
border:none;
border-radius:5px;
}

button{
width:100%;
padding:12px;
background:gold;
border:none;
font-weight:bold;
cursor:pointer;
}

footer{
text-align:center;
padding:20px;
background:black;
margin-top:40px;
}

</style>

</head>

<body>

<header>

<h1>ALGHOSIATRANSPORT</h1>

<nav>

<a href="#cars">Véhicules</a>
<a href="#reservation">Réservation</a>

</nav>

</header>

<section class="hero">

<h2>Chauffeur privé premium</h2>

<p>Service disponible 24h/24</p>

<a href="#reservation" class="btn">Réserver</a>

</section>

<section id="cars" class="cars">

<div class="car">

<img src="https://upload.wikimedia.org/wikipedia/commons/8/8f/BYD_Seal.jpg">

<h3>BYD Seal 2025</h3>

<p>Berline électrique premium silencieuse.</p>

</div>

<div class="car">

<img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Mercedes_AMG.jpg">

<h3>Mercedes AMG 2025</h3>

<p>Performance et luxe pour vos déplacements.</p>

</div>

</section>

<section id="reservation" class="reservation">

<h2>Réserver un chauffeur</h2>

<form>

<input type="text" placeholder="Nom" required>

<input type="text" placeholder="Départ" required>

<input type="text" placeholder="Destination" required>

<input type="date" required>

<select>

<option>BYD Seal 2025</option>

<option>Mercedes AMG 2025</option>

</select>

<input type="number" placeholder="Distance km">

<button>Envoyer réservation</button>

</form>

</section>

<footer>

<p>© 2025 ALGHOSIATRANSPORT</p>

</footer>

</body>

</html>
