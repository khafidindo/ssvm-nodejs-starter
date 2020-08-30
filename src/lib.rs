use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn sum(number: i32) -> i32{
  return number * 100;
}
