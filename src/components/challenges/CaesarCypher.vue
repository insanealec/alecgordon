<template>
  <div>
    <h2>Caesar Cipher</h2>
    <label for="text">Text:</label>
    <textarea v-model="inputText" id="text" rows="4" cols="50"></textarea><br>
    <label for="shift">Shift:</label>
    <input v-model.number="shiftValue" type="number" id="shift"><br>
    <button @click="encrypt">Encrypt</button>
    <button @click="decrypt">Decrypt</button><br>
    <label for="result">Result:</label>
    <textarea v-model="result" id="result" rows="4" cols="50" readonly></textarea>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputText = ref<string>('');
const shiftValue = ref<number>(0);
const result = ref<string>('');

function encrypt(): void {
  result.value = caesarCipher(inputText.value, shiftValue.value);
}

function decrypt(): void {
  result.value = caesarCipher(inputText.value, -shiftValue.value);
}

function caesarCipher(text: string, shift: number): string {
  return text.split('').map((char: string) => {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt(0);
      const offset = code < 91 ? 65 : 97;
      return String.fromCharCode(((code - offset + shift) % 26 + 26) % 26 + offset);
    }
    return char;
  }).join('');
}
</script>

<style scoped>
/* Add your custom styles here */
</style>