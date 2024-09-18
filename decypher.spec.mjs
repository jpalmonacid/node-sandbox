import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import decypher from './decypher.mjs';

describe('function decypher', () => {
  it(`decyphers a single character shifted twice to the left ('a' => 'c')`, () => {
    const result = decypher('a', 'c');
    assert.equal(result, 'c');
  });
  it(`decyphers a single character shifted twice to the right ('c' => 'a')`, () => {
    const result = decypher('c', 'a');
    assert.equal(result, 'a');
  });
  it(`decyphers a two-letter word shifted twice to the right ('qh' => 'of')`, () => {
    const result = decypher('qh', 'of');
    assert.equal(result, 'of');
  });
  it(`decyphers a two-letter word shifted twice to the left ('md' => 'of')`, () => {
    const result = decypher('md', 'of');
    assert.equal(result, 'of');
  });
  it(`decyphers a two-letter word with the highest positive offset ('zr' => 'as')`, () => {
    const result = decypher('zr', 'as');
    assert.equal(result, 'as');
  });
  it(`decyphers a two-letter word with lowest negative offset ('ad' => 'ze')`, () => {
    const result = decypher('ad', 'ze');
    assert.equal(result, 'ze');
  });
  it(`decyphers a three-letter word with the highest positive offset ('zbd' => 'ace')`, () => {
    const result = decypher('zbd', 'ace');
    assert.equal(result, 'ace');
  });
  it(`decyphers a three-letter word with lowest negative offset ('adqn' => 'zero')`, () => {
    const result = decypher('adqn', 'zero');
    assert.equal(result, 'zero');
  });
  it(`decyphers a two-word text`, () => {
    const result = decypher('dsfbuf wbmvf', 'create');
    assert.equal(result, 'create value');
  });
});
