
use wasm_bindgen::prelude::*;
use rand::Rng;

#[wasm_bindgen]
pub fn random(name: String) -> String {
  let secret_number = rand::thread_rng().gen_range(1, 101).to_string();
  let r = String::from("Hello, ");
  return r + &name;
}
