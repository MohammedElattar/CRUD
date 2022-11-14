<?php

namespace App\Http\Controllers;

use App\Models\crud_model;
use Illuminate\Validation\Rules\File;
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

    /**
     * Undocumented function
     *
     * @param Request $req
     * @return void
     */
    public function store(Request $req)
    {
        $data = $req->validate(
            [
                'name' => 'bail|required|unique:crud,name|regex:/[a-zA-Z]/i',
                'category' => 'bail|required|regex:/[a-zA-Z]/i',
                'price' => 'bail|required|min:1',
                'quantity' => 'bail|required|min:1',
                'available' => ["bail", "regex:/^(true|false)$/i"],
                "image" => "sometimes|bail|image"
            ],
            [
                'name.required' => 'name-required',
                'name.unique'   => 'name-exists',
                'name.regex'    => 'name-valid',
                'category.required' => 'category-required',
                'category.regex' => 'category-valid',
                'price.required' => 'price-required',
                'price.min' => 'price-min',
                'quantity.required' => 'quantity-required',
                'quantity.min' => 'quantity-min',
                'available.regex' => 'available-valid',
                'image.image' => 'image-valid'
            ]
        );
        if ($req->has("image")) {
            $image_path = $req->file("image")->store("products");
        }

        $prod = new crud_model();
        $prod->name = $data['name'];
        $prod->category = $data['category'];
        $prod->price = $data['price'];
        $prod->quantity = $data['quantity'];
        $prod->available = $data['available'] == true ? 1 : 0;
        if ($req->has("image"))
            $prod->avatar = $image_path;
        $prod->save();
        http_response_code(200);
        echo json_encode(['status' => 200, 'Message' => 'Product Added Successfully']);
    }
}
