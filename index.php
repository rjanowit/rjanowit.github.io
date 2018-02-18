<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="description" content="Landscape Contractor">
<meta name="keywords" content="landscape, contractor, licensed, design, build, hardscape, eco-friendly, planting">
<meta name="author" content="Richenda Janowitz - A12421488">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>Eco Minded Solutions - Landscape Design + Build (Login)</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link href="signin.css" rel="stylesheet">
<link href="style.css" rel="stylesheet">
</head>

<body class="text-center">

<?php
echo "My first PHP script!";
?>


    <form class="form-signin" action="/home.html" method="post">
      <img class="mb-4" src="images/ems-logo.png" alt="">
      <h1 class="h6 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-sm btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2018</p>
    </form>

</body>
</html>