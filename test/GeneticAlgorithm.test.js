import {describe, expect, test} from "@jest/globals";
import GeneticAlgorithm from '../public/scripts/GeneticAlgorithm';

describe('GeneticAlgorithm', () => {
    test('adds 1 + 2 to equal 3', () => {
        const ga = new GeneticAlgorithm();
        expect(ga.sum(1,2)).toBe(3);
    });
})
