<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

        <!-- Styles -->

    </head>
    <body>
        <app-root></app-root>
        <script src="{{ asset('js/runtime.js')}}" defer></script>
        <script src="{{ asset('js/polyfills.js')}}" defer></script>
        <script src="{{ asset('js/styles.js')}}" defer></script>
        <script src="{{ asset('js/vendor.js')}}" defer></script>
        <script src="{{ asset('js/main.js')}}" defer></script>
    </body>
</html>
