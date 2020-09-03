
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn calculate(price: i32, qty: i32) -> i32{
    price * qty
}
