<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class crud extends Controller
{
    public function index()
    {
        return view("app");
    }
    public function add()
    {
        return view("app");
    }

    public function store(Request $req)
    {
        echo '<pre>';
        print_r($req->all());
    }
}
