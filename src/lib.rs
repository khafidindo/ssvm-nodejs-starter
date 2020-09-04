
use wasm_bindgen::prelude::*;


// C to F = C * 1.8 + 32
#[wasm_bindgen]
pub fn celcius_to_fahrenheit(celcius: String) -> String{
    let result  = (celcius.parse::<f64>().unwrap() * 1.8)+ 32.0;
    result.to_string()
}

