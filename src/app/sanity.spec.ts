/* beautify ignore:start */
import {
// it,
// xit,
describe, inject
// expect,
// inject
} from '@angular/core/testing';
import {APP_ID} from '@angular/core';
/* beautify ignore:end */

describe('Sanity tests', () => {

    describe('universal truths', () => {
        it('should do math', () => {
            expect(1 + 1).toEqual(2);

            expect(5).toBeGreaterThan(4);
        });

        xit('should skip this', () => {
            expect(4).toEqual(40);
        });
    });

    describe('default test injector', () => {
        it('should provide default id', inject([APP_ID], (id) => {
            expect(id).toBe('a');
        }));
    });
});