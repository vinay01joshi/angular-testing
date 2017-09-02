
import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {
    it('should return the supported currecies',()=>{
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    })
});