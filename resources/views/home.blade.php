@extends('layouts.app')

@section('title', 'Home Page')

@section('content')
  <div class="home">
    @include('components.navigation', ['page' => 'home'])
    <div>I am a home page</div>
  </div>
@endsection