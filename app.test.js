import { describe, it, expect } from 'vitest';
import { countSheeps } from './app.js';

describe('countSheeps', () => {
    it('should return the correct number of sheep', () => {
        const list1 = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true];
        const output1 = countSheeps(list1);
        expect(output1).toBe('There are 17 sheep in total');
    });

    it('should indicate that wolves have eaten the sheep when there are no sheep', () => {
        const list2 = [false, false, false];
        const output2 = countSheeps(list2);
        expect(output2).toBe("UPS!!! Wolves have eaten the sheep");
    });

    it('should return the correct number of sheep with mixed values', () => {
        const list3 = [true, false, true, true, false, true];
        const output3 = countSheeps(list3);
        expect(output3).toBe('There are 4 sheep in total');
    });    

    it('should handle an empty list', () => {
        const list4 = [];
        const output4 = countSheeps(list4);
        expect(output4).toBe("UPS!!! Wolves have eaten the sheep");
    });
});
