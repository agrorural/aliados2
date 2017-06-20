<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>
        <!-- Styles -->
        <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css">
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBMRo3Br-sRCNSnbFl41pqs5e__U5hWOws"
            async defer></script>
        @yield('head')
    </head>
    <body>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 main">
              @yield('content')
            </div>
          </div>
        </div>

        @yield('footer')
<!-- <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script> -->
        <script src="{{ mix('js/app.js') }}"></script>
        <script src="{{ mix('js/map.js') }}"></script>
    </body>
</html>
