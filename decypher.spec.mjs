import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import decypher from './decypher.mjs';

describe('function decypher', () => {
  [
    {
      message: 'decyphers a single character shifted twice to the left',
      cypher: 'a',
      needle: 'c',
      expected: 'c'
    },
    {
      message: 'decyphers a single character shifted twice to the right',
      cypher: 'c',
      needle: 'a',
      expected: 'a'
    },
    {
      message: 'decyphers a two-letter word shifted twice to the right',
      cypher: 'qh',
      needle: 'of',
      expected: 'of'
    },
    {
      message: 'decyphers a two-letter word shifted twice to the left',
      cypher: 'md',
      needle: 'of',
      expected: 'of'
    },
    {
      message: 'decyphers a three-letter word shifted twice to the right',
      cypher: 'zbd',
      needle: 'ace',
      expected: 'ace'
    },
    {
      message: 'decyphers a three-letter word shifted twice to the left',
      cypher: 'adqn',
      needle: 'zero',
      expected: 'zero'
    },
    {
      message: 'decyphers a two-letter word with the highest positive offset',
      cypher: 'zr',
      needle: 'as',
      expected: 'as'
    },
    {
      message: 'decyphers a two-letter word with lowest negative offset',
      cypher: 'ad',
      needle: 'ze',
      expected: 'ze'
    },
    {
      message: 'decyphers a two-word text',
      cypher: 'dsfbuf wbmvf',
      needle: 'create',
      expected: 'create value'
    },
    {
      message: 'decyphers a two-word text with non-letter characters',
      cypher: 'dsfbuf wbmvf!',
      needle: 'create',
      expected: 'create value!'
    },
    {
      message: 'decyphers a two-word text where the needle matches the second word',
      cypher: 'wbmvf dsfbufe',
      needle: 'created',
      expected: 'value created'
    },
    {
      message: 'returns invalid where needle does not match any decyphered word',
      cypher: 'wbmvf dsfbufe',
      needle: 'who',
      expected: 'invalid'
    },
    {
      message: 'decyphers a single uppercase character shifted twice to the left',
      cypher: 'A',
      needle: 'C',
      expected: 'C'
    },
    {
      message: 'decyphers a single uppercase character shifted twice to the right',
      cypher: 'C',
      needle: 'A',
      expected: 'A'
    },
    {
      message: 'decyphers a capitalized two-letter word shifted twice to the right',
      cypher: 'Qh',
      needle: 'Of',
      expected: 'Of'
    },
    {
      message: 'decyphers a capitalized two-letter word shifted twice to the left',
      cypher: 'Md',
      needle: 'Of',
      expected: 'Of'
    },
    {
      message: 'decyphers a capitalized two-word text with non-letter characters',
      cypher: 'Dsfbuf wbmvf!',
      needle: 'Create',
      expected: 'Create value!'
    },
    {
      message: 'decyphers a capitalized two-word text',
      cypher: 'Dsfbuf wbmvf',
      needle: 'Create',
      expected: 'Create value'
    },
    {
      message: 'decyphers a two-word text with random uppercase characters',
      cypher: 'Dsfbuf wbMvf',
      needle: 'Create',
      expected: 'Create vaLue'
    },
  ].forEach(({ message, cypher, needle, expected }) => {
    it(message + ` ('${cypher}' => '${expected}')`, () => {
      const result = decypher(cypher, needle);
      assert.equal(result, expected);
    });
  });
});
